function findStars(array) {
	var coords = [
								[], // Tier 4 stars (stars where ~50 < pixels; r >= 5)
								[], // Tier 5 stars (stars where 9 < pixels <= ~50; r = 3 or 4)
								[], // Tier 6 stars (stars containing 2 < pixels <= 9; r = 2)
								[]	// Tier 7 stars (stars containing <=2 pixels; r = 1)
							 ];
	/* For every line in the overall array ... */
	for (var i = 0; i < array.length; i++) {
		/* ... for every pixel in that line ... */
		for (var j = 0; j < array[i].length; j++) {
			/* ...if that pixel's value is anything other than 1 (white), continue.
			White pixels that have already been accounted for will have their value
			changed to 2 to differentiate them from not-yet-counted ones. */
			if (array[i][j] !== 1) {
				continue;
			} else {
				array[i][j] = 2;
				paintStar(j, i);
			}
		}
	}
	/* Once the for-loops run and every star has been 'painted' by the algorithm,
	we sort the coordinates list according to the size of the third element
	(radius), largest to smallest.  This will allow for prioritization, filling in
	the brightest/most visible stars first. */
	return coords.sort(function(a,b) {
		return b[2] - a[2];
	});

	function paintStar(x, y) {
		var pixelsInStar = [[x,y]],
				toBeChecked = [],
				firstRowEnd = paintRight(x, y);
		/* Once a given stretch of white pixels has been defined, the overlapping
		set of pixels above and below must be checked for contiguous white pixels. A
		range to-be-checked is defined by four elements: its Y-VALUE, the x-value of
		its LEFTMOST pixel, the x-value of its RIGHTMOST pixel, and whether its
		parent range was ABOVE it or BELOW it (so that it knows, when adding its own
		children to the list, which of those children might overlap with the parent
		range that has already been checked).In the case of the very first row, only
		the range below need be added to the list, since by definition there
		couldn't have been any pixels above, or they would've been captured on a
		previous loop iteration. */
		toBeChecked.push([y + 1, x, firstRowEnd, -1]);
		/* Thus, when we pull this element off the toBeChecked array, it'll tell us
		"Okay, on row y + 1, start at x, and make sure you check all the pixels from
		x to firstRowEnd. Then, once you've found all the white pixels that could be
		reached from that starting range, and you're adding new ranges toBeChecked
		above and below, make sure to EXCLUDE any pixels on the row above (the row
		whose y-value is one less, or -1; remember that we're counting down from the
		top left pixel, so the y-value of a higher row will be lesser) between x and
		firstRowEnd, because that's where THIS search came from, and there's no need
		to double-check." */
		while (toBeChecked.length > 0) {
			checkRange(toBeChecked.pop());
		};
		/* Once a given star has been 'painted,' with all of its 1 values turned to
		2 and all of its pixels collected into the pixelsInStar array, the
		coordinates of its mask must be calculated.  We're looking for an x-value
		and a y-value that are near the intuitive center of the contiguous white
		pixels, and for a radius that will cover most-if-not-all of those pixels,
		erring on the side of too large rather than too small. */
		var myCoords = calcCoords(pixelsInStar);
		/* Binary sort to push the coordinates to the appropriate tier in coords */
		if (myCoords[2] < 3) {
			if (myCoords[2] < 2) {
				coords[3].push(myCoords);
			} else {
				coords[2].push(myCoords);
			}
		} else {
			if (myCoords[2] < 5) {
				coords[1].push(myCoords);
			} else {
				coords[0].push(myCoords);
			}
		};

		function calcCoords(listOfPixels) {
			var xyr = [],
					total = listOfPixels.length,
					xmin = listOfPixels[0][0],
					xmax = xmin,
					xtot = 0,
					ymin = listOfPixels[0][1],
					ymax = ymin,
					ytot = 0;
			/* Couldn't think of a way to get both averages and mins/maxes using
			.forEach() or .reduce(), so I just went with a standard for loop. */
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
			/* X-pos = rounded average of all of the x-values in the list */
			xyr.push(Math.round(xtot/total));
			/* Y-pos = rounded average of all of the y-values in the list */
			xyr.push(Math.round(ytot/total));
			/* Stars that are too small to be significantly irregular have their radii
			directly assigned; stars large enough to require some additional safety
			margin have their radii calculated as radius = average between half the
			width of a bounding box, half the height of a bounding box, and (double-
			weighted) the radius of a circle containing 'total' pixels, rounded up. */
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
			/* Returns the x-value of the white pixel furthest from startx. */
			return nextPixel - 1;
		};

		function paintLeft(startx, starty) {
			var prevPixel = startx - 1;
			while (array[starty][prevPixel] === 1) {
				pixelsInStar.push([prevPixel, starty]);
				array[starty][prevPixel] = 2;
				prevPixel--;
			}
			/* Returns the x-value of the white pixel furthest from startx. */
			return prevPixel + 1;
		};

		function checkRange(input) {
			var leftBound = input[1];
			var rightBound = input[1];
			var notFinished;
			/* If the leftmost pixel in the given range is white ... */
			if (array[input[0]][leftBound] === 1) {
				/* ... add it to the list, set it to 2, and expand left and right. */
				pixelsInStar.push([leftBound, input[0]]);
				array[input[0]][leftBound] = 2;
				leftBound = paintLeft(leftBound, input[0]);
				rightBound = paintRight(rightBound, input[0]);
				/* ... we now have a complete range of contiguous white pixels, which
				means that it's time to put the two corresponding ranges above and below
				(minus any overlap, which we don't want to double-check) onto the
				toBeChecked list, using a function defined below. */
				addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
			}
			/* At this point, we MAY have successfully found a range of white pixels
			and logged them (setting up new toBeChecked ranges in the process), or we
			may have done NOTHING (if the leftmost pixel wasn't white).  Either way,
			we can't assume that we've actually made it to the end of the range that
			needs to be checked. For example, if the input were [10, 2, 20, -1] and we
			found a stretch of white pixels running from 2 to 10 and then hit a black
			pixel at 11, we may or may not be missing more white pixels between 12 and
			20.  Therefore, if rightBound remains shy of the end of the range ... */
			if (rightBound < input[2]) {
				/* ... set the condition that will drive the loop, and push leftBound so
				that we can start looking again. */
				notFinished = true;
				leftBound = rightBound + 1;
			}
			while (notFinished) {
				/* This time, we need only worry about proceeding to the right, since
				one way or another, we've eliminated the possibility of relevant pixels
				to the left. If the leftBound pixel is white, let the paint function
				take over. */
				if (array[input[0]][leftBound] === 1) {
					pixelsInStar.push([leftBound, input[0]]);
					array[input[0]][leftBound] = 2;
					rightBound = paintRight(leftBound, input[0]);
					/* Once we've reached the end of a group of contiguous white pixels,
					we add that group's child ranges to the list for later checking. Since
					we've now updated both leftBound and rightBound, there's no need to be
					concerned about infinite loops where we end up pushing the same ranges
					over and over again. */
					addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
					/* Now we can look again to see whether our rightBound has reached the
					end of the range we need to check. If so, we set the condition to
					terminate the loop; if not, we reassign leftBound once again and
					repeat the process. */
					if (rightBound >= input[2]) {
						notFinished = false;
					} else {
						leftBound = rightBound + 1;
					}
				} else {
					/* if the leftBound pixel ISN'T white, we just keep incrementing it
					until we either find one that is, or we reach the end of the range we
					need to check, at which point we set the condition to terminate the
					loop. */
					leftBound++;
					if (leftBound > input[2]) {
						notFinished = false;
					}
				}
			};

			function addRanges(currenty, childLeft, childRight, parentL, parentR, vector) {
				/* When we add child ranges to the toBeChecked list, one of them will
				always be collision-free and the other will always need to be checked.
				This is because the parent range is always either just above or just
				below the current range; if above, the child range that is also above
				needs to be checked for conflicts, while the child range that is below
				can simply be added to the list with no further checks (and vice-versa).
				There will always be two events, then: a direct push to toBeChecked, and
				a call to a compare function defined below.  The 'vector' argument lets
				us automate this, instead of having to decide which child is which. */
				toBeChecked.push([currenty - vector, childLeft, childRight, vector]);
				compareRange(childLeft, childRight, parentL, parentR, -vector);
				/* Consider: if vector === -1, then the parent row was ABOVE the current
				one, and there's no possible conflict between the parent and the new
				child being added below, so it goes straight onto the list, as we can
				see if we replace the 'vector' argument with its actual value:
							toBeChecked.push([currenty + 1, childLeft, childRight, -1])
				... note that we've also correctly registered that THIS range is below
				ITS parent (the current range); the -1 was carried over.  If, on the
				other hand, vector started out equal to positive 1 (indicating that the
				parent row was BELOW the current one), then we know that there's no
				possible conflict between the parent and the new child going above.
				Again, we replace 'vector' with its value to make the difference clear:
							toBeChecked.push([currenty - 1, childLeft, childRight, 1])
				... and again, the child has inherited the appropriate vector term.  A
				correspondingly profitable flip-flop occurs in the compare function,
				once again condensing what would have been an if-else with repetition
				into a single pair of statements. */

				function compareRange(startNew, endNew, startOld, endOld, newVec) {
				/* There are six distinct possibilities for the comparison between a
				parent range-to-be-skipped and a child range-to-be-added-to-checklist.
				These possibilities may be thought of in terms of the relationships
				between the start and end points of both the parent and child ranges,
				and each requires the return of a different subset of the child range.
					startOld < endOld < startNew < endNew:
						No overlap, return full range
						(startNew through endNew)
					startOld <= startNew <= endOld < endNew:
						Overlap on left, return right side
						(endOld + 1 through endNew)
					startOld <= startNew < endNew <= endOld:
						Parent range contains child range, return nothing
					startNew < startOld < endOld < endNew:
						Child range contains parent, return two separate subsets
						(startNew through startOld - 1)
						(endOld + 1 through endNew)
					startNew < startOld <= endNew < endOld:
						Overlap on right, return left side
						(startNew through startOld - 1)
					startNew < endNew < startOld < endOld:
						No overlap, return full range
						(startNew through endNew)
				The two extremes (no overlap) may be logically combined into one
				expression, and the left-side-available and right-side-available
				expressions together cover both halves of the child-range-contains-
				parent expression, making it redundant.  Thus we have need for four
				distinct 'if' statements, each with its own result (illustrated below
				before being described in code). In the illustrations, [****] indicates
				the new child range under comparison and [--> <--] indicates the old
				parent range to be skipped.
						 Case 1: ranges do not overlap; add whole child range to list
					 					[************]
						<---]  		 		or 		 		 [--->																		*/
					if (endOld < startNew || endNew < startOld) {
						toBeChecked.push([currenty - newVec, startNew, endNew, newVec]);
						return;
					}
					/* Case 2: child fully contained within parent; add nothing
										[************]
						 [--->  [---> or <---]  <---]																			*/
					if (startOld <= startNew && endNew <= endOld) {
						return;
					}
					/* Case 3: non-overlap on left side of child
										[************]
														[--->																							*/
					if (startNew < startOld) {
						toBeChecked.push([currenty - newVec, startNew, startOld - 1, newVec]);
						/* Don't return yet, in case of non-overlap on the right side */
					}
					/* Case 4: non-overlap on right side of child; add that side to list
										[************]
										 <---]																										*/
					if (endOld < endNew) {
						toBeChecked.push([currenty - newVec, endOld + 1, endNew, newVec]);
					};
				};
			};
		};
	};
};