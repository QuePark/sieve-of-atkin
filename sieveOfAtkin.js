const primeTester = function (n) {
	if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
		// 이 if문은 n이 숫자가 아니거나, 1보다 작거나, 정수가 아닌 경우를 처리합니다.
		return false;
	}
	// TODO: 코드를 여기에 작성합니다.
	return n === 1 ? false : primeSieve(n).includes(n);
};

const primeSieve = function (limit) {
	const wheel = [1, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 53, 59];
	const result = [2, 3, 5];
	if (limit < 60) {
		return result.concat(wheel.filter((x) => x <= limit));
	}
	const firstWheel = [1, 13, 17, 29, 37, 41, 49, 53];
	const secondWheel = [7, 19, 31, 43];
	const thirdWheel = [11, 23, 47, 59];

	const states = new Array(limit + 1).fill(false);
	let n;

	for (let x = 1; x ** 2 < limit; x++) {
		for (let y = 1; y ** 2 < limit; y++) {
			n = 4 * x ** 2 + y ** 2;
			if (n <= limit && firstWheel.includes(n % 60)) {
				states[n] = true;
			}
			n = 3 * x ** 2 + y ** 2;
			if (n <= limit && secondWheel.includes(n % 60)) {
				states[n] = true;
			}
			n = 3 * x ** 2 - y ** 2;
			if (n <= limit && thirdWheel.includes(n % 60)) {
				states[n] = true;
			}
		}
	}

	return result.concat(
		states.map((value, index) => value && index).filter((x) => x),
	);
};

module.exports = primeTester;
