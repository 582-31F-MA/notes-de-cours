////////////////////////////////////////////////////////////////////////////////
// LA MÉTHODE `bind()` /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `bind()` crée une nouvelle fonction qui, lorsqu'elle est appelée,
// a pour contexte this la valeur passée en paramètre et éventuellement une
// suite d'arguments qui précéderont ceux fournis à l'appel de la fonction
// créée.

//////////
// EXEMPLE
//
// Le but premier de `bind()` est de lier une fonction à un objet. Lorsque vous
// invoquez la méthode `bind()` sur une fonction et passez un objet, la méthode
// renvoie une nouvelle fonction.
//
// Invoquer la nouvelle fonction appelle la fonction originale en tant que
// méthode de l'objet passé. Les arguments transmis à la nouvelle fonction sont
// transmis à la fonction d'origine.

function fonctionOriginale(x) {
	return x + this.y;
}

const obj = { y: 10 };
const fonctionNouvelle = fonctionOriginale.bind(obj);

fonctionNouvelle(10); // => 20

//////////
// EXEMPLE
//
// Une erreur courante en JavaScript est d'extraire une méthode d'un objet, puis
// d'appeler cette méthode depuis un autre objet et de s'attendre à utiliser
// l'objet original en tant que valeur de `this`.

const watson = {
	nom: "Watson",
	salutation() {
		return `Woof, mon nom est ${this.nom}.`;
	},
};

watson.salutation(); // => "Woof, mon nom est Watson."

const salutation = watson.salutation;
salutation(); // => "Woof, mon nom est undefined."

// La façon la plus simple d'utiliser `bind()` est de créer une fonction qui,
// peu importe la façon dont elle est appelée, le sera avec une certaine valeur
// `this` donnée.

const watsonDitAllo = watson.salutation.bind(watson);
watsonDitAllo(); // => "Woof, mon nom est Watson."

///////////////////////////
// EXEMPLE DANS UNE MÉTHODE

const o = {
	m: function () {
		this === o; // => true : `this` égale l'object `o`

		const f = function () {
			this === o; // => true : `this` égale l'object `o`
		}.bind(this);
	},
};

/////////////////////////
// EXEMPLE AVEC ARGUMENTS

function changerTaille(taille) {
	document.body.style.fontSize = taille + "px";
}

const bouton16 = document.querySelector("button:first-child");
const bouton18 = document.querySelector("button:nth-child(2)");
const bouton20 = document.querySelector("button:last-child");

bouton16.addEventListener("click", changerTaille.bind(null, 16));
bouton18.addEventListener("click", changerTaille.bind(null, 18));
bouton20.addEventListener("click", changerTaille.bind(null, 20));

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
//   Global_objects/Function/bind
