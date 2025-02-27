//!native
//!optimize 2
import SubString from "../Utils/SubString";

export function NGramTokenization(text: string, n: number): string[] {
	assert(n > 0, "N must be >= 1");
	const tokens: string[] = [];
	for (let i = 0; i <= text.size() - n; i++) {
		tokens.push(SubString(text, i, i + n));
	}
	return tokens;
}
