//!native
//!optimize 2

import { Scores } from "../Scores";

/**higher - better */
export function CosineSimilaritySorting(
	terms: string[],
	tokenized_terms: string[][],
	tokenized_query: string[],
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [
				Scores.CosineTextSimilarity(tokenized_terms[i], tokenized_query),
				terms[i],
			] as [number, string];
		})
		.sort(([a], [b]) => a > b);
}
