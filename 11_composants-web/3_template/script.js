////////////////////////////////////////////////////////////////////////////////
// L'ÉLÉMENT <template> ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// L'élément HTML `<template>` (ou Template Content ou modèle de contenu) est un
// mécanisme utilisé pour stocker du contenu HTML (côté client) qui ne doit pas
// être affiché lors du chargement de la page mais qui peut être instancié et
// affiché par la suite grâce à un script JavaScript.
//
// Cet élément est un fragment de contenu mis de côté pour être utilisé par la
// suite dans le document. Lorsque le moteur traite le contenu de l'élément
// `<template>` lors du chargement de la page, il ne fait que vérifier la
// validité du contenu, ce dernier n'est pas affiché.
//
//////////
// EXEMPLE
//
// Voir index.html


////////////////////////////////////////////////////////////////////////////////
// L'ÉLÉMENT <slot> ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Il est possible d'insérer du contenu dans un <`template>` grâce à l'élément
// `<slot>`. Un `<slot>` est identifié par son attribut `name`, et permet de
// définir un emplacement dans le `<template>` parent qui pourra être populé
// avec du HTML.
//
//////////
// EXEMPLE
//
// Voir index.html


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Web/API/Web_components/
//   Using_templates_and_slots
// - https://web.dev/learn/html/template/
