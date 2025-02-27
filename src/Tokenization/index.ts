import { NGramCountsTokenization } from "./NGramCountsTokenization";
import { NGramSetTokenization } from "./NGramSetTokenization";
import { NGramTokenization } from "./NGramTokenization";
import { WordTokenization } from "./WordTokenization";

export namespace Tokenization {
	export const NGram = NGramTokenization;
	export const Word = WordTokenization;
	export const NGramCounts = NGramCountsTokenization;
	export const NGramSet = NGramSetTokenization;
}
