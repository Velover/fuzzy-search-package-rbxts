//!native
//!optimize 2
function SubString(str: string, start: number, finish: number) {
	return str.sub(start + 1, finish + 1);
}

export = SubString;
