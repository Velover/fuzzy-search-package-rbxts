import { CosineTextSimilarityScore } from "./ConsineTextSimilarityScore";
import { DamerauLevenshteinDistanceScore } from "./DamerauLevensteinDistanceScore";
import { FuzzyScoreScore } from "./FuzzyScoreScore";
import { HammingDistanceScore } from "./HammingDistanceScore";
import { JaroWinklerScore } from "./JaroWinklerScore";
import { LargeStringsDamerauLevenshteinDistanceScore } from "./LargeStringsDamerauLevensteinDistanceScore";
import { LevenshteinDistanceScore } from "./LevenshteinDistanceScore";
import { NGramCosineScore } from "./NGramCosineScore";
import { NGramJaccardScore } from "./NGramJaccardScore";

export namespace Scores {
	export const CosineTextSimilarity = CosineTextSimilarityScore;
	export const DamerauLevenshteinDistance = DamerauLevenshteinDistanceScore;
	export const FuzzyScore = FuzzyScoreScore;
	export const HammingDistance = HammingDistanceScore;
	export const JaroWinkler = JaroWinklerScore;
	export const LargeStringsDamerauLevenshteinDistance =
		LargeStringsDamerauLevenshteinDistanceScore;
	export const LevenshteinDistance = LevenshteinDistanceScore;
	export const NGramCosine = NGramCosineScore;
	export const NGramJaccard = NGramJaccardScore;
}
