////////////////////////////////////////////////////////////////////////////////
// querySelector() /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode querySelector() des interfaces `Document` et `Element` retourne le
// *premier* `Element` dans le document ou l'élément correspondant au sélecteur
// spécifié, ou `null` si aucune correspondance n'est trouvée.
//
///////////
// SYNTAXE
//
// element = document.querySelector(sélecteurs);
// ou
// element = parentNode.querySelector(sélecteurs);
//
///////////////////
// EXEMPLE DOCUMENT
//
// const pEl = document.querySelector("p");
// console.log(pEl);
//
//////////////////
// EXEMPLE ELEMENT
//
// const pEl = document.querySelector("p:nth-child(2)");

// const spanEl = pEl.querySelector("span");
// console.log(spanEl);
//
////////////////////////////////////////////////////////////////////////////////
// querySelectorAll() //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode querySelectorAll() des interfaces `Document` et `Element` renvoie
// une `NodeList` *statique* représentant une liste des éléments du document ou
// de l'élément qui correspondent au groupe de sélecteurs spécifiés.
//
///////////
// SYNTAXE
//
// element = document.querySelectorAll(sélecteurs);
// ou
// element = parentNode.querySelectorAll(sélecteurs);
//
///////////////////
// EXEMPLE DOCUMENT
//
// const pElements = document.querySelectorAll("p");
// console.log(pElements);
//
//////////////////
// EXEMPLE ELEMENT
//
// const main = document.querySelector("main");
// const pElements = main.querySelectorAll("p");
// console.log(pElements);
//
////////////////////////////////////////////////////////////////////////////////
// RESSOURCES //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// - https://developer.mozilla.org/fr/docs/Web/API/Document_object_model/
//   Locating_DOM_elements_using_selectors
//
