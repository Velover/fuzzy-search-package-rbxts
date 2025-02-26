//!native
//!optimize 2

import { Scores } from "../Scores";

/**
 * Normalizes Levenshtein edit distance to a similarity score (0–1).
 */
export function LevenshteinDistanceSimilarity(
	term: string,
	query: string,
): number {
	const maxLen = math.max(term.size(), query.size());
	if (maxLen === 0) return 1;
	const distance = Scores.LevenshteinDistance(term, query); // Assume distance implementation
	return 1 - distance / maxLen;
}
