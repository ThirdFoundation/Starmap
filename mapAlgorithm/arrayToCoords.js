imgApp = {};

imgApp.ngModule = angular.module('imgApp', []);

imgApp.ngModule.controller('coordsController', ['$scope', '$http', function($scope, $http) {
	$scope.grids = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12',
									'b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12',
									'c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12',
									'd1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12'];
	$scope.results = [];
	$scope.findStars = function(array) {
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
			return coords.sort(function(a,b) {
				return b[2] - a[2];
			});

			function paintStar(x, y) {
				var pixelsInStar = [[x,y]],
						toBeChecked = [],
						firstRowEnd = paintRight(x, y);
				toBeChecked.push([y + 1, x, firstRowEnd, -1]);
				while (toBeChecked.length > 0) {
					checkRange(toBeChecked.pop());
				};
				coords.push(calcCoords(pixelsInStar));

				function calcCoords(listOfPixels) {
					var xyr = [],
							total = listOfPixels.length,
							xmin = listOfPixels[0][0],
							xmax = xmin,
							xtot = 0,
							ymin = listOfPixels[0][1],
							ymax = ymin,
							ytot = 0;
					for (var k = 0; k < total; k++) {
						xtot += listOfPixels[k][0];
						ytot += listOfPixels[k][1];
						if (listOfPixels[k][0] < xmin) {
							xmin = listOfPixels[k][0];
						}
						if (listOfPixels[k][0] > xmax) {
							xmax = listOfPixels[k][0];
						}
						if (listOfPixels[k][1] > ymax) {
							ymax = listOfPixels[k][1];
						}
					}
					xyr.push(Math.round(xtot/total));
					xyr.push(Math.round(ytot/total));
					if (total <= 2) {
						xyr.push(1);
					} else if (2 < total && total <= 9) {
						xyr.push(2);
					} else if (9 < total && total <= 30) {
						xyr.push(3);
					} else {
						xyr.push(Math.ceil(((xmax - xmin)/2 + (ymax - ymin)/2 + 2*Math.sqrt(total/Math.PI))/4));
					}
					return xyr;
				}

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

	for (var i = 0; i < $scope.grids.length; i++) {
		$http.get('sectorData/' + $scope.grids[i] + '.txt').success(function(data) {
			$scope.results.push($scope.findStars(data));
		});
	}
}]);