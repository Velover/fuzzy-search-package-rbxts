//!native
//!optimize 2

import { Scores as ScoresNamespace } from "./Scores";
import { Similarities as SimilaritiesNamespace } from "./Similarities";
import { Transform as TransformNamespace } from "./Transform";

export namespace FuzzySearch {
	export const Scores = ScoresNamespace;
	export const Similarities = SimilaritiesNamespace;
	export const Transform = TransformNamespace;
}
