//!native
//!optimize 2

import { Similarities } from "../Similarities";

/**higher - better
 * @param output_terms if terms were transformed, here could be the original terms
 */
export function DamerauLevenshteinDistanceSimilaritySorting<T = string>(
	terms: string[],
	query: string,
	output_terms: T[] = terms as T[],
): [number, T][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [
				Similarities.DamerauLevenshteinDistance(terms[i], query),
				output_terms[i],
			] as [number, T];
		})
		.sort(([a], [b]) => a > b);
}
