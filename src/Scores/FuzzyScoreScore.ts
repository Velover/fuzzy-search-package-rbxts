//!native
//!optimize 2
import CharAt from "../Utils/CharAt";

export function FuzzyScoreScore(term: string, query: string): number {
	const term_lower = term.lower();
	const query_lower = query.lower();
	let score = 0;
	let term_index = 0;
	let previous_matched_index = -1;

	for (const query_char of query_lower) {
		let found = false;

		// Search term from current position onwards
		for (; term_index < term_lower.size(); term_index++) {
			if (CharAt(term_lower, term_index) === query_char) {
				// Base point for match
				score += 1;

				// Bonus for consecutive matches
				if (previous_matched_index === term_index - 1) {
					score += 2;
				}

				previous_matched_index = term_index;
				term_index++; // Move past this character for next search
				found = true;
				break;
			}
		}

		if (!found) return 0;
	}

	return score;
}
