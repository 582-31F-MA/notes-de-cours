////////////////////////////////////////////////////////////////////////////////
// LES BASES DE L'OBJET ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Un objet est une collection de *données* apparentées et/ou de
// *fonctionnalités* qui se composent de plusieurs variables et fonctions,
// appelées propriétés et méthodes quand elles sont dans des objets.
//
// Un objet est fait de plusieurs *membres*, chacun ayant un *nom* et une
// *valeur*. Quand la valeur est une donnée, le membre est une *propriété*.
// Quand la valeur est une fonction, le membre est une *méthode*.
//
//////////
// EXEMPLE
//
// Ici, l'objet est créé grâce à un *objet littéral* : on écrit littéralement le
// contenu de l'objet pour le créer. On distinguera plus tard cette structure
// des objets instanciés depuis des *classes*.

let personne1 = {};
// ou
// let personne1 = new Object();

personne1 = {
	// données (propriétés)
	nom: ["Jean", "Martin"],
	age: 32,
	sexe: "masculin",
	passions: ["cuisiner", "skier"],

	// fonctionnalités (méthodes)
	salutation: function () {
		// On utilise ici un gabarit de texte (ou template literal, en anglais).
		return `Bonjour! Je suis ${this.nom[0]}`;
	},
	bio: function () {
		return `${this.nom[0]} ${this.nom[1]} a ${this.age} ans. Il aime ${this.passions[0]} et ${this.passions[1]}.`;
	},
};

////////////////////////////////////////////////////////////////////////////////
// NOTATION AVEC UN POINT
//
// Jusqu'à présent, nous avons accéder aux membres de l'objet en utilisant la
// notation avec un point (`personne.age`, `personne.nom[0]`, `personne.bio()`).
//
// Le nom de l'objet (`personne`) agit comme un *espace de noms* (ou *namespace*
// en anglais), c'est à dire qu'il doit être entré en premier pour accéder aux
// membres encapsulés dans l'objet.
//
// Il est même possible de donner un autre objet comme valeur d'un membre de
// l'objet.
//
//////////
// EXEMPLE
//
// Ici, nous créons un *sous-espace de noms*. Pour accéder à ces éléments, il
// suffit de chaîner une étape de plus avec un autre point.

const personne2 = {
	nom: {
		prenom: "Jean",
		nomFamille: "Martin",
	},
	salutation: function () {
		return `Bonjour ! Je suis ${this.nom.prenom}.`;
	},
};

////////////////////////////////////////////////////////////////////////////////
// NOTATION AVEC LES CROCHETS
//
// Il y a une autre façon d'accéder aux membres d'un objet : la notation avec
// les crochets.
//
//////////
// EXEMPLE

const personne3 = {
	nom: {
		prenom: "Jean",
		nomFamille: "Martin",
	},
	salutation: function () {
		return `Bonjour ! Je suis ${this["nom"]["prenom"]}.`;
	},
};

////////////////////////////////////////////////////////////////////////////////
// DÉFINIR LES MEMBRES D'UN OBJET
//
// Vous pouvez aussi modifier la valeur d'un membre d'un objet en déclarant
// simplement le membre que vous souhaitez modifier.
//
//////////
// EXEMPLE

let personne4 = {
	prenom: "Jean",
	nomFamille: "Martin",
};

// Modifie un membre
personne4.nom = {
	prenom: "Bruno",
	nomFamille: "Munari",
};

// Crée un nouveau membre
personne4.salutation = function () {
	return `Bonjour ! Je suis ${this["nom"]["prenom"]}.`;
};

//////////
// EXEMPLE
//
// Ainsi, on peut utiliser la notation par crochet pour définir dynamiquement
// les valeurs ou les noms des membres.

const personne5 = {};

const membreNom = "grandeur";
const membreValeur = 1.75;

personne5[membreNom] = membreValeur;
personne5.salutation = function () {
	return `Bonjour ! Je mesure ${this.grandeur} mètres.`;
};

////////////////////////////////////////////////////////////////////////////////
// MOT CLÉ `this`
//
// Le mot-clé `this` se réfère à l'objet courant dans lequel le code est écrit.
//
// Ce n'est pas très utile quand on écrit des objets littéraux à la main, mais
// ça prend tout son sens quand on génère des objets dynamiques (avec des
// constructeurs par exemple).

////////////////////////////////////////////////////////////////////////////////
// LES CONSTRUCTEURS
//
// Les objets littéraux sont utiles pour la création d'objets uniques, mais s'il
// faut créer plus qu'un object, ou si nous désirons mettre à jour ses
// propriétés, alors ils deviennent vite inadéquats.
//
// Prenez le code suivant :

const personne6 = {
	nom: "Françoise",
	// Raccourci pour déclarer une méthode.
	salutation() {
		return `Allô ! Mon nom est ${this.nom}.`;
	},
};

const personne7 = {
	nom: "Franz",
	// Raccourci pour déclarer une méthode.
	salutation() {
		return `Allô ! Mon nom est ${this.nom}.`;
	},
};

// Il n'est pas très efficace. Non seulement faut-il se répéter, mais il faut se
// rappeler de changer les 2 objets si nous désirons leur ajouter une propriété.
//
// Pour simplifier, il faudrait définir la « forme » de l'objet `personne` --
// c'est-à-dire les différentes propriétés et méthodes qu'il peut contenir -- et
// puis créer nos objets à partir de cette forme.
//
// On peut faire cela à l'aide d'une fonction :

function creerPersonne(nom) {
	const obj = {};
	obj.nom = nom;
	obj.salutation = function () {
		return `Allô ! Mon nom est ${obj.nom}.`;
	};
	return obj;
}

const albert = creerPersonne("Albert");
const laurence = creerPersonne("Laurence");

// Une manière moins verbeuse de faire la même chose est d'utiliser un
// *constructeur*. Un constructeur est une fonction appelée avec la mot clé
// `new`. Une fois appelé, le constructeur :
//
// - crée un nouvel objet
// - assigne `this` au nouvel objet
// - exécute le code dans la fonction
// - retourne le nouvel objet
//
// Un constructeur est conventionnellement appelé selon l'objet qu'il crée, et
// commence avec une lettre majuscule.

function Personne(nom) {
	this.nom = nom;
	this.salutation = function () {
		return `Allô ! Mon nom est ${this.nom}.`;
	};
}

const anya = new Personne("Anya");
const paul = new Personne("Paul");

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics
