// Pattern 1
for (let i = 1; i <= 5; i++) {
	let pattern = "";

	for (let j = 1; j <= i; j++) {
		pattern += "*";
	}

	console.log(pattern);
}

console.log("\nPattern 2");

for (let i = 5; i >= 1; i--) {
	let pattern = "";

	for (let j = 1; j <= i; j++) {
		pattern += "*";
	}

	console.log(pattern);
}

console.log("\nPattern 3");

for (let i = 1; i <= 5; i++) {
	let pattern = "";

	for (let j = 1; j <= i; j++) {
		pattern += j;
	}

	console.log(pattern);
}

console.log("\nPattern 4");

for (let i = 1; i <= 5; i++) {
	let pattern = "";

	for (let j = 1; j <= i; j++) {
		pattern += i;
	}

	console.log(pattern);
}

console.log("\nPattern 5");

for (let i = 1; i <= 5; i++) {
	let pattern = "";

	for (let j = 1; j <= 5; j++) {
		pattern += "*";
	}

	console.log(pattern);
}
