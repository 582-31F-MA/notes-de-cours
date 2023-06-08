# Les composants Web

Les composants Web (Web Components) sont un ensemble de 3 technologies qui
permettent de créer des éléments personnalisés réutilisables dont les
fonctionnalités sont encapsulées.

-   Les éléments personnalisés (custom elements) : un ensemble d'API JavaScript
    qui permettent de définir des éléments personnalisés ainsi que leur
    comportement.
-   Le Shadow DOM : un ensemble d'API JavaScript qui permettent d'attacher un
    DOM privé, séparé du DOM principal.
-   Les gabarits HTML : les éléments `<template>` et `<slot>` qui permettent
    d'écrire des gabarits de balisage qui ne sont pas affichés sur la page et
    qui peuvent être réutilisés comme base de la structure d'un élément
    personnalisé.

L'approche pour implémenter un composant web ressemble généralement à :

1. Créer une classe pour définir les fonctionnalités du composant web.
2. Enregistrer le nouvel élément avec la méthode
   `CustomElement.define()`, qui prend comme argument le nom de
   l'élément à définir, la classe et, optionnellement, l'élément duquel il
   hérite.
3. Si nécessaire, attacher un shadow DOM à l'élément personnalisé avec la
   méthode `Element.attachShadow()`. Ajouter des éléments enfants, des
   gestionnaires d'évènement, etc. au shadow DOM à l'aide des méthodes
   usuelles pour le DOM.
4. Si nécessaire, définir un gabarit HTML avec `<template>` et `<slot>`.
   Cloner et attacher le gabarit au shadow DOM.
5. Utiliser l'élément personnalisé où on veut sur la page, comme pour tout
   autre élément HTML.

## Ressources supplémentaires

-   https://developer.mozilla.org/fr/docs/Web/API/Web_components
-   https://web.dev/custom-elements-best-practices
-   https://github.com/mdn/web-components-examples
