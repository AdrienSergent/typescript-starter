// Exercise 1 – Typage à compléter

interface Author {
  name: string;
  birthYear: number;
}

interface Book {
  title: string;
  author: Author;
  isAvailable: boolean;
  tags: string[];
  rating: number;
  pages: number;
}

interface Borrower {
  id: number;
  fullName: string;
  active: boolean;
  borrowedBooks: Book[];
  lastBorrowed: Date;
}

const book: Book = {
  title: "Clean Code",
  author: {
    name: "Robert C. Martin",
    birthYear: 1952
  },
  isAvailable: true,
  tags: ["clean-code", "software", "best-practice"],
  rating: 4.7,
  pages: 464
};

const borrower: Borrower = {
  id: 123,
  fullName: "Alice Dupont",
  active: true,
  borrowedBooks: [book],
  lastBorrowed: new Date("2024-03-10")
};

function getBookTitle(book: Book): string {
  return book.title;
}

function getPageCount(book: Book): number {
  return book.pages;
}

function isAvailable(book: Book): boolean {
  return book.isAvailable;
}

function isAuthorAlive(author: Author): boolean {
  const currentYear = new Date().getFullYear();
  return currentYear - author.birthYear < 100;
}

function listTags(book: Book): string[] {
  return book.tags;
}

function getBorrowerName(borrower: Borrower): string {
  return borrower.fullName;
}

function hasBorrowedBooks(borrower: Borrower): boolean {
  return borrower.borrowedBooks.length > 0;
}

function getLastBorrowedDate(borrower: Borrower): Date {
  return borrower.lastBorrowed;
}

interface BorrowerSummary {
  id: number;
  totalBooks: number;
}

function getBorrowerSummary(borrower: Borrower): BorrowerSummary {
  return {
    id: borrower.id,
    totalBooks: borrower.borrowedBooks.length
  };
}

function getBorrowedTitles(borrower: Borrower): string[] {
  return borrower.borrowedBooks.map(book => book.title);
}

interface Profile {
  bio: string;
  website: string;
}

interface User {
  id: number;
  username: string;
  role: string;
  profile?: Profile;
}

const user1: User = {
  id: 1,
  username: "devadrien",
  role: "admin",
  profile: {
    bio: "Développeur fullstack",
    website: "https://adrien.dev"
  }
};

const user2: User = {
  id: 2,
  username: "bobthetester",
  role: "user"
};


function printUserRole(user: User): void {
  console.log(`${user.username} a le rôle ${user.role}`);
}

function hasProfile(user: User): boolean {
  return "profile" in user;
}

console.log(getBookTitle(book));
console.log(getPageCount(book));
console.log(isAvailable(book));
console.log(isAuthorAlive(book.author));
console.log(listTags(book));
console.log(getBorrowerName(borrower));
console.log(hasBorrowedBooks(borrower));
console.log(getLastBorrowedDate(borrower));
console.log(getBorrowerSummary(borrower));
console.log(getBorrowedTitles(borrower));

printUserRole(user1);
printUserRole(user2);
console.log(hasProfile(user1));
console.log(hasProfile(user2));
