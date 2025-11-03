
---

```markdown
# 🏨 Node.js Hotel API

A secure **Hotel Management API** built with **Node.js**, **Express.js**, and **MongoDB**.  
This API allows users to perform CRUD operations on hotel menus — **create**, **read**, **update**, and **delete** — with **authentication** and **password protection** using **Passport.js** and **bcrypt.js**.

---

## 🚀 Features

- 🔐 **User Authentication** using Passport.js (Local Strategy)
- 🔒 **Password Hashing** with bcrypt.js
- 📋 **CRUD Operations** on Menu Items
- 🗂️ **MongoDB Integration** using Mongoose
- ⚙️ **Environment Variables** with dotenv
- 🧠 **Protected Routes** (only authenticated users can access `/menu`)
- 🔄 **RESTful API Design**

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Node.js** | Server runtime |
| **Express.js** | Web framework |
| **MongoDB + Mongoose** | Database & ODM |
| **Passport.js (Local Strategy)** | Authentication |
| **bcrypt.js** | Password encryption |
| **dotenv** | Environment variables |
| **body-parser** | Parsing request bodies |
| **Lodash** | Utility functions |
| **Nodemon** | Auto server restart during development |

---

## 📁 Project Structure

```

📦 hotel-api
┣ 📂 auth
┃ ┗ auth.js              # Passport configuration (local strategy)
┣ 📂 models
┃ ┗ menuModel.js         # MongoDB schema for menu items
┣ 📂 routes
┃ ┗ menuRoutes.js        # Routes for menu CRUD operations
┣ 📜 db.js                # Database connection setup
┣ 📜 server.js            # Entry point of the app
┣ 📜 package.json         # Dependencies and scripts
┣ 📜 .gitignore           # Ignored files for Git

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/hotel-api.git
cd hotel-api
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 4️⃣ Start the Server

```bash
npm start
```

Server will run on:
👉 `http://localhost:5000`

---

## 🔑 Authentication

The app uses **Passport.js (Local Strategy)** to authenticate users.

### 🔹 Register a new user

**POST** `/register`

```json
{
  "username": "john_doe",
  "password": "mypassword"
}
```

### 🔹 Login

**POST** `/login`

```json
{
  "username": "john_doe",
  "password": "mypassword"
}
```

After login, you will get an authenticated session and can access protected routes.

---

## 🍽️ Menu API Endpoints

| Method     | Endpoint    | Description    | Auth Required |
| ---------- | ----------- | -------------- | ------------- |
| **GET**    | `/menu`     | Get all menus  | ✅ Yes         |
| **POST**   | `/menu`     | Add a new menu | ✅ Yes         |
| **PUT**    | `/menu/:id` | Update a menu  | ✅ Yes         |
| **DELETE** | `/menu/:id` | Delete a menu  | ✅ Yes         |

---

## 🔒 Security

* Passwords are **hashed** using `bcrypt.js` before saving.
* Routes are **protected** using Passport’s `isAuthenticated()` middleware.
* CSRF protection and validation can be added for extra safety.

---

## 🧠 Example Request (with Auth)

```bash
# Login
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"1234"}'

# Get Menus (after login)
curl -X GET http://localhost:5000/menu \
  -b cookie.txt -c cookie.txt
```

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Adityam Kumar**
💻[Portfolio](https://adityakumar6383.netlify.app/)
💻 Built with ❤️ using Node.js & Express.js

---

### 🌟 If you like this project, give it a ⭐ on GitHub!

```

---

Would you like me to include a **“Postman Collection” section** (with example API requests for testing `/register`, `/login`, and `/menu` routes)? It makes your README more complete and professional for portfolio projects.
```
