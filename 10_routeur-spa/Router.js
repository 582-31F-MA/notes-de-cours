import { Liquid } from "https://unpkg.com/liquidjs@9.25.1/dist/liquid.browser.esm.js";

export default class Router {
	#containerEl;
	#routes;
	#liquid;
	#currentUrl;

	/**
	 *
	 * @param {HTMLElement} containerEl - Élément HTML dans lequel sera inséré
	 * la nouvelle vue lors du changement de route.
	 * @param {Array} routes - Tableau de toutes les Routes de l'application.
	 */
	constructor(containerEl, routes) {
		this.#containerEl = containerEl;
		this.#routes = routes;

		// Instancie le moteur de gabarit Liquid.
		this.#liquid = new Liquid();

		this.#init();
	}

	/**
	 * Fonction d'initialisation du routeur.
	 */
	#init() {
		this.#loadView();

		// Attache un écouteur d'événement qui affiche la nouvelle vue lors de
		// la navigation dans l'historique.
		window.addEventListener("popstate", () => {
			this.#loadView();
		});

		this.#handleAnchors();

		// Permet aux lecteurs d'écran de notifier l'utilisateur lors de
		// l'actualisation du contenu dynamique.
		this.#containerEl.setAttribute("aria-live", "assertive");
	}

	/**
	 * Effectue le changement de route, et affiche la vue associée à la nouvelle
	 * route.
	 *
	 * @param {String} pathname - Chaîne de caractères contenant une barre
	 * oblique initiale '/' suivie du chemin de l'URL n'incluant pas la
	 * chaîne de requête ou le fragment.
	 */
	changeRoute(pathname) {
		history.pushState({}, "", pathname);

		this.#loadView();
	}

	/**
	 * Charge et affiche la vue de la route courante.
	 */
	async #loadView() {
		this.#currentUrl = new URL(window.location);
		const currentRoute = this.#matchRoute(this.#currentUrl.pathname);
		let html;

		try {
			const response = await fetch(currentRoute.view);
			const text = await response.text();

			// Transforme le Liquid en HTML.
			html = await this.#liquid.parseAndRender(text, {
				title: currentRoute.title,
			});
		} catch {
			// Si fetch ne trouve pas fichier pour la vue, affiche un message
			// d'erreur.
			html = "<h1>404</h1>";
		}

		// Remplace la vue précédente par la nouvelle.
		this.#containerEl.innerHTML = html;

		// Met le titre de la page à jour. Important pour l'accessibilité.
		document.title = currentRoute.title;

		this.#focusH1();
	}

	/**
	 * Met le focus sur l'élément <h1> de la page. Affiche un message d'erreur
	 * si la page ne contient pas de <h1> car c'est important pour
	 * l'accessibilité.
	 *
	 * @see https://a11y-guidelines.orange.com/en/articles/single-page-app/
	 *
	 */
	#focusH1() {
		try {
			const h1El = document.querySelector("main > h1");

			// Nécessaire pour pouvoir mettre le focus sur un <h1>.
			h1El.setAttribute("tabindex", "-1");
			h1El.focus();
		} catch {
			console.error(
				"Pour des raisons d'accessibilité, il devrait toujours y avoir un élément <h1> comme enfant de <main>."
			);
		}
	}

	/**
	 *
	 * @param {String} pathname - Chaîne de caractères contenant une barre
	 * oblique initiale '/' suivie du chemin de l'URL et qui n'inclut pas la
	 * chaîne de requête ou le fragment.
	 *
	 * @returns {Object} Objet contenant les propriétés de la Route.
	 */
	#matchRoute(pathname) {
		const matchedRoute = this.#routes.find(
			(route) => route.pathname === pathname
		);

		return matchedRoute;
	}

	/**
	 * Attache un écouteur d'événement qui empêche le chargement lors d'un
	 * clique sur n'importe quel <a> local de la page. Effectue ensuite le changement
	 * de route selon l'attribut `href` du <a> cliqué.
	 */
	#handleAnchors() {
		const body = document.querySelector("body");
		const hostname = this.#currentUrl.hostname;

		body.addEventListener("click", (event) => {
			// S'assure que la cible du clique est un élément d'ancre, et que le
			// lien est local (c'est-à-dire que le domaine du lien soit le même
			// que le domaine du présent site.)
			if (
				event.target.nodeName === "A" &&
				event.target.hostname === hostname
			) {
				event.preventDefault();

				const aEl = event.target;
				this.changeRoute(aEl.href);
			}
		});
	}
}
