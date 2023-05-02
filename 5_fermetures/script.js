////////////////////////////////////////////////////////////////////////////////
// FERMETURE (CLOSURE) /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// En JavaScript, la portée d'une variable est définie par son emplacement dans
// le code source. Les fonctions imbriquées ont ainsi accès aux variables
// déclarées dans les portées parentes.
//
// Une fermeture est la paire formée d'une fonction et des références à son état
// environnant (l'environnement lexical). En d'autres termes, une fermeture
// donne accès à la portée d'une fonction externe à partir d'une fonction
// interne (on dit aussi que la fonction « capture son environnement »).
//
//////////
// EXEMPLE


// Qu'arrive-t-il si nous renvoyons plutôt l'object fonction `f`, et que nous
// appelons celle-ci à l'*extérieur* de la fonction `verifierPorteeFermeture` ?


////////////////////////////////////////////////////////////////////////////////
// LES FERMETURES EN PRATIQUE
//
// Une fermeture permet d'associer des données (l'environnement) avec une
// fonction qui agit sur ces données. On peut faire un parallèle avec la
// programmation orientée objet, car les objets permettent d'associer des
// données (les propriétés) avec des méthodes.
//
// Ainsi, on peut utiliser une fermeture pour tout endroit où on utiliserait un
// objet.
//
//////////
// EXEMPLE
//
// Imaginons que nous avons besoin d'un conteur, mais que nous voulons garder
// l'état interne du conteur privé (c'est-à-dire inaccessible au code
// extérieur) :


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures
