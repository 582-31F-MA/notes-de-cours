////////////////////////////////////////////////////////////////////////////////
// PROGRAMMATION ORIENTÉE OBJET ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// La programmation orientée objet est un paradigme de programmation fondamental
// pour de nombreux langages de programmation, dont Java et C++. Elle est basée
// sur 3 concepts :
//
// - les classes et instances
// - l'héritage
// - l'encapsulation

////////////////////////////////////////////////////////////////////////////////
// CLASSES ET INSTANCES
//
// Lorsqu'on modélise un problème sous la forme d'objets, on crée des
// définitions abstraites qui représentent les types d'objet qui existent dans
// le système.
//
// On utilise des classes lorsqu'on souhaite créer des objets qui stockent leurs
// propres données, et exposent des fonctionnalités liées à celles-ci.
//
///////////////////////////////
// EXEMPLE DÉFINITION DE CLASSE
//
// Par exemple, si on modélise une école, on pourra avoir des objets pour
// représenter les enseignants.
//
// Les enseignants auront certaines caractéristiques communes :
//
// - un nom
// - un sujet d'enseignement
//
// De plus, chaque enseignant pourra réaliser des actions similaires :
//
// - se présenter au début de l'année
// - noter un devoir
//
// Toute seule, une classe ne fait rien. Il s'agit d'un *modèle* pour créer des
// objets. Chaque enseignant qu'on créera à partir de ce modèle sera appelé une
// *instance* de la classe Enseignant.
//
// Le processus de création d'une instance est réalisé par une fonction spéciale
// appelée *constructeur*. On passera des valeurs au constructeur pour
// initialiser l'état interne de l'instance.

class Enseignant {
	// propriétés (facultatif)
	nom;
	sujet;

	// constructeur
	constructor(nom, sujet) {
		this.nom = nom;
		this.sujet = sujet;
	}

	// méthodes
	sePresenter() {
		return `Mon nom est ${this.nom} et j'enseigne le ${this.sujet}.`;
	}
	noter() {
		return "100%";
	}
}

const maxime = new Enseignant("Maxime", "design");
const juliette = new Enseignant("Juliette", "français");

////////////////////////////////////////////////////////////////////////////////
// HÉRITAGE
//
// Imaginons qu'on veuille également représenter les étudiants dans notre
// système. À la différence des enseignants, un élève :
//
// - ne peut pas noter de devoirs,
// - n'enseigne pas une matière donnée
// - mais il appartient à une promotion d'une année donnée
//
// Les élèves ont également :
//
// - un nom
// - et peuvent aussi se présenter
//
// Il serait utile de représenter le fait que les élèves et enseignants
// partagent des caractéristiques. En fait, il s'agit à un certain niveau du
// même type de choses. C'est là que l'héritage entre en jeu.
//
//////////
// EXEMPLE
//
// On peut déjà observer que les élèves et enseignants sont des personnes et que
// les personnes ont un nom et peuvent se présenter. On peut alors modifier
// notre modèle en définissant une nouvelle classe, `Personne`, où on définit les
// propriétés communes à toutes les personnes.

class Personne {
	// propriété (facultatif)
	#nom;

	// constructeur
	constructor(nom) {
		this.#nom = nom;
	}

	// méthode
	sePresenter() {
		return `Je m'appelle ${this.#nom}.`;
	}
}

const roger = new Personne("Roger");

// Ensuite, les deux classes `Enseignant` et `Eleve` peuvent *dériver* de la
// classe `Personne`, et ajouter leurs propriétés supplémentaires
//
// Le mot clé `super()` (dans le sens de « au-dessus ») est utilisé pour appeler
// le constructeur de la surclasse (ou classe parente) `Personne`, et lui passer
// l'argument `nom`.
//
// On peut également redéfinir la méthode `sePresenter()` seulement pour les
// élèves. Cette fonctionnalité où une méthode possède le même nom mais
// différentes implémentations dans différentes classes est appelée
// *polymorphisme* (du grec polu- « plusieurs » et morphê « forme »). Lorsqu'une
// méthode d'une classe enfant remplace l'implémentation de sa classe parente,
// on dit qu'elle *surcharge* la version de la classe parente.

class EleveV1 extends Personne {
	// propriétés (facultatif)
	annee;

	// constructeur
	constructor(nom, annee) {
		super(nom);
		this.annee = annee;
	}

