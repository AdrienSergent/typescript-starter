# ✍️ Exercice TypeScript – Typage & Interfaces

## 🧩 Exercice 1 – Typage à compléter

> 🎯 Objectif : Complète les types manquants pour que **tout compile sans erreur**.  
> Tu ne modifies **aucune ligne de code**, tu dois juste **ajouter les types corrects** aux fonctions et aux objets.

```ts
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

// 👤 Exemple d'utilisateur à typer
const borrower = {
  id: 123,
  fullName: "Alice Dupont",
  active: true,
  borrowedBooks: [book],
  lastBorrowed: new Date("2024-03-10")
};

// 🧠 À toi de compléter les types ci-dessous :

// ✅ Paramètre : book (objet représentant un livre)
// ✅ Retour : string
function getBookTitle(book) {
  return book.title;
}

// ✅ Paramètre : book
// ✅ Retour : number
function getPageCount(book) {
  return book.pages;
}

// ✅ Paramètre : book
// ✅ Retour : boolean
function isAvailable(book) {
  return book.isAvailable;
}

// ✅ Paramètre : author (objet avec name et birthYear)
// ✅ Retour : boolean
function isAuthorAlive(author) {
  const currentYear = new Date().getFullYear();
  return currentYear - author.birthYear < 100;
}

// ✅ Paramètre : book
// ✅ Retour : string[]
function listTags(book) {
  return book.tags;
}

// ✅ Paramètre : borrower
// ✅ Retour : string
function getBorrowerName(borrower) {
  return borrower.fullName;
}

// ✅ Paramètre : borrower
// ✅ Retour : boolean
function hasBorrowedBooks(borrower) {
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

# 🧩 Exercice 2 – Crée les types/interfaces
## 🎯 Objectif : Ne modifie aucune ligne de code ci-dessous.

ts
Copier
Modifier
// 👉 Résultat attendu : le code compile si tu crées bien les types User, Role, Profile

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
🎯 Consignes générales
Ton objectif est de faire en sorte que TypeScript accepte tout le code sans erreur.

Tu ne modifies aucun des objets ni des fonctions existantes.

Les erreurs doivent disparaître uniquement grâce à tes définitions de types et interfaces.
