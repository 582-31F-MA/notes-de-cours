# Introduction au gestionnaire de paquets NPM

`npm` est le gestionnaire de paquets standard pour Node.js. Il permet de **télécharger**, de **mettre à jour**, et de **gérer la version** de paquets. Il permet aussi d'**exécuter des tâches** prédéfinies à l'aide de la commande `npm run <nom-de-la-tâche>`.

## Qu'est-ce que Node.js ?

Node.js est un **environnement d'exécution** qui permet d'utiliser Javascript en dehors du navigateur. Il permet d'exécuter des scripts Javascript à partir de la ligne de commande. Il est déployé, entre autres, pour créer des serveurs Web, ce qui permet d'utiliser le même langage de programmation côté client et côté serveur Beaucoup d'outils de développement Web utilise également Node.js pour transformer ou compiler du code Javascript directement sur votre ordinateur.

## Qu'est-ce qu'un « paquet » ?

Un **paquet** est un dossier contenant un fichier `package.json`. Il contient généralement un ensemble de **modules** pouvant être importés dans votre programme, soit avec la function `require()` (pour les modules CommonJS), soit avec le mot clé `import` (pour les modules ECMAScript).

## Qu'est-ce qu'un fichier `package.json` ?

Un fichier `package.json` est un fichier JSON qui :

-   répertorie les paquets dont **dépend** un projet
-   spécifie la **version** des paquets que le projet peut utiliser
-   rend **reproductible** le processus de compilation d'un projet

### Exemple

```json
{
	"name": "my-awesome-package",
	"version": "1.0.0",
	"author": "Your Name <email@example.com>"
}
```

### La commande `npm init`

La commande `npm init` permet de créer un nouveau fichier `package.json` en répondant à une série de question.

## Installation de paquets

Pour installer un paquet publié dans le [registre NPM](https://www.npmjs.com), il suffit d'exécuter la commande `npm install <nom-du-paquet>` ou `npm i <nom-du-paquet>`. Le paquet ainsi que les autres paquets duquel celui-ci dépend seront alors automatiquement téléchargés et placés dans un dossier nommé `node_modules`.

Vous verrez souvent d'autres drapeaux ajoutés à cette commande :

-   `--save-dev` installe et ajoute l'entrée au fichier `package.json` sous `devDependencies`[^1]
-   `--no-save` installe mais n'ajoute pas l'entrée au fichier `package.json`
-   `--save-optional` installe et ajoute l'entrée au fichier `package.json` sous `optionalDependencies`[^2]
-   `--no-optional` empêche l'installation des dépendances optionnelles

[^1]: La différence entre `devDependencies` et `dependencies` est que le premier contient des outils de développement, comme une bibliothèque de test, tandis que le second est fourni avec l'application en production.
[^2]: Quant à `optionalDependencies`, les paquets qui y sont listés sont optionnels. Leur absence ne fera pas échouer l'installation.

Si un fichier `package.json` contenant une liste de dépendances se trouve à la racine de votre répertoire, alors la commande `npm install` installera tous les paquets listés.

Par exemple :

```json
{
	"name": "mon-super-projet",
	"version": "1.0.0",
	"main": "main.js",
	"author": "maxime-pigeon",
	"dependencies": {
		"express": "^4.18.2"
	},
	"devDependendies": {
		"jest": "^29.5"
	}
}
```

## Exécution de tâches

Le fichier `package.json` peut aussi spécifier des tâches en ligne de commande qui peuvent être exécutées à l'aide de la commande `npm run <task-name>`.

Par exemple :

```json
{
	"scripts": {
		"start-dev": "node lib/server-development",
		"start": "node lib/server-production"
	}
}
```

## La commande `npx`

La commande `npx` permet d'exécuter un paquet sans avoir à installer celui-ci sur votre ordinateur.

Par exemple :

```sh
npx @11ty/eleventy
```

## Ressources

-   https://nodejs.dev/fr/learn/
-   https://nodejs.dev/fr/learn/an-introduction-to-the-npm-package-manager/
