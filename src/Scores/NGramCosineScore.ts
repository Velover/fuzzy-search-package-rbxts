//!native
//!optimize 2

export function NGramCosineScore(
	n_gram_counts_tokenized_term: Map<string, number>,
	n_gram_counts_tokenized_query: Map<string, number>,
): number {
	const a_grams = n_gram_counts_tokenized_term;
	const b_grams = n_gram_counts_tokenized_query;

	let dot_product = 0;
	let a_magnitude = 0;
	let b_magnitude = 0;

	// Calculate dot product and magnitudes
	a_grams.forEach((a_count, gram) => {
		const b_count = b_grams.get(gram) ?? 0;
		dot_product += a_count * b_count;
		a_magnitude += a_count ** 2;
	});

	b_grams.forEach((bCount) => {
		b_magnitude += bCount ** 2;
	});

	const magnitude = math.sqrt(a_magnitude) * math.sqrt(b_magnitude);
	return magnitude === 0 ? 0 : dot_product / magnitude;
}
