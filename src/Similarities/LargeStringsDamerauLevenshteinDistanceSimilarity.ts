//!native
//!optimize 2

import { Scores } from "../Scores";

/**
 * Normalizes Damerau-Levenshtein distance for large strings (0–1).
 */
export function LargeStringsDamerauLevenshteinDistanceSimilarity(
	term: string,
	query: string,
): number {
	const maxLen = math.max(term.size(), query.size());
	if (maxLen === 0) return 1;
	const distance = Scores.LargeStringsDamerauLevenshteinDistance(term, query);
	return 1 - distance / maxLen;
}
