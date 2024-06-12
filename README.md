# SortingVisualizer

## Objectif du Sorting Visualizer

L'objectif est de réaliser une interface interactive pour animer six différents algorithmes de tri, avec une coloration caractéristique et une brève description de l'algorithme en cours.

## Grandes Parties du Projet
1. Structurer la page web (HTML)
2. Ajouter du style (CSS)
3. Gérer les événements (JavaScript)

## Structuration du Projet

- Créer un fichier HTML unique `index.html` et un fichier CSS `style.css`.
- Créer un fichier JavaScript pour chaque fonction de tri (ex. `bubble_sort.js`).
- Créer une fonction `visualizer.js` qui contiendra toutes les fonctions nécessaires au bon fonctionnement du projet, à l'exception des fonctions de tri.
- Créer une fonction `main.js` qui gérera les événements.

# Fonctions Principales

|       Fonction	   |    Description
| -----------------    | -------------------------------------------------------------------------------------------------------------------------------
| random_generator()   | Prend le nombre d'éléments à trier, génère des entiers uniques aléatoirement [0-n[, les stocke dans un tableau et le retourne.
| random_display()	   | Prend en entrée le tableau des entiers à trier, crée des barres div de hauteur correspondant aux entiers et les ajoute au conteneur pour l'animation.
| update_sizeValue()   | Met à jour l'affichage du nombre d'entiers à trier.
| disable_buttons()	   | Désactive les boutons pendant l'exécution de l'animation.
| enable_buttons()	   | Active les boutons désactivés après l'exécution de l'animation.
| bar_stateUpdate()	   | Prend en paramètre: la barre (le div affiché), la hauteur de la barre et la couleur, puis met à jour la couleur et la hauteur de la barre avec un délai.
| swap()	           | Fonction utilitaire qui permet de changer la position de deux entiers dans le tableau barHeight et fait appel à la fonction bar_stateUpdate().
| speed_manager()	   | Gère les vitesses d'animation [1-5].
| ColorCode()	       | Affiche le code couleur utilisé pour l'algorithme de tri en cours.
| run_visualizer()	   | Désactive d'abord les boutons nécessaires, exécute l'animation du tri sélectionné et fait appel à la fonction ColorCode().
| update_select_sort() | Met à jour l'affichage de l'animation et du code couleur en fonction de l'algorithme de tri choisi.
| reset_visualizer()   | Permet d'arrêter l'exécution de l'algorithme.
| update_table_content() |	Crée et met à jour la section de description sur l'algorithme de tri sélectionné.
| update_learnMore()	| Gère l'affichage des informations supplémentaires sur l'algorithme.


## Contribution
Les contributions sont les bienvenues ! Créez une issue pour discuter des modifications avant de faire une pull request.
