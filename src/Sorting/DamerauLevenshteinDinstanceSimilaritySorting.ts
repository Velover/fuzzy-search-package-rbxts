//!native
//!optimize 2

import { Similarities } from "../Similarities";

/**higher - better
 * @param output_terms if terms were transformed, here could be the original terms
 */
export function DamerauLevenshteinDistanceSimilaritySorting(
	terms: string[],
	query: string,
	output_terms: string[] = terms,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [
				Similarities.DamerauLevenshteinDistance(terms[i], query),
				output_terms[i],
			] as [number, string];
		})
		.sort(([a], [b]) => a > b);
}
