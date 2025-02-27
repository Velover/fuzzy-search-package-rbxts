//!native
//!optimize 2
import SubString from "../Utils/SubString";

/**
 * Generates a Set of unique n-grams from a string.
 * @example "apple" → {"app", "ppl", "ple"} (n=3)
 */
export function NGramSetTokenization(str: string, n: number): Set<string> {
	const n_grams = new Set<string>();
	for (let i = 0; i <= str.size() - n; i++) {
		n_grams.add(SubString(str, i, i + n));
	}
	return n_grams;
}
