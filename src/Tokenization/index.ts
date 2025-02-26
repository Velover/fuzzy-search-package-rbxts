import { NGramTokenization } from "./NGramTokenization";
import { WordTokenization } from "./WordTokenization";

export namespace Tokenization {
	export const NGram = NGramTokenization;
	export const Word = WordTokenization;
}
