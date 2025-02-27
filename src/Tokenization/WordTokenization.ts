//!native
//!optimize 2
interface IWordTokenizationOptions {
	PreserveAccents?: boolean;
	PreserveHyphens?: boolean;
}
/**
 * Tokenizes text into lowercase words, ignoring punctuation.
 */
export function WordTokenization(
	text: string,
	options?: IWordTokenizationOptions,
): string[] {
	const tokens: string[] = [];
	const pattern = options?.PreserveAccents ? "[%w\x80-\xff]+" : "%w+";
	let normalized = text.lower().gsub("['']", "'")[0].gsub("[%c%z]", " ")[0];

	if (options?.PreserveHyphens) normalized = normalized.gsub("-", " ")[0];

	for (const [token] of normalized.gmatch(pattern)) {
		if ((token as string).find("'")[0] !== undefined) {
			for (const [part] of (token as string).gmatch("[^']+")) {
				tokens.push(part as string);
			}
			continue;
		}

		tokens.push(token as string);
	}
	return tokens;
}
