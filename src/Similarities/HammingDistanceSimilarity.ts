//!native
//!optimize 2

import { Scores } from "../Scores";

/**
 * Normalizes Hamming distance to a similarity score (0–1).
 */
export function HammingDistanceSimilarity(term: string, query: string): number {
	const maxLen = math.max(term.size(), query.size());
	if (maxLen === 0) return 1;
	const distance = Scores.HammingDistance(term, query);
	return 1 - distance / maxLen;
}
