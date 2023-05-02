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


//////////
// EXEMPLE
//
// Une erreur courante en JavaScript est d'extraire une méthode d'un objet, puis
// d'appeler cette méthode depuis un autre objet et de s'attendre à utiliser
// l'objet original en tant que valeur de `this`.


// La façon la plus simple d'utiliser `bind()` est de créer une fonction qui,
// peu importe la façon dont elle est appelée, le sera avec une certaine valeur
// `this` donnée.


///////////////////////////
// EXEMPLE DANS UNE MÉTHODE


/////////////////////////
// EXEMPLE AVEC ARGUMENTS


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
//   Global_objects/Function/bind
