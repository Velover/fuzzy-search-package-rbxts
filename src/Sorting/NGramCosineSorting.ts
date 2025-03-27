//!native
//!optimize 2
import { Scores } from "../Scores";

/**higher - better */
export function NGramCosineSorting<T = string>(
	output_terms: T[],
	n_gram_count_tokenized_terms: Map<string, number>[],
	n_gram_count_tokenized_query: Map<string, number>,
): [number, T][] {
	return new Array(output_terms.size(), 0)
		.map((_, i) => {
			return [
				Scores.NGramCosine(
					n_gram_count_tokenized_terms[i],
					n_gram_count_tokenized_query,
				),
				output_terms[i],
			] as [number, T];
		})
		.sort(([a], [b]) => a > b);
}
