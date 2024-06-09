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

### Messaging
- **Spring for RabbitMQ**
- **AMPQ**

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


## Database

### ERD Diagram

![alt text](image.png)


### Relationships

- **artist** and **song**:
  - One-to-Many: Each artist can have multiple songs. The relationship is established by the `artist_id` foreign key in the `song` table referencing the `id` in the `artist` table.

- **category** and **song**:
  - One-to-Many: Each category can have multiple songs. The relationship is established by the `category_id` foreign key in the `song` table referencing the `id` in the `category` table.

- **users** and **rating**:
  - One-to-Many: Each user can give multiple ratings to different songs. The relationship is established by the `user_id` foreign key in the `rating` table referencing the `id` in the `users` table.

- **song** and **rating**:
  - One-to-Many: Each song can receive multiple ratings from different users. The relationship is established by the `song_id` foreign key in the `rating` table referencing the `id` in the `song` table.

- **users** and **profile**:
  - One-to-One: Each user has a single profile. The relationship is established by the `user_id` foreign key in the `profile` table referencing the `id` in the `users` table.

- **users** and **favourite**:
  - Many-to-Many: Users can have multiple favorite songs, and each song can be a favorite of multiple users. This relationship is managed by the `favourite` table, where `user_id` references the `id` in the `users` table and `song_id` references the `id` in the `song` table.

- **song** and **favourite**:
  - Many-to-Many: Songs can be favorited by multiple users, and each user can have multiple favorite songs. This relationship is managed by the `favourite` table, where `song_id` references the `id` in the `song` table and `user_id` references the `id` in the `users` table.


## RabbitMQ

**Starting container**
```json
docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3.13.3-management
```

**Sending message**

http://localhost:8080/api/publish?message=Hello

**Reciving message**

![alt text](image-1.png)


## Swagger


http://localhost:8080/swagger-ui/index.html
