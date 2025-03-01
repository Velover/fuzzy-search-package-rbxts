//!native
//!optimize 2

import { Scores } from "../Scores";

/**lower - better
 * @param output_terms if terms were transformed, here could be the original terms
 */
export function DamerauLevenshteinDistanceSorting(
	terms: string[],
	query: string,
	output_terms: string[] = terms,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [
				Scores.DamerauLevenshteinDistance(terms[i], query),
				output_terms[i],
			] as [number, string];
		})
		.sort(([a], [b]) => a < b);
}
