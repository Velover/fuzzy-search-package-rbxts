//!native
//!optimize 2
function CharAt(value: string, index: number) {
	return value.sub(index + 1, index + 1);
}

export = CharAt;
