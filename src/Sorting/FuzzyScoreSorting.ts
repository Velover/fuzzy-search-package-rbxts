//!native
//!optimize 2

import { Scores } from "../Scores";

/**higher - better
 * @param output_terms if terms were transformed, here could be the original terms
 */
export function FuzzyScoreSorting(
	terms: string[],
	query: string,
	output_terms: string[] = terms,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [Scores.FuzzyScore(terms[i], query), output_terms[i]] as [
				number,
				string,
			];
		})
		.sort(([a], [b]) => a > b);
}
