$(document).ready(function() {
var test1 = [[0,0,0,0,0,0,0,0],
						 [0,0,1,1,1,1,0,0],
						 [0,1,1,1,1,1,1,0],
						 [0,1,1,1,1,1,1,0],
						 [0,1,1,1,1,1,1,0],
						 [0,1,1,1,1,1,1,0],
						 [0,0,1,1,1,1,0,0],
						 [0,0,0,0,0,0,0,0]];

var test2 = [[0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,1,1,0,0,0,1,1,0,0],
						 [0,1,1,1,1,1,1,1,1,1,0],
						 [0,1,1,1,1,1,1,1,1,1,0],
						 [0,1,1,1,1,1,1,1,1,1,0],
						 [0,0,1,1,1,0,1,1,1,0,0],
						 [0,0,0,1,1,0,1,1,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0]];

var test3 = [[0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,1,1,1,0],
						 [0,0,0,0,0,1,0,0,1,1,0,0,0],
						 [0,0,0,0,1,1,1,0,0,1,1,0,0],
						 [0,0,1,0,0,1,0,0,0,1,0,0,0],
						 [0,1,1,0,0,1,0,1,1,1,0,0,0],
						 [0,1,1,1,1,1,1,1,1,1,0,0,0],
						 [0,1,1,1,1,1,1,0,1,1,0,0,0],
						 [0,0,0,0,0,1,1,0,1,0,0,0,0],
						 [0,0,0,0,0,0,1,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0]];

var test4 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0],
						 [0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0],
						 [0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0],
						 [0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0],
						 [0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0],
						 [0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0],
						 [0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0],
						 [0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0],
						 [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var test5 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],
						 [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
						 [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
						 [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
						 [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
						 [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
						 [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
						 [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
						 [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

$.get('test6.txt', function(data) {
	var test6 = data;
});

function findStars(array) {
	var coords = [];
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
	return coords;

	function paintStar(x, y) {
		var pixelsInStar = [[x,y]];
		var toBeChecked = [];
		var firstRowEnd = paintRight(x, y);
		/* Once a given stretch of white pixels has been defined, the overlapping set
		of pixels above and below must be checked for contiguous white pixels. A range
		to-be-checked is defined by four elements: its Y-VALUE, the x-value of its
		LEFTMOST pixel, the x-value of its RIGHTMOST pixel, and whether its parent
		range was ABOVE it or BELOW it (so that it knows, when adding its own children
		to the list, which of those children might overlap with the parent range
		that has already been checked).In the case of the very first row, only the
		range below need be added to the list, since by definition there couldn't have
		been any pixels above, or they would've been captured on a previous loop
		iteration. */
		toBeChecked.push([y + 1, x, firstRowEnd, -1]);
		/* Thus, when we pull this element off the toBeChecked array, it'll tell us
		"Okay, on row y + 1, start at x, and make sure you check all the pixels from x
		to firstRowEnd. Then, once you've found all the white pixels that could be
		reached from that starting range, and you're adding new ranges toBeChecked
		above and below, make sure to EXCLUDE any pixels on the row above (the row
		whose y-value is one less, or -1; remember that we're counting down from the
		top left pixel, so the y-value of a higher row will be lesser) between x and
		firstRowEnd, because that's where THIS search came from, and there's no need
		to double-check." */
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
			var leftBound, rightBound;
			/* I'm trying to minimize overhead, and so rather than dedicating space to a
			new set of variables every time we run this function, here's a translation
			table for humans trying to make sense of the lines below:
						y: input[0]
						startx: input[1]
						endx: input[2]
						parent y: was ABOVE if input[3] is -1; BELOW if input[3] is 1
			If the leftmost pixel in the range, array[y][startx], is white ... */
			if (array[input[0]][input[1]] === 1) {
				/* ... set it to 2 and head left as far as you can go ... */
				array[input[0]][input[1]] = 2;
				leftBound = paintLeft(input[1], input[0]);
				/* ... then return to the start and push right ... */
				rightBound = paintRight(input[1], input[0]);
				/* ... we now have a complete range of contiguous white pixels, which means
				that it's time to put the two corresponding ranges above and below (minus
				any overlap, which we don't want to double-check) onto the toBeChecked list,
				using a function defined below. */
				addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
				/* Now we've successfully found a range of white pixels and logged all of
				them, setting up new toBeChecked ranges in the process.  But we may not have
				actually made it to the end of the range that needs to be checked. For
				example, if the input were [10, 2, 20, -1] and we found a stretch of white
				pixels running from 2 to 10 and then hit a black pixel at 11, we're not done
				checking yet. */
				if (rightBound < input[2]) {
					/* Since we need to pick up where we left off and go further right, and
					since we'll eventually need to set leftBound equal to the x-value of the
					first white pixel we find, we'll just go ahead and use the leftBound
					variable to control our loop.  It will end when either a) it finds a white
					pixel, or b) leftBound passes endx/input[2] without having ever uncovered
					a white pixel, meaning that the rest of the range was black and we're
					already done. */
					leftBound = rightBound;
					while(array[input[0]][leftBound] !== 1 && leftBound <= input[2]) {
						leftBound++;
					}
					if (leftBound > input[2]) {
						return;
					}
					/* If we make it to here without hitting a return, it means that leftBound
					did, indeed, find itself equal to the x-value of a white pixel.  Thus, we
					don't need any conditional; we can just launch into the next step of the
					algorithm, which is to paint right.  By now, we've reassigned both
					leftBound and rightBound, so there are no concerns of getting ourselves
					stuck in an infinite loop by repeating the same instructions. */
					rightBound = paintRight(leftBound, input[0]);
					addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
				}
			}
			/* If the leftmost pixel in the range, array[y][startx], is nonwhite ... */
			else {
				/* Applying similar logic as above, we'll just go ahead and use leftBound
				for our while loop, since it's just sitting there waiting to be called on. */
				leftBound = input[1];
				while(array[input[0]][leftBound] !==1 && leftBound <= input[2]) {
					leftBound++;
				}
				if (leftBound > input[2]) {
					return;
				}
				/* Again, if we made it this far, it means that we never hit the return,
				because leftBound did, indeed, find itself equal to the x-value of a white
				pixel before hitting the end of the range. Thus we need no conditional. */
				rightBound = paintRight(leftBound, input[0]);
				addRanges(input[0], leftBound, rightBound, input[1], input[2], input[3]);
			};

			function addRanges(currenty, childLeft, childRight, parentL, parentR, vector) {
				/* When we add child ranges to the toBeChecked list, one of them will always
				be collision-free and the other will always need to be checked. This is
				because the parent range is always either just above or just below the current
				range; if above, the child range that is also above needs to be checked for
				conflicts, while the child range that is below can simply be added to the list
				with no further checks (and vice-versa). There will always be two events,
				then: a direct push to toBeChecked, and a call to a compare function defined
				below.  The 'vector' argument lets us automate this process, instead of having
				to decide which child is which. */
				toBeChecked.push([currenty - vector, childLeft, childRight, vector]);
				compareRange(childLeft, childRight, parentL, parentR, -vector);
				/* Consider: if vector === -1, then the parent row was ABOVE the current one,
				and there's no possible conflict between the parent and the new child being
				added below, so it goes straight onto the list, as we can see if we replace
				the 'vector' argument with its actual value:
						toBeChecked.push([currenty + 1, childLeft, childRight, -1])
				... note that we've also correctly registered that THIS range is below ITS
				parent (the current range); the -1 was carried over.  If, on the other hand,
				vector started out equal to positive 1 (indicating that the parent row was
				BELOW the current one), then we know that there's no possible conflict between
				the parent and the new child going above. Again, we replace 'vector' with its
				value to make the difference clear:
						toBeChecked.push([currenty - 1, childLeft, childRight, 1])
				... and again, the child has inherited the appropriate vector term.  A
				correspondingly profitable flip-flop occurs in the compare function, once
				again condensing what would have been an if-else with repetition into a single
				pair of statements. */

				/* There are six distinct possibilities for the comparison between a parent
				range-to-be-skipped and a child range-to-be-added-to-checklist. These
				possibilities may be thought of in terms of the relationships between the start
				and end points of both the parent and child ranges, and each requires that a
				different subset of the child range be returned.
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
				The two extremes (no overlap) may be logically combined into one expression, and
				the left-side-available and right-side-available expressions together cover both
				halves of the child-range-contains-parent expression, making it redundant.  Thus
				we have need for four distinct 'if' statements, each with its own result
				(illustrated below before being described in code). In the illustrations, [****]
				indicates the new child range under comparison and [--> <--] indicates the old
				parent range to be skipped. */
				function compareRange(startNew, endNew, startOld, endOld, vector) {
					/* Case 1: ranges do not overlap; add whole child range to list
					 					[************]
						<---]  		 		or 		 		 [--->																			*/
					if (endOld < startNew || endNew < startOld) {
						toBeChecked.push([currenty - vector, startNew, endNew, vector]);
						return;
					}
					/* Case 2: child fully contained within parent; add nothing
										[************]
						 [--->  [---> or <---]  <---]																				*/
					else if (startOld <= startNew && endNew <= endOld) {
						return;
					}
					/* Case 3: non-overlap on left side of child; add that side to list
										[************]
														[--->																								*/
					else if (startNew < startOld) {
						toBeChecked.push([currenty - vector, startNew, startOld - 1, vector]);
						/* Don't return yet, in case of non-overlap on the right side, too */
					}
					/* Case 4: non-overlap on right side of child; add that side to list
										[************]
										 <---]																											*/
					else if (endOld < endNew) {
						toBeChecked.push([currenty - vector, endOld + 1, endNew, vector]);
					};
				};
			};
		};
	};
};






}); // End of document ready function;