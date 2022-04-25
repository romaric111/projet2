# Dossier d'achitecture de notre projet 
***
Nous avons découpé l’architecture en trois volets (sécurité, infrastructure et développement), chaque volet étant auto-porteur.

# Volet developpement
Présentant l’architecture logicielle et son environnement.
Ceci est le point de vue développement de l’application. Il décrit le code à produire et comment l’écrire.
***
On devra ecrire un code `index.js` qui permettra la connexion a notre serveur `node` 
Puis on aura un code `client.js` qui decrira toutes les actions a faire par le User web 
Et enfin le code pour la page de visualisation de toute notre application qui sera `index.html`
Aussi Toutes les données, la clef privée et le carnet d'adresses, vont être sauvegardées en utilisant ["localStorage"]; Dans le cas où la clé privée n'existe pas encore, le client devrait la générer.


### volet infrastucture
Ceci est le point de vue infrastructure de l’application. Il décrit le déploiement des modules applicatifs dans leur environnement d’exécution cible et l’ensemble des dispositifs assurant leur bon fonctionnement.
***
1. Persistance des données en utilisant module `fs` de `nodejs`

Pour faire marcher un serveur de courriel on fera:

	> npm install
	> node ./index.js

Une page à l'adresse <http://localhost:3333/index.html> devrait être
disponible. On doit ouvrir `Console` du navigateur pour voir les
messages de client (java-script `public/client.js`).

Le serveur `./index.js` store les messages envoyés par le client dans
la variable `lettres`. Malheureusement, à chaque démarrage du serveur,
le contenu de la variable va disparaitre.

Pour remédier à ce problème, on sauvegarde le contenu
de la variable dans un fichier `lettres.json` (en format `JSON`) soit
à chaque changement de la variable `lettres`, soit périodiquement, par
exemple, toutes les 30 seconds.

Il faudra aussi modifier le code pour pouvoir initialiser la variable
`lettres` au démarrage du programme, si le fichier `lettres.json`
existe déjà.

Pour effectuer le travail, on modifie le code
`./index.js` et d'utiliser le module [File
system](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html) de
`nodejs` avec les deux fonctions suivantes:

* [fs.readFileSync](https://nodejs.org/dist/latest-v16.x/docs/api/all.html#all_fs_fsreadfilesyncpath-options)

* [fs.writeFile](https://nodejs.org/dist/latest-v16.x/docs/api/all.html#all_fs_fswritefilefile-data-options-callback)

2. Dans notre fichier `client.js` on definira des methodes `POST/addletter` pour envoyer des messages puis pour chercher des messages 
ou la liste des messages on devra creer une methode `GET/getletters`
3. Dans notre fichier `index.js` on definira les methodes du serveurs telles que `GET/getletters` pour partager des messages et `GET/peers` 
qui partagera la liste des des pairs en utilisant [http-get-json.]
4. Pour persister (sauvegarder) les messages, le serveur pourra utiliser [json-file-object.]
5.  Pour lier les requetes `index.js` et `client.js` on utilisera des instructions comme `fetch` pour lier les requetes et executer l'action a effectuer puis aussi des instructions tels que `THEN` & `CATCH` qui nous permettra de gerer les exceptions ou erreurs.
***

#### volet sécurité
Ceci est le point de vue sécurité. Il décrit l’ensemble des dispositifs mis en œuvre pour empêcher l’utilisation non-autorisée, le mauvais usage, la modification illégitime ou le détournement des modules applicatifs.

1. Pour la securite on utilisera un systeme de [cryptographie-asymetrique] de tel maniere qu'avant chaque envoie de message le client web
 devra encrypter son message a laide de la [clé-publique-du-destinateur.] et le decrypter pour lire un message envoyer. Pour se faire on 
 utilisera la librairie `forge` pour creer des fonctions d'encryptages et decryptages et pour c=se faire on installera le module [node-forge] 
 et puis on installera le fichier[forge.min.js].




