# Web Application Project

## Dependencies

### Developer Tools

- **Lombok**: Simplifies Java code by automatically generating boilerplate code such as getters, setters, and constructors.
- **Spring Boot DevTools**: Enhances the development experience with features like automatic restarts, live reload, and configurations for development environments.

### Web

- **Spring Web**: Provides comprehensive support for building web applications, including RESTful services.
- **Rest Repositories**: Facilitates the creation of hypermedia-driven RESTful repositories.

### SQL

- **PostgreSQL Driver**: Enables connectivity to PostgreSQL databases.
- **Spring Data JPA**: Simplifies database access with JPA-based repositories.
- **JDBC API**: Allows for direct interaction with relational databases using JDBC.

### Security

- **Spring Security**: Provides robust authentication and authorization capabilities.
- **OAuth2 Authorization Server**: Implements OAuth2 protocols for secure and standardized authorization.



## REST API

### Add User

Endpoint: POST localhost:8080/api/users

Request Body:

```json
{
    "id": 1,
    "email": "a@a.pl",
    "password": "das",
    "id_user_details": 1,
    "id_role": 1
}
```
### Get User
Endpoint: GET localhost:8080/api/users/1

### Get All Users
Endpoint: GET localhost:8080/api/users

### Update User
Endpoint: PUT localhost:8080/api/users/2

Request Body:

```JSON
{
    "email": "c@c.pl",
    "password": "dddd",
    "id_user_details": 2,
    "id_role": 1
}
```
### Delete User
Endpoint: DELETE localhost:8080/api/users/3

## JWT token

### Registring user

Endpoint: POST localhost:8080/api/auth/register

Request body:

```json
{
    "username": "adam123",
    "email": "a@a.pl",
    "password": "das"
}
```

Response body:
```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5layIsImlhdCI6MTcxNzQyMjU3NywiZXhwIjoxNzE3NDI0MDE3fQ.6LZbGDWVnHLSgzKCiettfaue4eV6Rtywmn9NZDZbATU"
}
```

### Authenticating user

Endpoint: POST localhost:8080/api/auth/authorisation

Request body:

```json
{
    "email": "a@a.pl",
    "password": "das"
}
```

Response body:
```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5layIsImlhdCI6MTcxNzQyMjU3NywiZXhwIjoxNzE3NDI0MDE3fQ.6LZbGDWVnHLSgzKCiettfaue4eV6Rtywmn9NZDZbATU"
}
```


# Roadmap

**React app**
- componets
- conecting wit backend using axios
- React routing
- Adding models form and form validation
- 

# ZTPAI - notes

- musi być api miedzy front a backend
- dema, a kolejnymi progresscheckami, z góry nałozony czas na zadanie
- kolos: początek maja, z materiału wykładowoego do poprzednich wykładu, sala 151, delta
- prezentacja swojego projektu za tydzień 18.03, stworzone mocapy


- wybrany temat,
- technologie, w których aplikacja zostanie napisana (wyjaśnić, dlaczego zostały dobrane te
konkretne technologie),
- przykładowe prototypu,

(opcjonalnie)
- prezentacja struktury projektu, stworzonego szkieletu za pomocą frameworka,
podział na front, back
3-4 widoki
- prezentacja kodu,
kodu nie musi być,
- plan sprintów.
kiedy co bede chciał robić, w jakim czasie

lab02: 18.03

- rozne typy uzytkownika (admin,uzytownik)
- panel edycji danych uzytkownika
- jak będą wrzucane zdjęcia do bazy danych (czy link, czy zahashowane)
- iframe, apikey - wstawianie mapy

- eventy notifikacyjne: kafka

- React: przyszłościowo, reuzywalne komponenty
<<<<<<< HEAD
- done

- TODO: ogarnąć podsawy Reacta, spring boota i dokonczyć prezentacje

lab 25.03
- naastepne zajecia: 08.04 lub 15.04
- progress chceck: wiem co było w wytycznych, pokazujemy co w tym temacie zrobilismy, jesli jakis element nie został zrobiony to bedize o to pytanie, sami mamy ustalic kto kiedy przyjddzie
- done
