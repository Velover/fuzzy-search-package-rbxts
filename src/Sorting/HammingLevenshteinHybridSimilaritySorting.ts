//!native
//!optimize 2

import { Similarities } from "../Similarities";

/**higher - better */
export function HammingLevenshteinHybridSimilaritySorting(
	terms: string[],
	query: string,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			const term = terms[i];
			return [Similarities.HammingLevenshteinHybrid(term, query), term] as [
				number,
				string,
			];
		})
		.sort(([a], [b]) => a > b);
}
