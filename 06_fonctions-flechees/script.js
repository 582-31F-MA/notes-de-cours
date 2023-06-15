////////////////////////////////////////////////////////////////////////////////
// FONCTION FLÉCHÉE ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Une expression de fonction fléchée (arrow function en anglais) permet d’avoir
// une syntaxe plus courte que les expressions de fonction. Les fonctions
// fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour
// déclarer des méthodes.
//
//////////
// SYNTAXE
//
// Une fonction fléchée prend généralement la forme d'une liste de paramètres
// séparés par des virgules entre parenthèses, suivie de la flèche `=>`, suivie
// du corps de la fonction entre accolades :

(x, y) => {
	return x + y;
};

///////////////////
// SYNTAXE COMPACTE
//
// Si la fonction comprend seulement une instruction `return`, le mot-clé
// `return` et les accolades peuvent être omis. On écrit alors seulement
// l'expression dont on veut retourner la valeur :

(x, y) => x + y;

/////////////////////////////////
// SYNTAXE COMPACTE (ENCORE PLUS)
//
// Si la fonction a seulement un paramètre, les parenthèses peuvent être
// omises :

(x) => x * x;

// Notez toutefois qu'une fonction fléchée sans paramètres doit toujours être
// écrite avec les parenthèses.

() => 2 + 2;

////////////////////////////////////////////////////////////////////////////////
// MOT CLÉ `this`
//
// Les fonctions fléchées diffèrent des autres types de fonctions d'une manière
// critique : elles ne possèdent pas leurs propres valeurs pour `this`,
// `arguments`, `super` et `new.target`.
//
// Les fonctions fléchées héritent de la valeur du mot-clé `this` de
// l'environnement dans lequel elles sont définies plutôt que de définir leur
// propre contexte d'invocation comme le font les autre types de fonctions.

const o = {
	m: function () {
		this === o; // => true : `this` égale l'object `o`

		// Dans la fonction imbriquée ci-dessous, `this` n'est pas égal à `o`.
		// Ceci est largement considéré comme une faille dans le langage
		// JavaScript.
		function f() {
			this === o; // => false : `this` est `undefined` ou `Window`
		}

		() => {
			this === o; // => true :
		};
	},
};

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/
//   Arrow_functions
// - https://tech.mozfr.org/post/2015/06/10/
//   ES6-en-details-%3A-les-fonctions-flechees
