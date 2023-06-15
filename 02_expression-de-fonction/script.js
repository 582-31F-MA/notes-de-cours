////////////////////////////////////////////////////////////////////////////////
// EXPRESSION DE FONCTION IMMÉDIATEMENT INVOQUÉES //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// IIFE (Immediately Invoked Function Expression) (Expression de fonction
// invoquée immédiatement) est une fonction JavaScript qui est exécutée dès
// qu'elle est définie.
//
// C'est un modèle de conception qui est également connu sous le nom de Fonction
// anonyme auto-exécutable et contient deux parties principales. La première est
// la fonction anonyme avec portée lexicale incluse dans l'opérateur de
// groupement `()`. Cela empêche l'accès aux variables dans l'expression
// idiomatique IIFE ainsi que la pollution de la portée globale.
//
// La deuxième partie crée la fonction immédiatement exécutable `()`, à travers
// laquelle le moteur JavaScript interprétera directement la fonction.
//
//////////
// SYNTAXE
//
// (function (…) { … }(…));
// ou
// (function (…) { … })(…);
//
////////////
// EXEMPLE 1
//
// La fonction devient une expression de fonction qui est immédiatement
// exécutée. La variable dans l'expression ne peut pas être atteinte de
// l'extérieur.

(function () {
	const prenom = "Barry";
	console.log(prenom);
})();

////////////
// EXEMPLE 2
//
// Affecter l'IIFE à une variable ne la stocke pas mais reçoit son résultat.

const nom = (function () {
	const prenom = "Suzanne";
	const nomFamille = "Bobo";

	return `${prenom} ${nomFamille}`;
})();

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// - https://developer.mozilla.org/fr/docs/Glossary/IIFE
//
