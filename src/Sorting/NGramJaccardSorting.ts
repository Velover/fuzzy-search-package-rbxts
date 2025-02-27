//!native
//!optimize 2
import { Scores } from "../Scores";

/**higher - better */
export function NGramJaccardSorting(
	terms: string[],
	n_gram_set_tokenized_terms: Set<string>[],
	n_gram_set_tokenized_query: Set<string>,
): [number, string][] {
	return new Array(terms.size(), 0)
		.map((_, i) => {
			return [
				Scores.NGramJaccard(
					n_gram_set_tokenized_terms[i],
					n_gram_set_tokenized_query,
				),
				terms[i],
			] as [number, string];
		})
		.sort(([a], [b]) => a > b);
}
