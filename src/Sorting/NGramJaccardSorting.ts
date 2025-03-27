//!native
//!optimize 2
import { Scores } from "../Scores";

/**higher - better */
export function NGramJaccardSorting<T = string>(
	output_terms: T[],
	n_gram_set_tokenized_terms: Set<string>[],
	n_gram_set_tokenized_query: Set<string>,
): [number, T][] {
	return new Array(output_terms.size(), 0)
		.map((_, i) => {
			return [
				Scores.NGramJaccard(
					n_gram_set_tokenized_terms[i],
					n_gram_set_tokenized_query,
				),
				output_terms[i],
			] as [number, T];
		})
		.sort(([a], [b]) => a > b);
}
