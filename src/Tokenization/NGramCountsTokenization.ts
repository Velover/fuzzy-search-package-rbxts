//!native
//!optimize 2
import SubString from "../Utils/SubString";

/**
 * Generates a Map of n-grams with their frequencies.
 * @example "apple" → {"app":1, "ppl":1, "ple":1} (n=3)
 */
export function NGramCountsTokenization(
	str: string,
	n: number,
): Map<string, number> {
	const counts = new Map<string, number>();
	for (let i = 0; i <= str.size() - n; i++) {
		const gram = SubString(str, i, i + n);
		counts.set(gram, (counts.get(gram) ?? 0) + 1);
	}
	return counts;
}
