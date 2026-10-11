// 🏆 Bonus Challenge: Simple Bill Calculator

const itemPrices = [100, 250, 75, 500, 125];
const total = itemPrices.reduce((sum, price) => sum + price, 0);
const gst = total * 0.18;
const finalAmount = total + gst;

console.log("========== BILL ==========");
itemPrices.forEach((price, index) => {
	console.log(`Item ${index + 1}: ₹${price.toFixed(2)}`);
});
console.log("--------------------------");
console.log(`Total:        ₹${total.toFixed(2)}`);
console.log(`GST (18%):    ₹${gst.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);
console.log("==========================");
