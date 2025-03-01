import { CosineTextSimilaritySorting } from "./CosineTextSimilaritySorting";
import { DamerauLevenshteinDistanceSimilaritySorting } from "./DamerauLevenshteinDinstanceSimilaritySorting";
import { DamerauLevenshteinDistanceSorting } from "./DamerauLevenshteinDistanceSorting";
import { FuzzyScoreSorting } from "./FuzzyScoreSorting";
import { HammingDistanceSimilaritySorting } from "./HammingDistanceSimilaritySorting";
import { HammingDistanceSorting } from "./HammingDistanceSorting";
import { HammingLevenshteinHybridSimilaritySorting } from "./HammingLevenshteinHybridSimilaritySorting";
import { JaroWinklerSorting } from "./JaroWinklerSorting";
import { LargeStringsDamerauLevenshteinDistanceSimilaritySorting } from "./LargeStringsDamerauLevenshteinDistanceSimilaritySorting";
import { LargeStringsDamerauLevenshteinDistanceSorting } from "./LargeStringsDamerauLevenshteinDistanceSorting";
import { LevenshteinDistanceSimilaritySorting } from "./LevenshteinDistanceSimilaritySorting";
import { LevenshteinDistanceSorting } from "./LevenshteinDistanceSorting";
import { NGramCosineSorting } from "./NGramCosineSorting";
import { NGramJaccardSorting } from "./NGramJaccardSorting";

export namespace Sorting {
	export const CosineTextSimilarity = CosineTextSimilaritySorting;
	export const DamerauLevenshteinDistance = DamerauLevenshteinDistanceSorting;
	export const DamerauLevenshteinDinstanceSimilarity =
		DamerauLevenshteinDistanceSimilaritySorting;
	export const FuzzyScore = FuzzyScoreSorting;
	export const HammingDistanceSimilarity = HammingDistanceSimilaritySorting;
	export const HammingDistance = HammingDistanceSorting;
	export const HammingLevenshteinHybridSimilarity =
		HammingLevenshteinHybridSimilaritySorting;
	export const JaroWinkler = JaroWinklerSorting;
	export const LargeStringsDamerauLevenshteinDistanceSimilarity =
		LargeStringsDamerauLevenshteinDistanceSimilaritySorting;
	export const LargeStringsDamerauLevenshteinDistance =
		LargeStringsDamerauLevenshteinDistanceSorting;
	export const LevenshteinDistanceSimilarity =
		LevenshteinDistanceSimilaritySorting;
	export const LevenshteinDistance = LevenshteinDistanceSorting;
	export const NGramCosine = NGramCosineSorting;
	export const NGramJaccard = NGramJaccardSorting;
}
