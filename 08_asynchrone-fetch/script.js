////////////////////////////////////////////////////////////////////////////////
// PROGRAMMATION SYNCHRONE /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Habituellement, Un programme Javascript est exécuté ligne par ligne, selon
// l'ordre dans lequel elles ont été écrites. Pour chaque ligne, le moteur
// attend que la ligne ait été exécutée avant de passer à la prochaine. Chaque
// ligne dépend donc du travail exécuté dans les lignes précédentes.
//
// Ce caractère séquentiel fait que nous avons un programme *synchrone*.
//
//////////
// EXEMPLE

const miriam = "Miriam";
const salut = `Je m'appelle ${miriam} !`; // => "Bonjour, je m'appelle Miriam !"

// Quand bien même on appellerait une fonction séparée, le programme serait
// toujours synchrone, car l'instruction qui l'appelle doit attendre que la
// fonction ait renvoyé sa valeur de retour avant de pouvoir finir.

function creerSalutation(nom) {
	return `Bonjour, je m'appelle ${nom} !`;
}

const david = "David";
const salut2 = creerSalutation(david); // => Bonjour, je m'appelle David !

////////////////////////////////////////////////////////////////////////////////
// PROBLÈME DE LA PROGRAMMATION SYNCHRONE
//
// Et si notre fonction synchrone mettait beaucoup de temps à s'exécuter ?
//
//////////
// EXEMPLE
//
// Dans l'exemple qui suit, le programme génère plusieurs grands nombres
// premiers, en utilisant un algorithme très inefficace. On peut contrôler la
// quantité de nombres premiers à générer, ce qui aura bien entendu un impact
// sur la durée de l'opération.
//
// (Il n'est pas important de comprendre cette fonction.)

function genererNbPremiers(quota) {
	function estPremier(n) {
		for (let c = 2; c <= Math.sqrt(n); ++c) {
			if (n % c === 0) {
				return false;
			}
		}
		return true;
	}

	const nbPremiers = [];
	const maximum = 1000000;

	while (nbPremiers.length < quota) {
		const candidat = Math.floor(Math.random() * (maximum + 1));
		if (estPremier(candidat)) {
			nbPremiers.push(candidat);
		}
	}

	return nbPremiers;
}

document.querySelector("#generer").addEventListener("click", () => {
	const quota = document.querySelector("#quota").value;
	const nbPremiers = genererNbPremiers(quota);
	document.querySelector(
		"#output"
	).textContent = `Génération de ${quota} nombres premiers terminée !`;
});

document.querySelector("#recharger").addEventListener("click", () => {
	document.location.reload();
});

// Vous observerez que, pendant l'exécution de la fonction
// `genererNbPremiers()`, la page ne répond plus et on ne peut plus saisir de
// texte, cliquer ou faire autre chose. Voici le problème qui se pose avec les
// fonctions synchrones dont l'exécution est longue.
//
// On voudrait une méthode pour que notre programme puisse :
//
// - Démarrer une opération longue en appelant une fonction.
// - Avoir une fonction pour démarrer l'opération et rendre la main
//   immédiatement, afin que le programme puisse continuer de réagir aux autres
//   évènements.
// - Recevoir une notification du résultat de l'opération, lorsqu'elle termine.

////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT ASYNCHRONE ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Une promesse (promise, en anglais) est un objet renvoyé par une fonction
// asynchrone qui représente l'état courant de l'opération. Au moment où la
// promesse est renvoyée à l'appelant, l'opération n'est généralement pas
// terminée, mais la promesse fournit des méthodes pour gérer la réussite ou
// l'échec de l'opération.
//
// Avec une API fonctionnant avec des promesses, la fonction asynchrone démarre
// l'opération et renvoie un objet `Promise`. On peut alors attacher des
// gestionnaires à cette promesse et les gestionnaires seront exécutés lors du
// succès ou de l'échec de l'opération.

////////////////////////////////////////////////////////////////////////////////
// LES CHAÎNES DE PROMESSES
//
// `fetch()` est un API qui fonctionne avec les promesses. Il permet de
// récupérer des ressources à travers le réseau de manière asynchrone.
//
//////////
// EXEMPLE
//
// Ici, nous téléchargeons le fichier JSON situé à l'adresse spécifiée.
//
// D'abord, on appelle l'API `fetch()`, laquelle envoie une requête HTTP à un
// serveur, et on affecte la valeur de retour à la variable `fetchPromise`.

