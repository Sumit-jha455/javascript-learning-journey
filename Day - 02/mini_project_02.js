// Currency Converter (Basic)
const amountInINR = 1000;

// Fixed conversion rates: 1 INR equals...
const rates = {
	USD: 0.012,
	EUR: 0.011,
	GBP: 0.0095,
};

console.log(`Amount in INR: ₹${amountInINR}`);
console.log(`USD: $${(amountInINR * rates.USD).toFixed(2)}`);
console.log(`EUR: €${(amountInINR * rates.EUR).toFixed(2)}`);
console.log(`GBP: £${(amountInINR * rates.GBP).toFixed(2)}`);
