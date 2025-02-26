import { DamerauLevenshteinDistanceSimilarity } from "./DamerauLevenshteinDistanceSimilarity";
import { HammingDistanceSimilarity } from "./HammingDistanceSimilarity";
import { LargeStringsDamerauLevenshteinDistanceSimilarity } from "./LargeStringsDamerauLevenshteinDistanceSimilarity";
import { LevenshteinDistanceSimilarity } from "./LevenshteinDistanceSimilarity";

export namespace Similarities {
	export const DamerauLevenshteinDistance =
		DamerauLevenshteinDistanceSimilarity;
	export const HammingDistance = HammingDistanceSimilarity;
	export const LevenshteinDistance = LevenshteinDistanceSimilarity;
	export const LargeStringsDamerauLevenshteinDistance =
		LargeStringsDamerauLevenshteinDistanceSimilarity;
}
