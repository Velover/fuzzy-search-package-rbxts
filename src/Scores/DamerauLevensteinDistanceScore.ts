//!native
//!optimize 2
import CharAt from "../Utils/CharAt";

export function DamerauLevenshteinDistanceScore(
	term: string,
	query: string,
): number {
	const m = term.size(),
		n = query.size();
	const matrix: number[][] = new Array(m + 1, 0).map(() => new Array(n + 1, 0));

	// Initialize matrix
	for (let i = 0; i <= m; i++) matrix[i][0] = i;
	for (let j = 0; j <= n; j++) matrix[0][j] = j;

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			const cost = CharAt(term, i - 1) === CharAt(query, j - 1) ? 0 : 1;
			matrix[i][j] = math.min(
				matrix[i - 1][j] + 1, // Deletion
				matrix[i][j - 1] + 1, // Insertion
				matrix[i - 1][j - 1] + cost, // Substitution
			);

			// Check for transposition (Damerau extension)
			if (
				i > 1 &&
				j > 1 &&
				CharAt(term, i - 1) === CharAt(query, j - 2) &&
				CharAt(term, i - 2) === CharAt(query, j - 1)
			) {
				matrix[i][j] = math.min(matrix[i][j], matrix[i - 2][j - 2] + 1);
			}
		}
	}

	return matrix[m][n];
}
