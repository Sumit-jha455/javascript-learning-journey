// ⭐ Extra Coding Challenges

// Find the second largest number.
function secondLargest(numbers) {
	const uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);
	return uniqueNumbers.length > 1 ? uniqueNumbers[1] : undefined;
}

// Find duplicate elements.
function findDuplicates(numbers) {
	const counts = new Map();
	const duplicates = [];

	numbers.forEach((number) => counts.set(number, (counts.get(number) || 0) + 1));
	counts.forEach((count, number) => {
		if (count > 1) duplicates.push(number);
	});

	return duplicates;
}

// Remove duplicate elements.
function removeDuplicates(items) {
	return [...new Set(items)];
}

// Rotate array by one position to the right.
function rotateByOne(numbers) {
	if (numbers.length < 2) return [...numbers];
	return [numbers[numbers.length - 1], ...numbers.slice(0, -1)];
}

// Reverse array without using reverse().
function reverseArray(items) {
	const reversed = [];
	for (let index = items.length - 1; index >= 0; index -= 1) {
		reversed.push(items[index]);
	}
	return reversed;
}

// Count frequency of each element.
function countFrequency(items) {
	return items.reduce((frequency, item) => {
		frequency[item] = (frequency[item] || 0) + 1;
		return frequency;
	}, {});
}

// Find the missing number from an array containing numbers from 1 to n.
function findMissingNumber(numbers, n = numbers.length + 1) {
	const expectedSum = (n * (n + 1)) / 2;
	const actualSum = numbers.reduce((sum, number) => sum + number, 0);
	return expectedSum - actualSum;
}

// Merge two sorted arrays.
function mergeSortedArrays(first, second) {
	const merged = [];
	let left = 0;
	let right = 0;

	while (left < first.length && right < second.length) {
		if (first[left] <= second[right]) merged.push(first[left++]);
		else merged.push(second[right++]);
	}

	return merged.concat(first.slice(left), second.slice(right));
}

// Find common elements.
function findCommonElements(first, second) {
	const secondSet = new Set(second);
	return [...new Set(first)].filter((item) => secondSet.has(item));
}

// Separate even and odd numbers.
function separateEvenAndOdd(numbers) {
	return {
		even: numbers.filter((number) => number % 2 === 0),
		odd: numbers.filter((number) => number % 2 !== 0),
	};
}
