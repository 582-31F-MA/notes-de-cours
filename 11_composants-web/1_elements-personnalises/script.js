////////////////////////////////////////////////////////////////////////////////
// LES ÉLÉMENTS PERSONNALISÉS //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Les éléments personnalisés permettent d'encapsuler des fonctionnalités dans
// un élément, plutôt que d'utiliser plusieurs balises et plusieurs scripts.
//
// Il existe deux types d'éléments personnalisés :
//
// - Les éléments personnalisés autonomes, qui n'héritent pas des éléments HTML
//   standard. Ils sont créés à l'aide d'une classe qui étend `HTMLElement`, et
//   ils sont utilisés en les écrivant littéralement en tant qu'élément HTML.
//   Par exemple, `<popup-info>`, ou `document.createElement("popup-info")`.
// - Les éléments intégrés personnalisés, qui héritent des éléments HTML de
//   base. Ils sont créer en spécifiant quel élément ils étendent, et ils sont
//   utilisés en écrivant l'élément de base, mais en indiquant le nom de
//   l'élément personnalisé dans l'attribut (ou la propriété) `is`. Par exemple
//   `<p is="word-count">` ou `document.createElement("p", {is: "word-count"})`.
//
// À ce jour, les éléments personnalisés autonomes sont supportés dans la
// majorité des navigateurs, mais pas les éléments intégrés personnalisés.
//
//////////
// EXEMPLE


// Il ne faut pas oublier d'enregistrer notre élément personnalisé dans le
// CustomElementRegistry à l'aide de la méthode define() mentionnée
// précédemment.
//
// Dans les paramètres, nous spécifions le nom de l'élément, puis le nom de la
// classe qui définit sa fonctionnalité. Le nom de l'élément doit
// obligatoirement contenir un tiret `-`.

customElements.define("my-first-custom-element", myFirstCustomElement);

////////////////////////////////////////////////////////////////////////////////
// Utilisation des rappels de cycle de vie
//
// À l'aide de méthodes, vous pouvez définir plusieurs rappels qui se
// déclenchent à différents points du cycle de vie de l'élément :
//
// - `connectedCallback()` : appelé lorsque l'élément personnalisé est connecté
//   pour la première fois au DOM du document
// - `disconnectedCallback()` : appelé lorsque l'élément personnalisé est
//   déconnecté du DOM du document
//
//////////
// EXEMPLE



//////////
// EXEMPLE
//
// On peut aussi définir une méthode `attributeChangedCallback()` qui sera
// appelée automatiquement lorsque l'un des attributs de l'élément personnalisé
// sera ajouté, supprimé ou modifié.


////////////////////////////////////////////////////////////////////////////////
// ATTRIBUTS ET PROPRIÉTÉS
//
// Il y a deux façons de passer des arguments à un élément personnalisé : soit à
// l'aide d'attributs, soit à l'aide de propriétés. Pour toute donnée de type
// primitive (chaîne, nombre), on utilise généralement les attributs de
// l'élément (voir ci-haut). Pour toute donnée plus complexe, comme un objet ou
// un tableau, il est préférable d'utiliser les propriétés.
//
// Lorsque possible, il est recommandé de synchroniser la valeur d'un attribut
// avec la propriété qui lui correspond. Par exemple, il est possible de définir
// le `href` d'un `<a>` avec `setAttribute("href", value)`, ainsi qu'avec
// `a.href = value`. Mais, dans les deux cas, la valeur de l'attribut et de la
// propriété sera la même.
//
//////////
// EXEMPLE


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/en-US/docs/Web/API/Web_components/
//   Using_custom_elements
// - https://web.dev/custom-elements-v1
