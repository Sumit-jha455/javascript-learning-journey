// 🚀 Mini Project 1: Student Management System

const students = [];

function addStudent(name, rollNumber, course, marks) {
	if (students.some((student) => student.rollNumber === rollNumber)) {
		return false;
	}

	students.push({ name, rollNumber, course, marks });
	return true;
}

function deleteStudent(rollNumber) {
	const studentIndex = students.findIndex(
		(student) => student.rollNumber === rollNumber,
	);

	if (studentIndex === -1) {
		return false;
	}

	students.splice(studentIndex, 1);
	return true;
}

function updateStudent(rollNumber, updates) {
	const student = students.find(
		(student) => student.rollNumber === rollNumber,
	);

	if (!student) {
		return false;
	}

	Object.assign(student, updates, { rollNumber });
	return true;
}

function searchStudent(searchTerm) {
	const term = String(searchTerm).toLowerCase();

	return students.filter(
		(student) =>
			String(student.name).toLowerCase().includes(term) ||
			String(student.rollNumber).toLowerCase().includes(term) ||
			String(student.course).toLowerCase().includes(term),
	);
}

function displayAllStudents() {
	return [...students];
}
