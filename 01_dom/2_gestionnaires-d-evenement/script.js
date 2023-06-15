////////////////////////////////////////////////////////////////////////////////
// EventTarget.addEventListener() //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `addEventListener()` de `EventTarget` attache une fonction à
// appeler chaque fois que l'évènement spécifié est envoyé à la cible.
//
// Les cibles courantes sont un `Element`, le `Document` lui-même et une
// `Window`, mais on peut tout à fait cibler n'importe quel objet prenant en
// charge les évènements.
//
// `addEventListener()` agit en ajoutant une fonction ou un objet qui implémente
// `EventListener` à la liste des gestionnaires d'évènement pour le type
// d'évènement spécifié sur la cible (`EventTarget`) à partir de laquelle il est
// appelé.
//
//////////
// SYNTAXE
//
// target.addEventListener(type, listener [, options]);
//
//////////
// EXEMPLE
//
// const buttonEl = document.querySelector("button");
//
// buttonEl.addEventListener("click", function () {
// 	console.log("Clicked");
// });
//
////////////////////////////////////////////////////////////////////////////////
// FONCTION DE RAPPEL //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// L'écouteur d'évènement peut être spécifié comme une fonction anonyme ou
// fléchée, mais il est souvent utile de le définir plutôt comme une fonction
// nommée qui reçoit le paramètre `Event`. De cette façon, il est possible
// d'attacher le même écouteur d'événement sur plusieurs éléments.
//
//
//////////
// EXEMPLE
//
// const buttonEl = document.querySelector("button");
// function handleEvent(event) {
// 	console.log(event);
// }
//
// buttonEl.addEventListener("click", handleEvent);
//
////////////////////////////////////////////////////////////////////////////////
// EventTarget.removeEventListener() ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La méthode `EventTarget.removeEventListener()` supprime d'une `EventTarget`
// (cible) un écouteur d'évènements précédemment enregistré avec
// `EventTarget.addEventListener()`. L'écouteur d'évènements à supprimer est
// identifié en utilisant la combinaison du type d'évènement, la fonction "event
// listener" elle-même et diverses options facultatives qui peuvent affecter le
// processus de correspondance
//
//////////
// SYNTAXE
//
// target.removeEventListener(type, listener[, options]);
//
//////////
// EXEMPLE
//
// const buttonEl = document.querySelector("button");
// function handleEvent(event) {
// 	console.log(event);
// }
//
// buttonEl.addEventListener("click", handleEvent);
// buttonEl.removeEventListener("click", handleEvent);
//
////////////////////////////////////////////////////////////////////////////////
// RESSOURCES //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// - https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// - https://developer.mozilla.org/fr/docs/Web/Events
// - https://developer.mozilla.org/fr/docs/Web/API/EventTarget/
//   removeEventListener
