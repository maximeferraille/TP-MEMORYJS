# MM1 2021 TP JS

Le but de ce TP est de découvrir la programmation événementielle avec Javascript et JQuery en réalisant un "Memory".
Ce « repository » (dépôt) contient la base du projet projet que vous pouvez télécharger, forker ou cloner.

# Step 1

- Créer un fichier `assets/app.js` et utiliser la balise `script` pour le lier au fichier `index.html`.
- Ajouter `"use strict";` en tête de ce fichier.
- Implémenter la fonction `ready` de JQuery :
```js
$( document ).ready(function() {
  console.log("Hello there!");
});
```
- Ouvrir `index.html` et vérifier la présence de "Hello there!" dans la console du navigateur.
- L'environnement de travail est prêt, nous allons ajouter par la suite du code à la place du `console.log`.

# Step 2

- Jouez avec le sélecteur de JQuery `$`. Sélectionnez les cartes et loggez le résultat en console avec `console.log`.
- Utilisez la fonction `on` de JQuery et l'évènement `click` pour déclencher une action lorsque l'on clique sur une carte.
- Lorsque l'on clique sur une carte, retournez-la en ajoutant la class `show` à la div `card` sur laquelle on a cliqué. Pour cela il faut utiliser la fonction `addClass`.
- Lorsque l'on clique à nouveau sur cette carte, elle retrouve sa position initiale. Pour cela, utilisez `hasClass` et `removeClass`.
- Refactorisez votre code avec `toggleClass`.

# Step 3

- Pour comparer les cartes en fonction de leur valeur il faut stocker cette valeur quelque part. Utilisez des data attributes pour stocker les valeurs des cartes. Les valeurs des cartes seront des entiers (1, 2, 3...). Le but du jeu étant de trouver les paires de cartes, deux cartes identiques doivent avoir la même valeur.
- https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Utiliser_attributs_donnes
- Stockez les valeurs des cartes sur l'élément HTML `card` avec un data attribute `data-value="..."`.
- Utilisez `$` et et la fonction `data` de JQuery pour lire ces valeurs et les afficher en console avec `console.log`.

# Step 4

- Lorsque l'utilisateur clique sur deux cartes identiques, les laisser retournées.
- Lorsque l'utilisateur clique sur deux cartes différentes, les remettre dans leur position initiale au bout de quelques secondes avec la fonction `setTimeout`.

# Step 5

- Régler les différents problèmes qui se posent si :
  - L'utilisateur clique deux fois sur la même carte ou sur une carte déjà retournée.
  - L'utilisateur clique sur une autre carte pendant le temps d'attente imposé par `setTimeout`.
Pour cela, utiliser `hasClass` et/ou `unbind`. Vous pouvez également refactoriser votre code pour éviter les répétitions en utilisant des fonctions.

# Step 6

- Compter et afficher en dessous du plateau le nombre de paires à trouver restantes.
