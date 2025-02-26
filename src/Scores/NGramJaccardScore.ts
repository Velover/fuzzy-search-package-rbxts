//!native
//!optimize 2
import SubString from "../Utils/SubString";

/**
 * Generates a Set of unique n-grams from a string.
 * @example "apple" → {"app", "ppl", "ple"} (n=3)
 */
function GenerateNGramsSet(str: string, n: number): Set<string> {
	const n_grams = new Set<string>();
	for (let i = 0; i <= str.size() - n; i++) {
		n_grams.add(SubString(str, i, i + n));
	}
	return n_grams;
}

export function NGramJaccardScore(
	term: string,
	query: string,
	n: number,
): number {
	if (n < 1) throw "n must be ≥ 1";
	const a_grams = GenerateNGramsSet(term, n);
	const b_grams = GenerateNGramsSet(query, n);

	if (a_grams.size() === 0 && b_grams.size() === 0) return 1; // Both empty

	let intersection = 0;
	a_grams.forEach((gram) => {
		if (b_grams.has(gram)) intersection++;
	});

	const union = a_grams.size() + b_grams.size() - intersection;
	return union === 0 ? 0 : intersection / union;
}