	// méthode
	sePresenter() {
		return `Je m'appelle ${this.nom} et je suis en ${this.annee}e.`;
	}
}

class ProfesseurV2 extends Personne {
	// propriétés (facultatif)
	sujet;

	// constructeur
	constructor(nom, sujet) {
		super(nom);
		this.sujet = sujet;
	}

	sePresenter() {
		return `Je m'appelle ${this.nom} et j'enseigne le ${this.sujet}.`;
	}
}

const william = new EleveV1("William", 5);
const bob = new ProfesseurV2("Bob", "génie");

////////////////////////////////////////////////////////////////////////////////
// ENCAPSULATION
//
// Un objet fourni une interface au reste du code tout en maintenant son propre
// état interne. L'état interne d'un objet est *privé* -- c'est-à-dire qu'il
// peut uniquement être manipulé par les méthodes de l'objet, et non pas par
// celles des autres objets.
//
// Séparer l'état privé interne d'un objet et son interface publique est ce
// qu'on appelle l'*encapsulation*.
//
// Cela permet de modifier l'implémentation interne d'un objet sans avoir à
// identifier et à modifier le reste du code qui l'utilise. On a ainsi un
// pare-feu entre l'objet et le reste du système.
//
//////////
// EXEMPLE
//
// Disons que les élèves ne sont autorisés à étudier le tir à l'arc qu'à partir
// de la deuxième année. On pourrait implémenter cette règle en exposant la
// propriété `année` pour que le code externe puisse la consulter et décider si
// l'élève peut s'inscrire au cours.

if (william.annee > 2) {
	// Autorisé à étudier le tir à l'arc
}

// Si on décide de changer le critère d'autorisation (par exemple en demandant
// la permission d'un parent), il faudrait alors mettre à jour tous les endroits
// du code qui réalisent ce test.
//
// Mieux vaut avoir une méthode `peutEtudierTirArc()` sur les objets `Eleve`.
// Ainsi, si on change les règles pour l'accès à ce cours, il suffira de mettre
// à jour la classe `Eleve` et le reste du code qui l'utilise continuera de
// fonctionner.
//
// On peut même empêcher l'accès à l'état interne de notre objet en marquant
// certaines propriétés et méthodes comme étant privées. En Javascript, les
// membres privés d'un objet sont précédés d'un croisillon `#`.

class EleveV2 extends Personne {
	// propriétés (facultatif)
	#annee;

	// constructeur
	constructor(nom, annee) {
		super(nom);
		this.#annee = annee;
	}

	// méthodes
	sePresenter() {
		return `Je m'appelle ${this.nom} et je suis en ${this.#annee}e.`;
	}
	peutEtudierTirArc() {
		return this.#annee > 2;
	}
}

const ginette = new EleveV2("Ginette", 1);

////////////////////////////////////////////////////////////////////////////////
// ACCESSEUR ET MUTATEUR
//
// Comment accéder ou mettre à jour une propriété en respectant le principe
// d'encapsulation ? En utilisant des *accesseurs* (une méthode qui permet de
// récupérer la valeur d'une propriété donnée) et des *mutateurs* (une méthode
// qui permet de définir la valeur d'une propriété donnée).
//
//////////
// EXEMPLE
//
// Ainsi, on utilisera un mutateur pour permettre au code externe de mettre à
// jour la propriété privée `#annee`, sans pour autant y accéder directement.
//
// En utilisant un mutateur, il sera facile, dans le futur, d'ajouter une
// validation à notre code.

class EleveV3 extends Personne {
	// propriétés (facultatif)
	#annee;

	// constructeur
	constructor(nom, annee) {
		super(nom);
		this.#annee = annee;
	}

	// méthodes
	sePresenter() {
		return `Je m'appelle ${this.nom} et je suis en ${this.#annee}e.`;
	}
	peutEtudierTirArc() {
		return this.#annee > 2;
	}
	// mutateur
	set mettreAJourAnnee(nouvelleAnnee) {
		// validation
		if (nouvelleAnnee > this.#annee) {
			this.#annee = nouvelleAnnee;
		}
		return this.#annee;
	}
}

const constance = new EleveV3("Constance", 1);

////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/
//   Object-oriented_programming
// - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/
//   Classes_in_JavaScript
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/
//   Working_with_objects
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/
//   Using_classes
// - https://getkirby.com/docs/cookbook/templating/understanding-oop
