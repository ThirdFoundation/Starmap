function findStars(array) {
	console.log(array);
	console.log(array.length);
	var coords = [];
	for (var i = 0; i < array.length; i++) {
		console.log(i);
		console.log(array[i]);
		for (var j = 0; j < array[i].length; j++) {
			console.log(i, j);
			console.log(array[i][j]);
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
		console.log(pixelsInStar);
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
				console.log(pixelsInStar);
				array[starty][nextPixel] = 2;
				nextPixel++;
			}
			return nextPixel - 1;
		};

		function paintLeft(startx, starty) {
			var prevPixel = startx - 1;
			while (array[starty][prevPixel] === 1) {
				pixelsInStar.push([prevPixel, starty]);
				console.log(pixelsInStar);
				array[starty][prevPixel] = 2;
				prevPixel--;
			}
			return prevPixel + 1;
		};

		function checkRange(input) {
			var leftBound, rightBound;
			if (array[input[0]][input[1]] === 1) {
				array[input[0]][input[1]] = 2;
				leftBound = paintLeft(input[1], input[0]);
				rightBound = paintRight(input[1], input[0]);
				addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
				if (rightBound < input[2]) {
					leftBound = rightBound;
					while(array[input[0]][leftBound] !== 1 && leftBound <= input[2]) {
						leftBound++;
					}
					if (leftBound > input[2]) {
						return;
					}
					rightBound = paintRight(leftBound, input[0]);
					addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
				}
			} else {
				leftBound = input[1];
				while(array[input[0]][leftBound] !==1 && leftBound <= input[2]) {
					leftBound++;
				}
				if (leftBound > input[2]) {
					return;
				}
				rightBound = paintRight(leftBound, input[0]);
				addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
			};

			function addRanges(currenty, childLeft, childRight, parentL, parentR, vector) {
				toBeChecked.push([currenty - vector, childLeft, childRight, vector]);
				compareRange(childLeft, childRight, parentL, parentR, -vector);

				function compareRange(startNew, endNew, startOld, endOld, vector) {
					if (endOld < startNew || endNew < startOld) {
						toBeChecked.push([currenty - vector, startNew, endNew, vector]);
						return;
					} else if (startOld <= startNew && endNew <= endOld) {
						return;
					} else if (startNew < startOld) {
						toBeChecked.push([currenty - vector, startNew, startOld - 1, vector]);
					} else if (endOld < endNew) {
						toBeChecked.push([currenty - vector, endOld + 1, endNew, vector]);
					};
				};
			};
		};
	};
};