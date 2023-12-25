# ARGENT BANK (with Create React App)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


![Capture d'écran 2023-12-21 012554](https://github.com/afarkhsi/ArgentBank/assets/57017179/847b1c53-9ab4-4a56-8241-d43ef0954f8e)


Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application. 

### Objectif

- Créer l’application web complète et responsive avec React
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
- Transactions - Spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois l'objectif précedent validé.

## Installation

### Prérequis

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Installation du serveur back-end

- Forker puis cloner le repository à l'adresse suivante :
  `git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API`
- La commande `npm` vous permettra d'installer les dépendances liée à ce repository et par la suite de lancer l' API :

```bash
  # Install dependencies
  npm install
  
  # Start local dev server
  npm run dev:server
  
  # Populate database with two users
  npm run populate-db
```
- Une fois lancée le script `populate-db`, vous devriez desormais voir deux utilisateurs dans la database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

- La micro API est lancée sur `http://localhost:3001`
- La documentation de l'API est disponible à cette adresse `http://localhost:3001/api-docs`

### Installation du front-end

- Forker puis cloner le repository à l'adresse suivante :
  `git clone https://github.com/afarkhsi/ArgentBank.git`
- La commande `npm` vous permettra d'installer les dépendances liée à ce repository
- La commande `npm start` vous permettra par la suite de lancer l'application.
- ARGENT BANK est lancée sur `http://localhost:3000`

