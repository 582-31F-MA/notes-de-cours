////////////////////////////////////////////////////////////////////////////////
// document.createElement() ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Dans un document HTML, la méthode `document.createElement()` crée un élément
// HTML du type spécifié par `tagName` ou un `HTMLUnknownElement` si `tagName`
// n'est pas reconnu.
//
//////////
// SYNTAXE
//
// const element = document.createElement(tagName[, options]);
//
//////////
// EXEMPLE
//
// const newButtonEl = document.createElement("button");
// console.log(newButtonEl);

////////////////////////////////////////////////////////////////////////////////
// document.createTextNode() ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Crée un nouveau nœud de texte.
//
// //////////
// SYNTAXE
//
// const text = document.createTextNode(données);
//
//////////
// EXEMPLE
//
// const newButtonText = document.createTextNode("Je suis un bouton");
// console.log(newButtonText);

////////////////////////////////////////////////////////////////////////////////
// element.appendChild() ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `Node.appendChild()` ajoute un nœud à la fin de la liste des
// enfants d'un nœud parent spécifié. Si l'enfant donné est une référence à un
// nœud existant dans le document, `appendChild()` le déplace de sa position
// actuelle vers une nouvelle position.
//
//////////
// SYNTAXE
//
// const elementAjoute = element.appendChild(enfant);
//
//////////
// EXEMPLE
//
// const newButtonEl = document.createElement("button"); const newButtonText =
// document.createTextNode("Je suis un bouton");
// newButtonEl.appendChild(newButtonText);
//
// const mainEl = document.querySelector("main");
// mainEl.appendChild(newButtonEl);

////////////////////////////////////////////////////////////////////////////////
// element.removeChild() ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `Node.removeChild()` retire un nœud enfant de l'arbre DOM et
// retourne le nœud retiré.
//
//////////
// SYNTAXE
//
// const enfant = node.removeChild(child);
//
//////////
// EXEMPLE
//
// const main = document.querySelector("main");
//
// const p = document.createElement("p");
// p.textContent = "Je suis un nouveau <p>.";
// main.appendChild(p);
//
// const elementSupprime = main.removeChild(p);

////////////////////////////////////////////////////////////////////////////////
// element.cloneNode() /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `Node.cloneNode()` renvoie une copie du nœud sur lequel elle a été
// appelée.
//
//////////
// SYNTAXE
//
// const dupNode = node.cloneNode([deep]);
//
//////////
// EXEMPLE
//
// const main = document.querySelector("main");
//
// const p = document.createElement("p");
// p.textContent = "Je suis un nouveau <p>.";
// main.appendChild(p);
//
// const elementDuplique = main.cloneNode(p);
// main.appendChild(elementDuplique);

////////////////////////////////////////////////////////////////////////////////
// element.innerHTML ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La *propriété* (et non méthode) `Element.innerHTML` de `Element` récupère ou
// définit la syntaxe HTML décrivant les descendants de l'élément.
//
//////////
// SYNTAXE
//
// Récupérer :
// const content = element.innerHTML;
//
// Définir :
// element.innerHTML = htmlString;
//
//////////
// EXEMPLE
//
// const main = document.querySelector("main");
//
// main.innerHTML = "<p>La chambre clair.</p>";
//
// const contenu = main.innerHTML;

////////////////////////////////////////////////////////////////////////////////
// element.insertAdjacentHTML() ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `Element.insertAdjacentHTML()` analyse le texte spécifié en tant
// que HTML ou XML et insère les nœuds résultants dans le DOM à la position
// spécifiée.
//
//////////
// SYNTAXE
//
// element.insertAdjacentHTML(position, text);
//
/////////////
// PARAMÈTRES
//
// position
//
// une des chaînes de caractères suivantes :
// - 'beforebegin' : Avant l'element lui-même.
// - 'afterbegin' : Juste à l'intérieur de l'element , avant son premier enfant.
// - 'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.
// - 'afterend' : Après element lui-même.
//
// text
//
// chaîne de caractères qui doit être analysée en tant qu'HTML ou XML et insérée
// dans l'arbre du DOM.
//
//////////
// EXEMPLE
//
// const main = document.querySelector("main");
//
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// li.textContent = "1";
// ul.appendChild(li);
// main.appendChild(ul);
//
// ul.insertAdjacentHTML("afterbegin", "<li>0</li>");

////////////////////////////////////////////////////////////////////////////////
// VOIR AUSSI //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// - Element.insertAdjacentElement()
// - Element.insertAdjacentText()
// - Element.before()
// - Element.after()
//
////////////////////////////////////////////////////////////////////////////////
// RESSOURCES //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// - https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
// - https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode
// - https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
// - https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// - https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
// - https://css-tricks.com/comparing-methods-for-appending-and-inserting-
//   with-javascript/
