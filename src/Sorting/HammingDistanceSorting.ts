//!native
//!optimize 2

import { Scores } from "../Scores";

/**lower - better */
export function HammingDistanceSorting(
	terms: string[],
	query: string,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			const term = terms[i];
			return [Scores.HammingDistance(term, query), term] as [number, string];
		})
		.sort(([a], [b]) => a < b);
}
