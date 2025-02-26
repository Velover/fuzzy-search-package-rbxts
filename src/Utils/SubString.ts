//!native
//!optimize 2
/**
 *
 * @param str
 * @param start
 * @param finish
 * @returns subbed string [start, finish)
 */
function SubString(str: string, start: number, finish: number) {
	return str.sub(start + 1, finish);
}

export = SubString;
