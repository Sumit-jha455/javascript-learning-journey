// 🚀 Mini Project 2: Password Strength Checker

function checkPasswordStrength(password) {
	const checks = [
		password.length >= 8,
		/[A-Z]/.test(password),
		/[a-z]/.test(password),
		/\d/.test(password),
	];

	const score = checks.filter(Boolean).length;

	if (score === 4) {
		return "Strong";
	}

	if (score >= 2) {
		return "Medium";
	}

	return "Weak";
}

const password = prompt("Enter a password:");

if (password !== null) {
	console.log(`Password strength: ${checkPasswordStrength(password)}`);
}
