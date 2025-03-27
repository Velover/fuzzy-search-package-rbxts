//!native
//!optimize 2

import { Scores } from "../Scores";

/**higher - better */
export function CosineTextSimilaritySorting<T = string>(
	output_terms: T[],
	tokenized_terms: string[][],
	tokenized_query: string[],
): [number, T][] {
	return new Array(output_terms.size(), 0)
		.map((_, i) => {
			return [
				Scores.CosineTextSimilarity(tokenized_terms[i], tokenized_query),
				output_terms[i],
			] as [number, T];
		})
		.sort(([a], [b]) => a > b);
}
