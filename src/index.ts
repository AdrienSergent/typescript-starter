const message: string = "Hello, World!";
console.log(message);

// ## 🧩 Exercice 1 – Typage à compléter


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
}

type Borrower = {
    id: number;
    fullName: string;
    active: boolean;
    borrowedBooks: Book[];
    lastBorrowed: Date;
};

// ✅ Paramètre : book (objet représentant un livre)
// ✅ Retour : string
function getBookTitle(book: { title: string }): string {
    return book.title;
  }

  // ✅ Paramètre : book
// ✅ Retour : number
function getPageCount(book: { pages: number }): number {
    return book.pages;
  }

  // ✅ Paramètre : book
// ✅ Retour : boolean
function isAvailable(book: { isAvailable: boolean}): boolean{
    return book.isAvailable;
  }

  // ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean
function isAuthorAlive(author: { name: string, birthYear: number}): boolean{
    const currentYear = new Date().getFullYear();
    return currentYear - author.birthYear < 100;
  }

  // ✅ Paramètre : book
// ✅ Retour : string[]
function listTags(book: { tags: string[]}): string[]{
    return book.tags;
  }

  // ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower: { fullName: string}): string{
    return borrower.fullName;
  }

  // ✅ Paramètre : borrower
// ✅ Retour : boolean

function hasBorrowedBooks(borrower: { borrowedBooks: Book[]}): boolean{
    return borrower.borrowedBooks.length > 0;
  }

  // ✅ Paramètre : borrower
// ✅ Retour : Date

function getLastBorrowedDate(borrower: { lastBorrowed: Date}): Date{
    return borrower.lastBorrowed;
  }

  // ✅ Paramètre : borrower
// ✅ Retour : objet contenant id et nombre de livres
// ✅ Exemple attendu : { id: 123, totalBooks: 1 }
type CustomBooks = {
    id: number;
    totalBooks: number;
}
function getBorrowerSummary(borrower: { id: number, borrowedBooks: Book[]}): CustomBooks{
    return {
      id: borrower.id,
      totalBooks: borrower.borrowedBooks.length
    };
  }

  // ✅ Paramètre : borrower
// ✅ Retour : tableau des titres de ses livres (string[])
function getBorrowedTitles(borrower: { id: number, borrowedBooks: Book[]}): string[]{
    return borrower.borrowedBooks.map(book => book.title);
  }

//   # 🧩 Exercice 2 – Crée les types/interfaces

type User = {
    id: number;
    username: string;
    role: "admin" | "user"
    profile?: {
        bio: string;
        website: URL;
    };
};


// ✅ Fonction : accepte un User, ne retourne rien
function printUserRole(user: User): void{
    console.log(`${user.username} a le rôle ${user.role}`);
  }
  
  // ✅ Fonction : retourne true si l'utilisateur a un profil
function hasProfile(user: User): boolean{
    return "profile" in user;
  }