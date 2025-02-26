//!native
//!optimize 2

import { Scores } from "../Scores";

/**
 * Normalizes Damerau-Levenshtein edit distance (0–1).
 */
export function DamerauLevenshteinDistanceSimilarity(
	term: string,
	query: string,
): number {
	const maxLen = math.max(term.size(), query.size());
	if (maxLen === 0) return 1;
	const distance = Scores.DamerauLevenshteinDistance(term, query);
	return 1 - distance / maxLen;
}