const fetchProduct = fetch("https://fakestoreapi.com/products/1");

// On affiche la variable `fetchPromise` dans la console. Une promesse peut être
// dans 3 états : pending, fulfilled, rejected.

console.log("1", fetchProduct); // => Promise { <state>: "pending" }

// Ensuite, on passe une fonction de rappel à la méthode `then()` de la
// promesse. Si l'opération réussie, la promesse appellera la fonction en lui
// passant un objet `Response` qui contient la réponse du serveur.

fetchProduct.then((response) => {
	console.log("2", `Réponse reçue : ${response.status}`); // => Réponse reçue : 200
});

// Enfin, on affiche un message dans la console indiquant que la requête a été
// lancée. On notera que le message sera affiché avant d'avoir reçu une réponse.
// À la différence d'une fonction synchrone, `fetch()` produit sa valeur de
// retour alors que la requête est toujours en cours, ce qui permet à notre
// programme de rester réactif.

console.log("3", "Requête initiée…");

///////////////////
// EXEMPLE `json()`
//
// Avec l'API `fetch()`, une fois l'objet `Response` obtenu, il faut appeler une
// autre fonction pour en récupérer les données.
//
// Ici, on veut récupérer les données sous forme JSON. On appelle donc la
// méthode `json()` de l'objet Response. Il s'avère que `json()` est également
// asynchrone ; il faut donc appeler deux fonctions asynchrones à la suite.

fetch("https://fakestoreapi.com/products/2")
	.then((response) => {
		// Vérifie que le serveur a accepté notre requête.
		if (!response.ok) {
			throw new Error(`Erreur HTTP : ${response.status}`);
		}
		// Retourne la promesse renvoyée par la méthode `json()`.
		return response.json();
	})
	// Appel `then()` sur la promesse retournée plus haut.
	.then((json) => {
		console.log("Produit 2", json);
	});

////////////////////////////////////////////////////////////////////////////////
// INTERCEPTER LES ERREURS
//
// Pour la gestion des erreurs, les objets `Promise` fournissent une méthode
// `catch()`. Elle se comporte un peu comme `then()` : on l'appelle en lui
// passant une fonction de rappel. La fonction de rappel passée à `then()` est
// appelé lorsque l'opération asynchrone a réussi. La fonction de rappel passée
// à `catch()` est appelée lorsque l'opération asynchrone échoue.
//
// Il n'est pas nécessaire d'avoir une méthode `catch()` pour chaque promesse de notre chaîne.
// Si on ajoute `catch()` à la fin, il sera appelé dès qu'un des appels de
// fonction asynchrone échoue. Ainsi, il est possible d'implémenter une
// opération composée de plusieurs appels successifs de fonctions asynchrones et
// de gérer toutes les erreurs à un seul endroit.
//
//////////
// EXEMPLE
//
// Entrez un mauvais URL pour voir l'erreur s'afficher dans la console.

fetch("https://fakestoreapi.com/products/3")
	.then((response) => {
		// Vérifie que le serveur a accepté notre requête.
		if (!response.ok) {
			throw new Error(`Erreur HTTP : ${response.status}`);
		}
		// Retourne la promesse renvoyée par la méthode `json()`.
		return response.json();
	})
	// Appel `then()` sur la promesse retournée plus haut.
	.then((json) => {
		console.log("Produit 3", json);
	})
	.catch((error) => {
		console.error(`Impossible de récupérer le produit 3 : ${error}`);
	});

