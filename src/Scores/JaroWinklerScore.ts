//!native
//!optimize 2
import CharAt from "../Utils/CharAt";

function JaroDistance(
	string_1: string,
	string_2: string,
	case_sensitive: boolean = true,
) {
	if (string_1.size() === 0 || string_2.size() === 0) {
		return 0;
	}

	if (!case_sensitive) {
		string_1 = string_1.upper();
		string_2 = string_2.upper();
	}

	if (string_1 === string_2) return 1;

	let m = 0;
	const len1 = string_1.size();
	const len2 = string_1.size();

	const window = math.floor(math.max(len1, len2) / 2) - 1;

	const str1_hash = new Array<boolean>(len1);
	const str2_hash = new Array<boolean>(len2);

	for (const i of $range(0, len1 - 1)) {
		for (const j of $range(
			math.max(0, i - window),
			math.min(len2, i + window + 1) - 1,
		)) {
			if (
				!str1_hash[i] &&
				!str2_hash[j] &&
				CharAt(string_1, i) === CharAt(string_2, j)
			) {
				++m;
				str1_hash[i] = str2_hash[j] = true;
				break;
			}
		}
	}

	if (m === 0) return 0;

	let t = 0;
	let point = 0;
	for (const i of $range(0, len1 - 1)) {
		if (str1_hash[i]) {
			while (!str2_hash[point]) {
				point++;
			}

			if (CharAt(string_1, i) !== CharAt(string_2, point++)) {
				t++;
			}
		}
	}

	t /= 2;
	return (m / len1 + m / len2 + (m - t) / m) / 3;
}

/**@see https://github.com/kwunshing123/jaro-winkler-typescript/blob/master/src/index.ts */
export function JaroWinklerScore(
	term: string,
	query: string,
	case_sensitive: boolean = true,
): number {
	let jaro_dist: number = JaroDistance(term, query, case_sensitive);
	let prefix = 0;

	if (jaro_dist > 0.7) {
		const min_index = math.min(term.size(), query.size());
		let i = 0;
		while (CharAt(term, i) === CharAt(query, i) && i < 4 && i < min_index) {
			++prefix;
			++i;
		}
		jaro_dist += 0.1 * prefix * (1 - jaro_dist);
	}

	return jaro_dist;
}
