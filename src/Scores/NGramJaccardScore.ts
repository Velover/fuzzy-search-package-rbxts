//!native
//!optimize 2

export function NGramJaccardScore(
	n_gram_set_tokenized_term: Set<string>,
	n_gram_set_tokenized_query: Set<string>,
): number {
	const a_grams = n_gram_set_tokenized_term;
	const b_grams = n_gram_set_tokenized_query;

	if (a_grams.size() === 0 && b_grams.size() === 0) return 1; // Both empty

	let intersection = 0;
	a_grams.forEach((gram) => {
		if (b_grams.has(gram)) intersection++;
	});

	const union = a_grams.size() + b_grams.size() - intersection;
	return union === 0 ? 0 : intersection / union;
}
