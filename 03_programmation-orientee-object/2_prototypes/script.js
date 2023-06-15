////////////////////////////////////////////////////////////////////////////////
// LES PROTOTYPES //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Les prototypes sont un mécanisme au sein de JavaScript qui permettent aux
// objets d'hériter des propriétés et méthodes d'autres objets. Cela permet
// d'expliquer pourquoi différents objets possèdent des attributs et des
// méthodes définis à partir d'autres objets.
//
//////////
// EXEMPLE
//
// Si vous entrez `personne1` dans votre console JavaScript, vous verrez des
// membres que nous n'avons pas définis tels que `toString`, `valueOf`, etc. Ces
// membres sont définis au niveau du prototype objet du constructeur
// `Personne()`, qui est `Object`. On voit ici une mise en œuvre de la chaine de
// prototypage.


// Voici ce qui se passe :
//
// - Le navigateur tente de déterminer si l'objet `personne1` implémente une
//   méthode `valueOf()` ou `toString()`.
// - Aucune n'est présente, le navigateur vérifie donc si le prototype objet de
//   `personne1` (`Personne`) contient cette méthode.
// - Pas de `valueOf()` non plus, donc le navigateur regarde si le prototype
//   objet du constructeur `Personne()` (qui est `Object`) possède cette
//   méthode. Il y en a une, donc il l'appelle.
//
// Attention, les méthodes et attributs ne sont pas copiés d'un objet à un
// autre. On y accède à chaque fois en remontant la chaine de prototypage.

////////////////////////////////////////////////////////////////////////////////
// L'ATTRIBUT `prototype`
//
// Les éléments hérités par `Personne` sont ceux définis au niveau de l'attribut
// `prototype` d'`Object`. Les éléments listés sont ceux sous
// `Object.prototype`, et non ceux situés juste sous `Object`.
//
// La valeur de l'attribut `prototype` est un objet qui rassemble les attributs
// et méthodes que l'on souhaite appliquer aux objets tout au long de la chaine
// de prototypage.
//
// Attention : L'attribut `prototype` n'est pas le prototype objet de l'objet
// courant (on peut y accéder via __proto__ ou <prototype>). L'attribut
// prototype contient un objet où l'on définit les éléments dont on va pouvoir
// hériter.
//
//////////
// EXEMPLE
//
// 1. Vérifions le valeur de l'attribut `prototype` de notre constructeur
//    `Personne`.
// 2. Par défaut, l'attribut prototype d'un constructeur est toujours vide.
//    Voyons plutôt l'attribut `prototype` d'`Object`.
// 3. Modifions l'attribut prototype en lui ajoutant une nouvelle méthode.


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/
//   Object_prototypes
