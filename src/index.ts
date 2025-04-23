# ✍️ Exercice TypeScript – Typage & Interfaces

## 🧩 Exercice 1 – Typage à compléter

> 🎯 Objectif : Complète les types manquants pour que **tout compile sans erreur**.  
> tu dois juste **ajouter les types corrects** aux fonctions et aux objets.


// 📘 Exemple de livre à typer
const book = {
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

<<<<<<< HEAD
type Book = {
    title: string;
    author: Author;
    isAvailable: boolean;
    tags: string[];
    rating: number;
    pages: number;
};

type Author = {
    name: string;
    birthYear: number;
};  

=======
>>>>>>> cb1f771 (First commit)
// 👤 Exemple d'utilisateur à typer
const borrower = {
  id: 123,
  fullName: "Alice Dupont",
  active: true,
  borrowedBooks: [book],
  lastBorrowed: new Date("2024-03-10")
};

<<<<<<< HEAD
type Borrower = {
    id: number;
    fullName: string;
    active: boolean;
    borrowedBooks: Book[];
    lastBorrowed: Date;
};

=======
>>>>>>> cb1f771 (First commit)
// 🧠 À toi de compléter les types ci-dessous :

// ✅ Paramètre : book (objet représentant un livre)
// ✅ Retour : string
function getBookTitle(book: Book): string {
<<<<<<< HEAD
  return book.title;
=======
    return book.title;
>>>>>>> cb1f771 (First commit)
}

// ✅ Paramètre : book
// ✅ Retour : number
<<<<<<< HEAD
function getPageCount(book: Book): number {
=======
function getPageCount(book) {
>>>>>>> cb1f771 (First commit)
  return book.pages;
}

// ✅ Paramètre : book
// ✅ Retour : boolean
<<<<<<< HEAD
function isAvailable(book: Book): boolean {
=======
function isAvailable(book) {
>>>>>>> cb1f771 (First commit)
  return book.isAvailable;
}

// ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean
<<<<<<< HEAD
function isAuthorAlive(author: Author): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - author.birthYear < 100;
=======
function isAuthorAlive(author) {
  const currentYear = new Date().getFullYear();
  return currentYear - author.birthYear < 100;
>>>>>>> cb1f771 (First commit)
}

// ✅ Paramètre : book
// ✅ Retour : string[]
<<<<<<< HEAD
function listTags(book: Book): string[] {
    return book.tags;
}
 
// ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower: Borrower): string {
    return borrower.fullName;
=======
function listTags(book) {
  return book.tags;
}

// ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower) {
  return borrower.fullName;
>>>>>>> cb1f771 (First commit)
}

// ✅ Paramètre : borrower
// ✅ Retour : boolean
<<<<<<< HEAD
function hasBorrowedBooks(borrower: Borrower) {
=======
function hasBorrowedBooks(borrower) {
>>>>>>> cb1f771 (First commit)
  return borrower.borrowedBooks.length > 0;
}

// ✅ Paramètre : borrower
// ✅ Retour : Date
function getLastBorrowedDate(borrower) {
  return borrower.lastBorrowed;
}

// ✅ Paramètre : borrower
// ✅ Retour : objet contenant id et nombre de livres
// ✅ Exemple attendu : { id: 123, totalBooks: 1 }
function getBorrowerSummary(borrower) {
  return {
    id: borrower.id,
    totalBooks: borrower.borrowedBooks.length
  };
}

// ✅ Paramètre : borrower
// ✅ Retour : tableau des titres de ses livres (string[])
function getBorrowedTitles(borrower) {
  return borrower.borrowedBooks.map(book => book.title);
}
```

# 🧩 Exercice 2 – Crée les types/interfaces

```ts
// 👉 Résultat attendu : le code compile si tu crées bien les types 

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
function printUserRole(user: User) {
  console.log(`${user.username} a le rôle ${user.role}`);
}

// ✅ Fonction : retourne true si l'utilisateur a un profil
function hasProfile(user: User) {
  return "profile" in user;
}
```

🎯 Consignes générales
Ton objectif est de faire en sorte que TypeScript accepte tout le code sans erreur.
Les erreurs doivent disparaître uniquement grâce à tes définitions de types et interfaces. 
