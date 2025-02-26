//!native
//!optimize 2
import SubString from "../Utils/SubString";

const mapping = new Map<string, string>([
	["B", "1"],
	["F", "1"],
	["P", "1"],
	["V", "1"],
	["C", "2"],
	["G", "2"],
	["J", "2"],
	["K", "2"],
	["Q", "2"],
	["S", "2"],
	["X", "2"],
	["Z", "2"],
	["D", "3"],
	["T", "3"],
	["L", "4"],
	["M", "5"],
	["N", "5"],
	["R", "6"],
]);
const vovels = "AEIOUHWY".split("");
const padding = "0000";

export function SoundexTransform(input: string): string {
	if (input.size() === 0) return padding;

	const s = input.upper().split("");
	const firstChar = s[0];
	const soundexCode: string[] = [firstChar];

	let previousCode = "";
	// Process remaining characters (skip vowels/h/w/y)
	for (let i = 1; i < s.size(); i++) {
		const char = s[i];
		if (vovels.includes(char)) continue; // Skip vowels/h/w/y

		const code = mapping.get(char) ?? "";
		if (code && code !== previousCode) {
			soundexCode.push(code);
			previousCode = code; // Track to collapse consecutive duplicates
		}
	}

	// Build final code: first letter + 3 digits, padded/truncated
	const code = SubString(`${soundexCode.join("")}${padding}`, 0, 4);
	return code;
}
