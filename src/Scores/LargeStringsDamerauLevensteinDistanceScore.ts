//!native
//!optimize 2
import CharAt from "../Utils/CharAt";

export function LargeStringsDamerauLevenshteinDistanceScore(
	term: string,
	query: string,
): number {
	const m = term.size(),
		n = query.size();
	if (m === 0) return n;
	if (n === 0) return m;

	let prev_row = new Array(n + 1, 0).map((_, i) => i);
	let curr_row = new Array(n + 1, 0);
	let pre_previous_row = new Array(n + 1, 0);

	for (let i = 1; i <= m; i++) {
		curr_row[0] = i;
		for (let j = 1; j <= n; j++) {
			const cost = CharAt(term, i - 1) === CharAt(query, j - 1) ? 0 : 1;
			curr_row[j] = math.min(
				prev_row[j] + 1, // Deletion
				curr_row[j - 1] + 1, // Insertion
				prev_row[j - 1] + cost, // Substitution
			);

			// Transposition check
			if (
				i > 1 &&
				j > 1 &&
				CharAt(term, i - 1) === CharAt(query, j - 2) &&
				CharAt(term, i - 2) === CharAt(query, j - 1)
			) {
				curr_row[j] = math.min(curr_row[j], pre_previous_row[j - 2] + 1);
			}
		}
		[pre_previous_row, prev_row, curr_row] = [
			prev_row,
			curr_row,
			pre_previous_row,
		];
	}

	return prev_row[n];
}
