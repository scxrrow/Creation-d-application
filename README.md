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
- Angular cli + npm installés (`node -v`, `npm -v`)

> Conseil : utilise le **Maven Wrapper** du projet (`./mvnw`) pour éviter les différences de version Maven.

---

## Lancer le projet

### 1) Démarrer le backend (port 8080)

Depuis la racine du workspace :

```bash
cd backend
./mvnw spring-boot:run
```
ou
```bash
cd backend
mvn spring-boot:run
```


### 2) Démarrer le frontend (port 4200)

Dans un second terminal :

```bash
cd frontend
ng serve
```

---

## URLs utiles

- Frontend : http://localhost:4200
- API backend : http://localhost:8080
- Swagger UI :
	- http://localhost:8080/swagger-ui.html
	- ou http://localhost:8080/swagger-ui/index.html


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
ng serve
```

---

## Auteur

Projet réalisé dans le cadre d’un exercice **Spring Boot + Angular**.