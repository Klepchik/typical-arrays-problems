
exports.min = function min (array) {
	if (array && array.length > 0) {
		let minimalElementValue = array[0];

		for (let i = 0; i < array.length; i++) {
			if (array[i] < minimalElementValue) {
				minimalElementValue = array[i];
			}
		}

		return minimalElementValue;
	}

	else {
		return 0;
	}
}

exports.max = function max (array) {
	if (array && array.length > 0) {
		let maximumElementValue = array[0];

		for (let i = 0; i < array.length; i++) {
			if (array[i] > maximumElementValue) {
				maximumElementValue = array[i];
			}
		}

	return maximumElementValue;
	}

	else {
		return 0;
	}
}

exports.avg = function avg (array) {
	if (array && array.length > 0) {
		let total = 0;

	for (let i = 0; i < array.length; i++) {
		total = total + array[i];
	}

	arithmeticalAverage = total / array.length;

	return arithmeticalAverage;
	}

	else {
		return 0;
	}
}
