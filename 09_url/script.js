////////////////////////////////////////////////////////////////////////////////
// INTERFACE `URL` /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// L'interface `URL` est utilisée afin d'analyser, de décomposer, de construire,
// de normaliser ou d'encoder des `URL`. Elle fonctionne en exposant des
// propriétés qui permettent de lire et de modifier les différentes composantes
// d'une `URL`.
//
// On crée généralement un nouvel objet `URL` en fournissant l'URL sous la forme
// d'une chaîne de caractères à son constructeur, ou en fournissant une URL
// relative et une URL de base. On peut alors lire les composantes de l'URL et
// éventuellement la modifier.
//
//////////////////////
// STRUCTURE D'UNE URL
//
// <protocol>//<hostname>:<port>/<pathname><search><hash>
//
//////////
// EXEMPLE
//
// Le constructeur prend un paramètre `url`, et un paramètre optionnel `base`
// utilisé si le paramètre `url` est une URL relative.

const url1 = new URL("https://developer.mozilla.org/fr/docs/Web/API/URL");
const url2 = new URL("/fr/docs/Web/API/URL", "https://developer.mozilla.org");
const url3 = new URL(window.location);

////////////////////////////////////////////////////////////////////////////////
// INTERFACE `URLSearchParams` /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// L’interface `URLSearchParams` définit des méthodes utilitaires pour
// travailler avec les paramètres GET d’une adresse URL.
//
//////////
// EXEMPLE

const params = new URLSearchParams();

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `set()`
//
// La méthode `set()` de l'interface `URLSearchParams` définit la valeur
// associée à un paramètre de recherche donné avec la valeur spécifiée. Si
// plusieurs valeurs correspondent, cette méthode supprime les autres. Si le
// paramètre de recherche n'existe pas, cette méthode le crée.
//
//////////
// EXEMPLE

params.set("name", "value");
params.set("search", "hayao");
params.set("view", "list");

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `append()`
//
// La méthode `append()` de l'interface `URLSearchParams` ajoute une paire
// clé/valeur spécifiée en tant que nouveau paramètre de recherche. Si la même
// clé est ajoutée plusieurs fois, elle apparaîtra plusieurs fois dans la chaîne
// de paramètres pour chaque valeur
//
//////////
// EXEMPLE

params.append("filter", "2021");
params.append("filter", "1986");

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `get()`
//
// La méthode `get()` de l'interface `URLSearchParams` retourne la première
// valeur associée au paramètre de recherche donné.
//
//////////
// EXEMPLE

const viewParam = params.get("view");
const searchParam = params.get("search");

function logAllParams() {
	for (const [key, value] of params) {
		console.log(key, value);
	}
}

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `getAll()`
//
// La méthode `getAll()` de l'interface `URLSearchParams` retourne sous forme de
// tableau toutes les valeurs associées à un paramètre de recherche donné.
//
//////////
// EXEMPLE

const filterParam = params.getAll("filter");

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `delete()`
//
// La méthode `delete()` de l'interface `URLSearchParams` supprime le paramètre
// spécifié et toutes ses valeurs associées.
//
//////////
// EXEMPLE

params.delete("name");

////////////////////////////////////////////////////////////////////////////////
// MANIPULER L'HISTORIQUE DU NAVIGATEUR ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// L'objet DOM `window` fournit un accès à l'historique du navigateur via
// l'objet `history`. Il expose un ensemble de méthodes et de propriétés qui
// permettent de manipuler le contenu de l'historique.
//
// Les méthodes `history.pushState()` et `history.replaceState()`, ainsi que
// l'événement `popstate`, sont particulièrement d'intérêt pour la gestion de
// l'état d'un site Web.

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `history.pushState()`
//
// La méthode `history.pushState()` utilise trois paramètres :
//
// - un objet état
// - un titre (pour l'instant ignoré par la majorité des navigateurs)
// - une URL (relative ou absolue)
//
//////////
// EXEMPLE
//
// Vous remarquerez que cela provoque l'apparition de la nouvelle URL dans la
// barre de navigation, mais pas le chargement effectif de la nouvelle page.

function updateURL(url) {
	history.pushState({ data: "" }, "Nouvel état", url);
}

////////////////////////////////////////////////////////////////////////////////
// MÉTHODE `history.replaceState()`
//
// `history.replaceState()` fonctionne exactement comme `history.pushState()`
// hormis le fait que `replaceState()` modifie l'entrée courante de l'historique
// au lieu d'en créer une nouvelle. À noter que ceci n'empêche pas la création
// d'une nouvelle entrée dans l'historique global du navigateur.
//
//////////
// EXEMPLE

function replaceURL(url) {
	history.pushState({ data: "" }, "Nouvel état", url);
}

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/en-US/docs/Web/API/History_API
// - https://developer.mozilla.org/en-US/docs/Web/API/History_API/
//   Working_with_the_History_API
// - https://developer.mozilla.org/fr/docs/Web/API/
//   History_API#ajouter_et_modifier_des_entrées_de_lhistorique
// - https://developer.mozilla.org/en-US/docs/Web/API/URL
// - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// - https://developer.chrome.com/blog/urlsearchparams/
