//# ✍️ Exercice TypeScript – Typage & Interfaces

//## 🧩 Exercice 1 – Typage à compléter

// > 🎯 Objectif: Complète les types manquants pour que ** tout compile sans erreur **.  
//> tu dois juste ** ajouter les types corrects ** aux fonctions et aux objets.

//ts
// 📘 Exemple de livre à typer

type Author = {
    name: string;
    birthYear: number;
}

type Book = {
    title: string;
    author: Author;
    isAvailable: boolean;
    tags: string[];
    rating: number;
    pages: number;
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

// 👤 Exemple d'utilisateur à typer

interface Borrower {
    id: number;
    fullName: string;
    active: boolean;
    borrowedBooks: Book[];
    lastBorrowed: Date
}

const borrower: Borrower = {
    id: 123,
    fullName: "Alice Dupont",
    active: true,
    borrowedBooks: [book],
    lastBorrowed: new Date("2024-03-10")
};

// 🧠 À toi de compléter les types ci-dessous :

// ✅ Paramètre : book (objet représentant un livre)
// ✅ Retour : string
function getBookTitle(book: Book): string {
    return book.title;
}

// ✅ Paramètre : book
// ✅ Retour : number
function getPageCount(book: Book): number {
    return book.pages;
}

// ✅ Paramètre : book
// ✅ Retour : boolean
function isAvailable(book: Book): boolean {
    return book.isAvailable;
}

// ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean
function isAuthorAlive(author: Author): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - author.birthYear < 100;
}

// ✅ Paramètre : book
// ✅ Retour : string[]
function listTags(book: Book): string[] {
    return book.tags;
}

// ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower: Borrower): string {
    return borrower.fullName;
}

// ✅ Paramètre : borrower
// ✅ Retour : boolean
function hasBorrowedBooks(borrower: Borrower): boolean {
    return borrower.borrowedBooks.length > 0;
}

// ✅ Paramètre : borrower
// ✅ Retour : Date
function getLastBorrowedDate(borrower: Borrower): Date {
    return borrower.lastBorrowed;
}

// ✅ Paramètre : borrower
// ✅ Retour : objet contenant id et nombre de livres
function getBorrowerSummary(borrower: { id: number; borrowedBooks: any[] }): { id: number; totalBooks: number } {
    return {
        id: borrower.id,
        totalBooks: borrower.borrowedBooks.length
    };
}

// ✅ Paramètre : borrower
// ✅ Retour : tableau des titres de ses livres (string[])
function getBorrowedTitles(borrower: { borrowedBooks: { title: string }[] }): string[] {
    return borrower.borrowedBooks.map(book => book.title);
}



//🎯 Consignes générales
//Ton objectif est de faire en sorte que TypeScript accepte tout le code sans erreur.
//Les erreurs doivent disparaître uniquement grâce à tes définitions de types et interfaces. 


//# 🧩 Exercice 2 – Crée les types/interfaces

//ts
//👉 Résultat attendu : le code compile si tu crées bien les types s
type Role = "admin" | "user";

interface Profile {
    bio: string;
    website: string;
}

interface User {
    id: number;
    username: string;
    role: Role;
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

// ✅ Fonction : accepte un User, ne retourne rien
function printUserRole(user: User): void {
    console.log(`${user.username} a le rôle ${user.role} `);
}

// ✅ Fonction : retourne true si l'utilisateur a un profil
function hasProfile(user: User): boolean {
    return "profile" in user;
}


//🎯 Consignes générales
//Ton objectif est de faire en sorte que TypeScript accepte tout le code sans erreur.
//  Les erreurs doivent disparaître uniquement grâce à tes définitions de types et interfaces. 