function findStars(array) {
	var coords = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			if (array[i][j] !== 1) {
				continue;
			} else {
				array[i][j] = 2;
				paintStar(j, i);
			}
		}
	}
	return coords;

	function paintStar(x, y) {
		var pixelsInStar = [[x,y]];
		var toBeChecked = [];
		var firstRowEnd = paintRight(x, y);
		toBeChecked.push([y + 1, x, firstRowEnd, -1]);
		while (toBeChecked.length > 0) {
			checkRange(toBeChecked.pop());
		};

		function paintRight(startx, starty) {
			var nextPixel = startx + 1;
			while (array[starty][nextPixel] === 1) {
				pixelsInStar.push([nextPixel, starty]);
				array[starty][nextPixel] = 2;
				nextPixel++;
			}
			return nextPixel - 1;
		};

		function paintLeft(startx, starty) {
			var prevPixel = startx - 1;
			while (array[starty][prevPixel] === 1) {
				pixelsInStar.push([prevPixel, starty]);
				array[starty][prevPixel] = 2;
				prevPixel--;
			}
			return prevPixel + 1;
		};

		function checkRange(input) {
			var leftBound = input[1];
			var rightBound = input[1];
			var notFinished;
			if (array[input[0]][leftBound] === 1) {
				pixelsInStar.push([leftBound, input[0]]);
				array[input[0]][leftBound] = 2;
				leftBound = paintLeft(leftBound, input[0]);
				rightBound = paintRight(rightBound, input[0]);
				addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
			}
			if (rightBound < input[2]) {
				notFinished = true;
				leftBound = rightBound + 1;
			}
			while (notFinished) {
				if (array[input[0]][leftBound] === 1) {
					pixelsInStar.push([leftBound, input[0]]);
					array[input[0]][leftBound] = 2;
					rightBound = paintRight(leftBound, input[0]);
					addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
					if (rightBound >= input[2]) {
						notFinished = false;
					} else {
						leftBound = rightBound + 1;
					}
				} else {
					leftBound++;
					if (leftBound > input[2]) {
						notFinished = false;
					}
				}
			};

			function addRanges(currenty, childLeft, childRight, parentL, parentR, vector) {
				toBeChecked.push([currenty - vector, childLeft, childRight, vector]);
				compareRange(childLeft, childRight, parentL, parentR, -vector);

				function compareRange(startNew, endNew, startOld, endOld, newVec) {
					if (endOld < startNew || endNew < startOld) {
						toBeChecked.push([currenty - newVec, startNew, endNew, newVec]);
						return;
					}
					if (startOld <= startNew && endNew <= endOld) {
						return;
					}
					if (startNew < startOld) {
						toBeChecked.push([currenty - newVec, startNew, startOld - 1, newVec]);
					}
					if (endOld < endNew) {
						toBeChecked.push([currenty - newVec, endOld + 1, endNew, newVec]);
					};
				};
			};
		};
	};
};