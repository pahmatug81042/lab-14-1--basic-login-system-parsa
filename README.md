# Basic Login System - Innovate Inc.

A simple and secure authentication API built with **Node.js**, **Express**, **MongoDB**, **bcrypt**, and **JWT**. This backend service provides core user registration and login functionality with password hashing and token-based authentication.

---

## Overview

This project implements the fundamental authentication endpoints for Innovate Inc.’s user portal, enabling:

- User registration with hashed passwords for security
- User login with credential validation
- JWT issuance for session management
- Secure storage of sensitive configuration with environment variables

---

## Key Features

- Password hashing using bcrypt before storing user passwords
- JWT-based authentication with tokens containing non-sensitive user info
- Validation to prevent duplicate user registrations by email
- Clear error handling with meaningful response messages
- Modular architecture separating routes, controllers, and models
- Environment-based configuration for secrets and database connection

---

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB (Atlas)**
- **Mongoose**
- **bcrypt**
- **jsonwebtoken**
- **dotenv**

---

## API Endpoints (High-Level)

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| POST   | `/api/users/register` | Register a new user          |
| POST   | `/api/users/login`    | Authenticate user and get JWT |

---

## Security Highlights

- Passwords hashed securely with bcrypt before storage  
- JWT tokens include only non-sensitive user information (`_id`, `username`)  
- Sensitive configuration such as database URI and JWT secret are stored securely in environment variables (`.env`)

---

## Error Handling

Common error responses include:

- `400 Bad Request` — validation errors, duplicate registrations, incorrect credentials  
- `500 Internal Server Error` — unexpected server issues  

All error responses provide clear JSON messages for ease of debugging and client-side handling.

---

## Best Practices Followed

- Clear separation of concerns: Models, Controllers, Routes  
- Use of async/await for asynchronous code  
- Consistent RESTful API design and appropriate HTTP status codes  
- Secure management of secrets and configuration with `.env`  
- Modular and scalable architecture to support future growth

---

## Next Steps

This authentication foundation enables:

- Adding protected routes requiring JWT verification  
- Expanding user profile and role management functionality  
- Integrating with frontend clients for a complete application experience  
- Implementing advanced security features such as password reset and email verification  

---