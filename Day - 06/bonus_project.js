// 🏆 Bonus Project: Library Management System

const library = [];

function addBook(title, author, price) {
	const book = {
		title,
		author,
		price,
		availability: true,
	};

	library.push(book);
	return book;
}

function removeBook(title) {
	const index = library.findIndex(
		(book) => book.title.toLowerCase() === title.toLowerCase()
	);

	if (index === -1) return false;
	library.splice(index, 1);
	return true;
}

function searchBook(query) {
	const searchTerm = query.toLowerCase();

	return library.filter(
		(book) =>
			book.title.toLowerCase().includes(searchTerm) ||
			book.author.toLowerCase().includes(searchTerm)
	);
}

function borrowBook(title) {
	const book = library.find(
		(book) => book.title.toLowerCase() === title.toLowerCase()
	);

	if (!book || !book.availability) return false;
	book.availability = false;
	return true;
}

function returnBook(title) {
	const book = library.find(
		(book) => book.title.toLowerCase() === title.toLowerCase()
	);

	if (!book || book.availability) return false;
	book.availability = true;
	return true;
}

function displayAvailableBooks() {
	return library.filter((book) => book.availability);
}

// Example usage:
// addBook("The Alchemist", "Paulo Coelho", 299);
// borrowBook("The Alchemist");
// console.log(displayAvailableBooks());
