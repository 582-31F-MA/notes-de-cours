////////////////////////////////////////////////////////////////////////////////
// LE shadow DOM //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Un aspect important des composants web est l'encapsulation — c'est-à-dire
// garder le balisage, le style et les fonctionnalités de notre composant cachés
// du reste de la page afin qu'il n'y ait pas de conflit dans le code.
//
// L'API Shadow DOM (DOM fantôme) est un moyen d'y parvenir. Il permet à des
// arbres DOM cachés d'être associés à des éléments de l'arbre DOM principal
// (voir le schéma ci-joint).
//
// Pour bien comprendre, il y a quelques termes de la terminologie du DOM
// fantôme à connaître :
//
// - Hôte fantôme : le nœud du DOM principal auquel le DOM fantôme est associé.
// - Arbre fantôme : l'arbre DOM au sein du DOM fantôme.
// - Frontière fantôme : la limite où le DOM fantôme se termine et où le DOM
//   principal commence.
// - Racine fantôme : le nœud racine de l'arbre fantôme.
//
// Vous pouvez affecter les nœuds du DOM fantôme de la même manière que pour DOM
// principal — par exemple, en leur ajoutant des éléments enfants ou en leur
// définissant des attributs, en stylisant des nœuds individuels au moyen de
// `element.style.propriete`, ou en ajoutant du style à l'arbre DOM fantôme
// entier via une balise `<style>`. La différence est que le code au sein du DOM
// fantôme ne peut affecter aucun élément en dehors de son arbre.
//
//////////
// EXEMPLE


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/en-US/docs/Web/API/Web_components/
//   Using_shadow_DOM
