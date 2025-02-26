//!native
//!optimize 2
import SubString from "../Utils/SubString";

/**
 * Generates a Map of n-grams with their frequencies.
 * @example "apple" → {"app":1, "ppl":1, "ple":1} (n=3)
 */
function GenerateNGramsCounts(str: string, n: number): Map<string, number> {
	const counts = new Map<string, number>();
	for (let i = 0; i <= str.size() - n; i++) {
		const gram = SubString(str, i, i + n);
		counts.set(gram, (counts.get(gram) ?? 0) + 1);
	}
	return counts;
}

export function NGramCosineScore(
	term: string,
	query: string,
	n: number,
): number {
	if (n < 1) throw "n must be ≥ 1";
	const a_grams = GenerateNGramsCounts(term, n);
	const b_grams = GenerateNGramsCounts(query, n);

	let dot_product = 0;
	let a_magnitude = 0;
	let b_magnitude = 0;

	// Calculate dot product and magnitudes
	a_grams.forEach((a_count, gram) => {
		const b_count = b_grams.get(gram) ?? 0;
		dot_product += a_count * b_count;
		a_magnitude += a_count ** 2;
	});

	b_grams.forEach((bCount) => {
		b_magnitude += bCount ** 2;
	});

	const magnitude = math.sqrt(a_magnitude) * math.sqrt(b_magnitude);
	return magnitude === 0 ? 0 : dot_product / magnitude;
}
