//!native
//!optimize 2
import GetKeys from "../Utils/GetKeys";

/**
 * Tokenizes text into lowercase words, ignoring punctuation.
 */
function Tokenize(text: string): string[] {
	const tokens: string[] = [];
	for (const [token] of text.lower().gmatch("%a+[%-%d']*%a*")) {
		if (
			typeIs(token, "number") ||
			token.size() > 1 ||
			token.match("%d")[0] !== undefined
		)
			tokens.push(tostring(token));
	}
	return tokens;
}

/**
 * Creates a term frequency map { word: count } from tokens.
 */
function GetTermFrequency(tokens: string[]): Map<string, number> {
	return tokens.reduce((acc, token) => {
		acc.set(token, (acc.get(token) ?? 0) + 1);
		return acc;
	}, new Map<string, number>());
}

/**
 * Builds a combined vocabulary from two term frequency maps.
 */
function BuildVocabulary(
	tf1: ReadonlyMap<string, number>,
	tf2: ReadonlyMap<string, number>,
): string[] {
	return [...new Set([...GetKeys(tf1), ...GetKeys(tf2)])];
}

/**
 * Converts text to vector based on global vocabulary.
 */
function TextToVector(
	term_freq: ReadonlyMap<string, number>,
	vocabulary: string[],
): number[] {
	return vocabulary.map((term) => term_freq.get(term) ?? 0);
}

/**
 * Computes cosine similarity between two vectors.
 * Returns 0-1 (1 = identical, 0 = no similarity).
 */
function CosineSimilarity(vecA: number[], vecB: number[]): number {
	if (vecA.size() !== vecB.size()) throw "Vector length mismatch";

	// Handle zero vectors
	const mag_a = math.sqrt(vecA.reduce((sum, x) => sum + x * x, 0));
	const mag_b = math.sqrt(vecB.reduce((sum, x) => sum + x * x, 0));
	if (mag_a === 0 && mag_b === 0) return 1;
	if (mag_a === 0 || mag_b === 0) return 0;

	// Dot product calculation
	const dot_product = vecA.reduce((sum, x, i) => sum + x * vecB[i], 0);

	return dot_product / (mag_a * mag_b);
}

// Main function
export function CosineTextSimilarityScore(term: string, query: string): number {
	const tokens_a = Tokenize(term);
	const tokens_b = Tokenize(query);

	const tf_a = GetTermFrequency(tokens_a);
	const tf_b = GetTermFrequency(tokens_b);

	const vocabulary = BuildVocabulary(tf_a, tf_b);
	const vec_a = TextToVector(tf_a, vocabulary);
	const vec_b = TextToVector(tf_b, vocabulary);

	return CosineSimilarity(vec_a, vec_b);
}
