//!native
//!optimize 2
import CharAt from "../Utils/CharAt";

export function LevenshteinDistanceScore(term: string, query: string): number {
	const matrix: number[][] = new Array(term.size() + 1, 0).map(
		() => new Array(query.size() + 1, 0),
	);

	for (let i = 0; i <= term.size(); i++) matrix[i][0] = i;
	for (let j = 0; j <= query.size(); j++) matrix[0][j] = j;

	for (let i = 1; i <= term.size(); i++) {
		for (let j = 1; j <= query.size(); j++) {
			const cost = CharAt(term, i - 1) === CharAt(query, j - 1) ? 0 : 1;
			matrix[i][j] = math.min(
				matrix[i - 1][j] + 1, // Deletion
				matrix[i][j - 1] + 1, // Insertion
				matrix[i - 1][j - 1] + cost, // Substitution
			);
		}
	}

	return matrix[term.size()][query.size()];
}
