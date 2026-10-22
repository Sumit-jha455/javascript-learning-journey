// 🚀 Mini Project 2: Employee Salary Management

const employees = [];

function addEmployee(name, department, salary) {
	if (!name || !department || typeof salary !== "number" || salary < 0) {
		throw new Error("Provide a name, department, and valid salary.");
	}

	const employee = { name, department, salary };
	employees.push(employee);
	return employee;
}

function increaseSalary(name, amount) {
	const employee = employees.find(
		(employee) => employee.name.toLowerCase() === name.toLowerCase()
	);

	if (!employee || typeof amount !== "number" || amount < 0) {
		return null;
	}

	employee.salary += amount;
	return employee;
}

function findHighestSalary() {
	return employees.reduce(
		(highest, employee) =>
			!highest || employee.salary > highest.salary ? employee : highest,
		null
	);
}

function findLowestSalary() {
	return employees.reduce(
		(lowest, employee) =>
			!lowest || employee.salary < lowest.salary ? employee : lowest,
		null
	);
}

function averageSalary() {
	if (employees.length === 0) return 0;

	const totalSalary = employees.reduce(
		(total, employee) => total + employee.salary,
		0
	);
	return totalSalary / employees.length;
}

function searchEmployee(searchTerm) {
	const term = String(searchTerm).toLowerCase();

	return employees.filter(
		(employee) =>
			employee.name.toLowerCase().includes(term) ||
			employee.department.toLowerCase().includes(term)
	);
}
