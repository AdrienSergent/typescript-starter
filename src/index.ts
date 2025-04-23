/** exercice 1 */
type Book = {
  title: string;
  author: {
    name: string;
    birthYear: number;
  };
  isAvailable: boolean;
  tags: string[];
  rating: number;
  pages: number;
};

const book: Book = {
  title: "Clean Code",
  author: {
    name: "Robert C. Martin",
    birthYear: 1952,
  },
  isAvailable: true,
  tags: ["clean-code", "software", "best-practice"],
  rating: 4.7,
  pages: 464,
};

console.log(book);

/** exercice 2 */
type borrower = {
  id: number;
  fullName: string;
  active: boolean;
  borrowedBooks: Book[];
  lastBorrowed: Date;
};

const borrower: borrower = {
  id: 123,
  fullName: "Alice Dupont",
  active: true,
  borrowedBooks: [book],
  lastBorrowed: new Date("2024-03-10"),
};

console;
/** exercice 3 */

function getBookTitle(book: Book): string {
  return book.title;
}

/** exercice 4*/

function getPageCount(book: Book): number {
  return book.pages;
}

/** exercice 5 */
function isAvailable(book: Book): boolean {
  return book.isAvailable;
}

/** exercice 6 */
function isAuthorAlive(book: Book): boolean {
  const currentYear = new Date().getFullYear();
  return currentYear - book.author.birthYear < 100;
}

/** exercice 7 */
function listTags(book: Book): string[] {
  return book.tags;
}

/** exercice 8 */
function getBorrowerName(borrower: borrower): string {
  return borrower.fullName;
}

/** exercice 9 */
function hasBorrowedBooks(borrower: borrower): boolean {
  return borrower.borrowedBooks.length > 0;
}

/** exercice 10 */
function getLastBorrowedDate(borrower: borrower): Date {
  return borrower.lastBorrowed;
}

/** exercice 11 */
type BorrowerSummary = {
  id: number;
  totalBooks: number;
};
function getBorrowerSummary(borrower: borrower): BorrowerSummary {
  return {
    id: borrower.id,
    totalBooks: borrower.borrowedBooks.length,
  };
}

/** exercice 12 */
function getBorrowedTitles(borrower: borrower): string[] {
  return borrower.borrowedBooks.map((book) => book.title);
}

/** ---------------------------------------------------------------------------------------------- */

/** exercice 13 */
type User = {
  id: number;
  username: string;
  role: string;
  profile?: {
    bio: string;
    website: string;
  };
};

const user1: User = {
  id: 1,
  username: "devadrien",
  role: "admin",
  profile: {
    bio: "Développeur fullstack",
    website: "https://adrien.dev",
  },
};

const user2: User = {
  id: 2,
  username: "bobthetester",
  role: "user",
};

/** exercice 14 */
function printUserRole(user: User) {
  console.log(`${user.username} a le rôle ${user.role}`);
}

/** exercice 15 */
function hasProfile(user: User) {
  return "profile" in user;
}

console.log("hasProfile(user1)", hasProfile(user1));
console.log("hasProfile(user2)", hasProfile(user2));
