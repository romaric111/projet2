# Communication d'un mini-serveur avec un client web
***
Ce projet est une application de messagerie peers to peers qui gere la communication entre un client web et un serveur.

# Presentation des cas d'utilisation pour ce projet
***
## Systeme etudie: `Gestion de la communication d'une APP de messagerie` 

### Listes des acteurs
User web & Mini-Server 
***

#### Les differents cas d'utilisation de ce systeme 
* User web se connecte, envoie et recois des sms.
* User web crypte le sms avant l'envoie  et decrypte pour le lire le tout avec la technologie `RSA`.
* L'envoi du sms par le user web necessite l'utilisation de de la methode `POST/AddLetters`.
* Mini-server collecte tous les sms.
* User web utilise une `Public key` pour encrypter et decrypter.
* Mini-server  recoit le sms de 02 manieres:
1. [client]
2. [Synchronisation-avec-un-peers]
* User web  communique avec Mini-server avec la technologie `AJAX(REST)`
* User web pour chercher un message dans le mini-server doit utiliser une methode `GET/getletters`
* Mini-server envoie tous les sms encryptes 
* Mini-server supporte 02 types de requete 
1. [share-sms-via-GET/getletters]
2. [share-list-of-pairs-via-Get/peers]
