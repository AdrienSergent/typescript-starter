// 👉 Résultat attendu : le code compile si tu crées bien les types
type User = {
	id: number;
	username: string;
	role: "user" | "admin";
	profile?: { bio: string; website: string };
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

// ✅ Fonction : accepte un User, ne retourne rien
function printUserRole(user: User): void {
	console.log(`${user.username} a le rôle ${user.role}`);
}

// ✅ Fonction : retourne true si l'utilisateur a un profil
function hasProfile(user: User): any {
	if ("profile" in user) {
		 return true;
    }
    
}
