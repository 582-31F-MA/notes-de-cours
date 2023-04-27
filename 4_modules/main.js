////////////////////////////////////////////////////////////////////////////////
// LES MODULES JAVASCRIPT //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// À mesure que votre site Web grandit en volume et en complexité, il peut être
// pratique de subdiviser votre code en plusieurs petits morceaux. Voilà à quoi
// servent les modules Javascript.

////////////////////////////////////////////////////////////////////////////////
// EXPORTER DES FONCTIONNALITÉS
//
// Afin d'utiliser les fonctionnalités d'un module, on doit les exporter. Pour
// cela, on utilisera l'instruction `export`.
//
// La méthode la plus simple consiste à placer cette instruction devant chaque
// valeur qu'on souhaite exporter.
//
//////////
// EXEMPLE
//
// Voir le fichier `export.js` dans le dossier `module`.

////////////////////////////////////////////////////////////////////////////////
// IMPORTER DES FONCTIONNALITÉS
//
// Lorsque des fonctionnalités sont exportées par un premier module, on peut les
// importer dans un script afin de les utiliser.
//
// On utilise l'instruction `import`, suivie d'une liste d'identifiants séparés
// par des virgules et délimitée par des accolades, suivie du mot-clé `from`
// puis du chemin vers le fichier du module. Le chemin est relatif à la racine
// du site.
//
//////////
// EXEMPLE

import { name, draw } from "./modules/export.js";

// Une fois les fonctionnalités importées dans le script, vous pouvez utiliser
// les valeurs dans votre script.

console.log(name);

////////////////////////////////////////////////////////////////////////////////
// DIFFÉRENCES ENTRE LES MODULES ET LES SCRIPTS « CLASSIQUES »
//
// Les instructions `import` et `export` ne peuvent être utilisées qu'à
// l'intérieur de modules et pas depuis des scripts classiques. Il est
// nécessaire d'indiquer `type="module"` dans l'élément `<script>` afin
// d'indiquer qu'on charge des modules.
//
// Il y a quelques différences entre un module et un script classique :
//
// - Attention aux tests sur un environnement local : il faut un serveur local
//   afin de pouvoir tester.
// - Les modules utilisent automatiquement le mode strict.
// - Il n'est pas nécessaire d'utiliser l'attribut defer lors du chargement d'un
//   module, celui-ci étant automatiquement différé.
// - Les modules sont exécutés une seule fois, même s'ils sont référencés dans
//   plusieurs balises <script>.
// - Enfin, les fonctionnalités importées ne sont disponibles qu'au sein de la
//   portée du script qui les utilise. Elles ne sont pas rattachées à la portée
//   globale. On ne pourra par exemple pas y accéder depuis la console
//   JavaScript.

////////////////////////////////////////////////////////////////////////////////
// EXPORTS PAR DÉFAUT ET EXPORTS NOMMÉS
//
// Jusqu'à présent, nous avons utilisé des *exports nommés* — chaque valeur est
// exportée avec un nom et c'est ce nom qui est également utilisé lorsqu'on
// réalise l'import.
//
// Il existe également un export *par défaut* conçu pour simplifier l'export
// d'une fonction par module.
//
//////////
// EXEMPLE
//
// Voir le fichier `default` dans le dossier `module`.

import salutation from "./modules/default.js";

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules
// - https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules
