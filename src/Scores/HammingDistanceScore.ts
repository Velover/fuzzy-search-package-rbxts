//!native
//!optimize 2
import CharAt from "../Utils/CharAt";

/**
 * Calculates Hamming distance between two strings.
 * For unequal lengths, adds the difference in lengths to the mismatch count.
 */
export function HammingDistanceScore(term: string, query: string): number {
	const min_len = math.min(term.size(), query.size());
	const max_len = math.max(term.size(), query.size());
	let distance = max_len - min_len; // Start with length difference

	for (let i = 0; i < min_len; i++) {
		if (CharAt(term, i) !== CharAt(query, i)) distance++;
	}

	return distance;
}
