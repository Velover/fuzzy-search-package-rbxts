//!native
//!optimize 2

import { HammingDistanceSimilarity } from "./HammingDistanceSimilarity";
import { LevenshteinDistanceSimilarity } from "./LevenshteinDistanceSimilarity";

export function HammingLevenshteinHybridSimilarity(
	term: string,
	query: string,
): number {
	return (
		(HammingDistanceSimilarity(term, query) +
			LevenshteinDistanceSimilarity(term, query)) /
		2
	);
}
