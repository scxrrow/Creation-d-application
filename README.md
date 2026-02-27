# Projet Bibliothèque — Spring Boot + Angular

Application full-stack de gestion de livres avec :
- **Backend** : Spring Boot (API REST)
- **Frontend** : Angular
- **Base de données** : H2 en mémoire
- **Documentation API** : Swagger / OpenAPI

---

## Fonctionnalités

- Lister tous les livres
- Récupérer un livre par ID
- Créer un livre
- Mettre à jour un livre
- Supprimer un livre

---

## Stack technique

### Backend
- Java (recommandé : **21+**)
- Spring Boot 4
- Spring Data JPA
- H2 Database
- springdoc-openapi (Swagger UI)
- Maven Wrapper (`./mvnw`)

### Frontend
- Angular 21
- TypeScript
- npm

---

## Structure du projet

```text
SpringBoot Angular/
├── backend/    # API REST Spring Boot
└── frontend/   # Application Angular
```

---

## Prérequis

- Java installé (`java -version`)
- Node.js + npm installés (`node -v`, `npm -v`)

> Conseil : utilise le **Maven Wrapper** du projet (`./mvnw`) pour éviter les différences de version Maven.

---

## Lancer le projet

### 1) Démarrer le backend (port 8080)

Depuis la racine du workspace :

```bash
cd backend
./mvnw spring-boot:run
```

Alternative depuis la racine sans `cd` :

```bash
mvn -f backend/pom.xml spring-boot:run
```

### 2) Démarrer le frontend (port 4200)

Dans un second terminal :

```bash
cd frontend
npm install
npm start
```

---

## URLs utiles

- Frontend : http://localhost:4200
- API backend : http://localhost:8080
- Swagger UI :
	- http://localhost:8080/swagger-ui.html
	- ou http://localhost:8080/swagger-ui/index.html
- Console H2 : http://localhost:8080/h2-console

---

## Endpoints principaux

Base URL : `http://localhost:8080/api/books`

- `GET /api/books` → liste tous les livres
- `GET /api/books/{id}` → récupère un livre
- `POST /api/books` → crée un livre
- `PUT /api/books/{id}` → met à jour un livre
- `DELETE /api/books/{id}` → supprime un livre

### Exemple de payload JSON

```json
{
	"title": "Le Petit Prince",
	"author": "Antoine de Saint-Exupéry",
	"year": 1943,
	"category": "Roman"
}
```

---

## Configuration base de données (H2)

Le backend utilise une base H2 en mémoire :
- URL JDBC : `jdbc:h2:mem:testdb`
- User : `sa`
- Mot de passe : *(vide)*

La base est recréée au redémarrage de l’application.

---

## Commandes utiles

### Backend

```bash
cd backend
./mvnw clean compile
./mvnw test
./mvnw spring-boot:run
```

### Frontend

```bash
cd frontend
npm start
npm run build
npm test
```

---

## Dépannage rapide

### Erreur Maven : `No plugin found for prefix 'spring-boot'`

Tu lances la commande depuis le mauvais dossier.

Utilise :

```bash
cd backend && ./mvnw spring-boot:run
```

ou :

```bash
mvn -f backend/pom.xml spring-boot:run
```

### Swagger ne s’affiche pas

- Vérifie que le backend tourne sur le port `8080`
- Teste les deux URLs :
	- `/swagger-ui.html`
	- `/swagger-ui/index.html`

---

## Auteur

Projet réalisé dans le cadre d’un exercice **Spring Boot + Angular**.