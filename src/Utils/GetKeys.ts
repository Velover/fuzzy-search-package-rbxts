//!native
//!optimize 2
function GetKeys<K extends defined>(map: ReadonlyMap<K, defined>): K[] {
	const keys: K[] = [];
	for (const [key] of map) {
		keys.push(key);
	}
	return keys;
}

export = GetKeys;
