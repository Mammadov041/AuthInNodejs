# User Authentication API

A RESTful API built with **Node.js**, **Express**, **MongoDB**, and **JWT** for user authentication and authorization using access and refresh tokens stored in HTTP-only cookies.

## 🔧 Features

- JWT-based Authentication (Access + Refresh tokens)
- Cookie-based secure token storage
- User CRUD operations
- Protected Routes and Role-based Access (admin/user)
- MongoDB with Mongoose
- Environment-based configuration with `.env`

---

## .env Variables
MONGO_URI={your_mongodb_uri}
PORT={your_port}
ACCESS_TOKEN_SECRET={your_access_token_secret}
REFRESH_TOKEN_SECRET={your_refresh_token_secret}

## 📦 Installation

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
