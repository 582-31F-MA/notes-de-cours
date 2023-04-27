////////////////////////////////////////////////////////////////////////////////
// EXPORTER DES FONCTIONNALITÉS
//
// Il est possible d'exporter des fonctions, des variables (qu'elles soient
// définies avec var, let ou const) et aussi des classes (que nous verrons par
// la suite). Les valeurs exportées doivent être présentes au plus haut niveau
// du script, il n'est pas possible d'utiliser export dans une fonction.
//
//////////
// EXEMPLE

export const name = "square";

export function draw(ctx, length, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, length, length);

	return {
		length: length,
		x: x,
		y: y,
		color: color,
	};
}

//////////
// EXEMPLE
//
// Une méthode plus concise consiste à exporter l'ensemble des valeurs grâce à
// une seule instruction située à la fin du fichier : les valeurs sont séparées
// par des virgules et la liste est délimitée entre accolades.

export { today, displayToday };

const today = new Date();

function displayToday(today) {
	console.log(today);
}