////////////////////////////////////////////////////////////////////////////////
// COMBINER PLUSIEURS PROMESSES
//
// Une chaîne de promesse est utile lorsque notre opération se compose de
// plusieurs fonctions asynchrones et que chacune de ces fonctions doit démarrer
// à la suite de l'autre. Il existe toutefois d'autres façons de combiner les
// appels de fonctions asynchrones.
//
// Parfois, on a besoin que toutes les promesses soient tenues, mais leur
// exécution ne dépend pas l'une de l'autre. Dans une telle situation, il est
// plus efficace de lancer toutes les promesses en même temps puis de recevoir
// une notification lorsqu'elles ont toutes été tenues.
//
// La méthode `Promise.all()` est l'outil adéquat pour ça. Elle prend comme
// argument un tableau de promesses et renvoie une seule promesse.
//
// La promesse renvoyée par `Promise.all()` est :
//
// - Tenue lorsque toutes les promesses du tableau ont été tenues. Dans ce cas,
//   le gestionnaire `then()` est appelé avec un tableau contenant toutes les
//   réponses, dans le même ordre que le tableau des promesses passé à `all()`.
// - Rompue si au moins une des promesses du tableau a été rompue. Dans ce cas,
//   le gestionnaire `catch()` est appelé avec l'erreur levée par la promesse du
//   tableau qui a été rompue.
//
/////////////////////////////
// EXEMPLE de `Promise.all()`
//
// Ici, on lance trois requêtes `fetch()` vers trois URL différentes. Si elles
// réussissent toutes les trois, on affiche le code de statut de chaque. Si
// l'une d'elles échoue, on affiche l'erreur dans la console.

const fetchPromise1 = fetch(
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
	.then((reponses) => {
		for (const reponse of reponses) {
			console.log(`${reponse.url} : ${reponse.status}`);
		}
	})
	.catch((error) => {
		console.error(`Erreur de récupération : ${error}`);
	});

// Il arrive aussi qu'on ait plusieurs promesses et que la réussite d'une seule
// suffise, quelle que soit la promesse qui réussit. Dans ce cas, on pourra
// utiliser `Promise.any()`. Elle fonctionne comme `Promise.all()`, mais elle
// est tenue dès qu'une des promesses du tableau a été tenue et rompue
// uniquement si toutes les promesses du tableau sont rompues
//
/////////////////////////////
// EXEMPLE de `Promise.any()`

const fetchPromise4 = fetch(
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise5 = fetch(
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise6 = fetch(
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.any([fetchPromise4, fetchPromise5, fetchPromise6])
	.then((reponse) => {
		console.log(`${reponse.url}: ${reponse.status}`);
	})
	.catch((error) => {
		console.error(`Erreur de récupération : ${error}`);
	});

////////////////////////////////////////////////////////////////////////////////
// `async` ET `await`
//
// Le mot-clé async fournit une façon plus simple de travailler avec du code
// asynchrone utilisant les promesses. En ajoutant `async` au début d'une
// fonction, cette dernière devient une fonction asynchrone.
//
//////////
// EXEMPLE

async function maFonctionAsynchrone() {
	return "Je suis une fonction asynchrone.";
}

// Dans une fonction asynchrone, on peut utiliser le mot-clé `await` avant un
// appel à une fonction renvoyant une promesse. De cette façon, le code patiente
// jusqu'à ce que la promesse soit réglée et la valeur de résolution de la
// promesse est fournie comme valeur de retour, ou alors la valeur d'échec
// déclenche une erreur.
//
// Cela permet d'écrire du code utilisant des fonctions asynchrones mais qui
// ressemble à du code synchrone. On pourrait par exemple réécrire notre exemple
// avec `fetch()` comme ceci :

async function fetchProduct4() {
	const response = await fetch("https://fakestoreapi.com/products/4");
	const json = await response.json();

	console.log(json);
}

// On peut même utiliser un bloc `try…catch` pour la gestion d'erreurs, de la
// même façon qu'on peut le faire lorsqu'on utilise du code synchrone.

async function fetchProduct5() {
	try {
		const response = await fetch("https://fakestoreapi.com/products/5");
		const json = await response.json();
		console.log(json);
	} catch (error) {
		console.error(`Impossible de récupérer le produit 5 : ${error}`);
	}
}

// Attention, les functions asynchrones renvoient toujours une promesse. On ne
// peut donc pas assigner directement leur valeur de retour.

async function fetchProduct6() {
	const response = await fetch("https://fakestoreapi.com/products/6");
	const json = await response.json();

	return json;
}

const product6 = fetchProduct6(); // => Promise
product6.then((data) => console.log("Produit 6", data)); // => {id: 6, ...}

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous
// - https://developer.mozilla.org/fr/docs/Web/API/fetch
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/
//   Global_Objects/Promise/then
