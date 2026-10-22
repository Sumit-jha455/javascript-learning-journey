const primes = [];

for (let number = 2; number <= 500; number++) {
	let isPrime = true;

	for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
		if (number % divisor === 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime) {
		primes.push(number);
	}
}

console.log("Prime numbers between 1 and 500:");
console.log(primes.join(", "));
console.log(`Total count of prime numbers: ${primes.length}`);
