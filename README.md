# Student Management & Contact Management REST API

A beginner-friendly REST API built using **Node.js**, **Express.js**, and **MongoDB** featuring authentication, JWT-based authorization, Student Management, and Contact Management.

---

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- JWT Verification Middleware
- Joi Validation
- SMTP Email Integration

### Student Management
- Create Student
- Get All Students
- Get Student by ID
- Update Student
- Delete Student

### Contact Management
- Create Contact
- Get All Contacts
- Get Contact by ID
- Update Contact
- Delete Contact

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Joi
- Nodemailer
- dotenv
- Postman

---

## Project Structure

```
project/
│
├── config/
│
├── controllers/
│   ├── auth.controller.js
│   ├── student.controller.js
│   └── contact.controller.js
│
├── middleware/
│   └── verifyToken.js
│
├── models/
│   ├── User.js
│   ├── Student.js
│   └── Contact.js
│
├── routes/
│   ├── auth.js
│   ├── student.js
│   └── contact.js
│
├── validators/
│   ├── student.validator.js
│   └── contact.validator.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

Move into the project

```bash
cd your-repository
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=Your MongoDB Connection String

JWT_SECRET=YourSecretKey

SMTP_USER=Your SMTP Username

SMTP_PASS=Your SMTP Password
```

Start the server

```bash
npm run dev
```

or

```bash
node index.js
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /auth/register | Register User |
| POST | /auth/login | Login User |

---

### Student APIs

| Method | Endpoint |
|---------|----------|
| POST | /student |
| GET | /student |
| GET | /student/:id |
| PUT | /student/:id |
| DELETE | /student/:id |

---

### Contact APIs

| Method | Endpoint |
|---------|----------|
| POST | /contact |
| GET | /contact |
| GET | /contact/:id |
| PUT | /contact/:id |
| DELETE | /contact/:id |

---

## Authentication

Protected routes require a JWT token.

Example Header

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## Validation

Input validation is implemented using **Joi** before storing data in MongoDB.

---

## Testing

All endpoints were tested using **Postman**.

---

## Learning Outcomes

This project helped me learn:

- REST API Development
- Express Routing
- MVC Project Structure
- MongoDB & Mongoose
- CRUD Operations
- JWT Authentication
- Password Hashing
- Middleware
- Joi Validation
- API Testing with Postman

---

## Future Improvements

- Search API
- Sorting
- Role-based Authorization (Admin/User)
- Pagination
- Refresh Tokens
- File Uploads

---

## Author

**Kavya Maurya**

Backend Developer | Full Stack Learner