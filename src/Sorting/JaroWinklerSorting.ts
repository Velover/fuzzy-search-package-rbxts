//!native
//!optimize 2

import { Scores } from "../Scores";

/**higher - better */
export function JaroWinklerSorting(
	terms: string[],
	query: string,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			const term = terms[i];
			return [Scores.JaroWinkler(term, query), term] as [number, string];
		})
		.sort(([a], [b]) => a > b);
}
