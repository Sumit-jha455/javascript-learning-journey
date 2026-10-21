// 🚀 Mini Project 2: ATM Withdrawal Simulator

let accountBalance = 10000;
const withdrawalAmount = Number(prompt("Enter withdrawal amount:"));

if (withdrawalAmount <= 0 || Number.isNaN(withdrawalAmount)) {
	console.log("Error: Withdrawal amount must be greater than 0.");
} else if (withdrawalAmount > accountBalance) {
	console.log("Error: Insufficient balance.");
} else {
	accountBalance -= withdrawalAmount;
	console.log(`Withdrawal successful. Remaining balance: ₹${accountBalance}`);
}
