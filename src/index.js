var book = {
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
// 👤 Exemple d'utilisateur à typer
var borrower = {
    id: 123,
    fullName: "Alice Dupont",
    active: true,
    borrowedBooks: [book],
    lastBorrowed: new Date("2024-03-10")
};
// 🧠 À toi de compléter les types ci-dessous :
function getBookTitle(book) {
    return book.title;
}
console.log("getBookTitle:", getBookTitle(book));
// ✅ Paramètre : book
// ✅ Retour : number
function getPageCount(book) {
    return book.pages;
}
console.log("getPageCount:", getPageCount(book));
// ✅ Paramètre : book
// ✅ Retour : boolean
function isAvailable(book) {
    return book.isAvailable;
}
console.log("isAvailable:", isAvailable(book));
// ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean
function isAuthorAlive(author) {
    var currentYear = new Date().getFullYear();
    return currentYear - author.birthYear < 100;
}
console.log("isAuthorAlive:", isAuthorAlive(book.author));
// ✅ Paramètre : book
// ✅ Retour : string[]
function listTags(book) {
    return book.tags;
}
console.log("listTags:", listTags(book));
// ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower) {
    return borrower.fullName ? borrower.fullName : "";
}
console.log("getBorrowerName:", getBorrowerName(borrower));
// ✅ Paramètre : borrower
// ✅ Retour : boolean
function hasBorrowedBooks(borrower) {
    return borrower.borrowedBooks ? borrower.borrowedBooks.length > 0 : false;
}
console.log("hasBorrowedBooks:", hasBorrowedBooks(borrower));
// ✅ Paramètre : borrower
// ✅ Retour : Date
function getLastBorrowedDate(borrower) {
    return borrower.lastBorrowed ? borrower.lastBorrowed : undefined;
}
console.log("getLastBorrowedDate:", getLastBorrowedDate(borrower));
// ✅ Paramètre : borrower
// ✅ Retour : objet contenant id et nombre de livres
// ✅ Exemple attendu : { id: 123, totalBooks: 1 }
function getBorrowerSummary(borrower) {
    return {
        id: borrower.id,
        totalBooks: borrower.borrowedBooks ? borrower.borrowedBooks.length : 0
    };
}
console.log("getBorrowerSummary:", getBorrowerSummary(borrower));
// ✅ Paramètre : borrower
// ✅ Retour : tableau des titres de ses livres (string[])
function getBorrowedTitles(borrower) {
    return borrower.borrowedBooks ? borrower.borrowedBooks.map(function (book) { return book.title; }) : [];
}
console.log("getBorrowedTitles:", getBorrowedTitles(borrower));
// 👉 Résultat attendu : le code compile si tu crées bien les types
var user1 = {
    id: 1,
    username: "devadrien",
    role: "admin",
    profile: {
        bio: "Développeur fullstack",
        website: "https://adrien.dev"
    }
};
var user2 = {
    id: 2,
    username: "bobthetester",
    role: "user"
};
// ✅ Fonction : accepte un User, ne retourne rien
function printUserRole(user) {
    console.log("printUserRole:", "".concat(user.username, " a le r\u00F4le ").concat(user.role));
}
printUserRole(user1);
printUserRole(user2);
// ✅ Fonction : retourne true si l'utilisateur a un profil
function hasProfile(user) {
    return "profile" in user;
}
console.log("hasProfile:", hasProfile(user1));
console.log("hasProfile:", hasProfile(user2));
