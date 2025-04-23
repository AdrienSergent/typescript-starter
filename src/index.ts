const message: string = "Hello, !";
console.log(message);



// ✅ Paramètre : book (objet représentant un livre)
// ✅ Retour : string
interface Book {
    title: string;
}

function getBookTitle(book: Book): string {
    return book.title;
}

// ✅ Paramètre : book
// ✅ Retour : number
interface Book {
    pages: number;
}

function getPageCount(book: Book): number {
    return book.pages;
}
// ✅ Paramètre : book
// ✅ Retour : boolean

interface Book {
    isAvailable: boolean
}
function isAvailable(book: Book): boolean {
    return book.isAvailable;
}

// ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean

interface Author {
    birthYear: number;
}
function isAuthorAlive(author: Author): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - author.birthYear < 100;
}

// ✅ Paramètre : book
// ✅ Retour : string[]
interface Book {
    tags: string
}
function listTags(book: Book): string {
    return book.tags;
}

// ✅ Paramètre : borrower
// ✅ Retour : string

interface Borrower {
    fullName: string
}
function getBorrowerName(borrower: Borrower): string {
    return borrower.fullName;
}

// ✅ Paramètre : borrower
// ✅ Retour : boolean

interface Borrower {
    borrowedBooks: string[]
}
function hasBorrowedBooks(borrower: Borrower): boolean {
    return borrower.borrowedBooks.length > 0;
}

// ✅ Paramètre : borrower
// ✅ Retour : Date

interface Borrower {
    lastBorrowed: Date
}
function getLastBorrowedDate(borrower: Borrower): Date {
    return borrower.lastBorrowed;
}

// ✅ Paramètre : borrower
// ✅ Retour : objet contenant id et nombre de livres
// ✅ Exemple attendu : { id: 123, totalBooks: 1 }

interface Borrower {
    id: number;
    totalBooks: number;
}

function getBorrowerSummary(borrower: Borrower): { id: number; totalBooks: number } {
    return {
        id: borrower.id,
        totalBooks: borrower.totalBooks
    };
}

// ✅ Paramètre : borrower
// ✅ Retour : tableau des titres de ses livres (string[])
interface Book {
    title: string;
}

interface Borrowed {
    borrowedBooks: Book[];
}

function getBorrowedTitles(borrower: Borrowed): string[] {
    return borrower.borrowedBooks.map(book => book.title);
}

// 👉 Résultat attendu : le code compile si tu crées bien les types 
interface User {
    id: number;
    username: string;
    role: string;
    profile?: {
        bio: string;
        website: URL;
    };
}


interface User2 extends User { }

// ✅ Fonction : accepte un User, ne retourne rien

interface User {
    username: string;
    id: number;
    role : string;
    profile?: { bio:string; website:URL;}
}
function printUserRole(user: User): void {
    console.log(`${user.username} a le rôle ${user.role}`);
}

// ✅ Fonction : retourne true si l'utilisateur a un profil

function hasProfile(user: User):boolean {
    return "profile" in user;
}