//!native
//!optimize 2

import { Scores } from "../Scores";

/**higher - better
 * @param output_terms if terms were transformed, here could be the original terms
 */
export function FuzzyScoreSorting<T = string>(
	terms: string[],
	query: string,
	output_terms: T[] = terms as T[],
): [number, T][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [Scores.FuzzyScore(terms[i], query), output_terms[i]] as [
				number,
				T,
			];
		})
		.sort(([a], [b]) => a > b);
}
