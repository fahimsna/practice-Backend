# Practice Backend — Authentication & File Upload System

A full-stack authentication and file-upload practice project built while learning backend development with Node.js, Express.js, MongoDB, React, and related authentication technologies.

## 🚧 Project Status

Currently in development.

### Completed
- Express server setup
- Environment variable configuration
- MongoDB connection with Mongoose
- User schema/model
- User registration API
- Request body validation
- Duplicate email checking
- Password hashing with bcrypt
- User creation in MongoDB
- Registration API tested with Postman

### Upcoming
- User login
- Password verification with bcrypt
- JWT authentication
- Authentication middleware
- Protected routes
- File upload
- Authenticated file upload
- React authentication UI
- React file-upload UI
- Frontend/backend integration

## 🛠️ Tech Stack

### Frontend
- React
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs

### Development Tools
- Postman
- Nodemon
- Git & GitHub

## 📁 Project Structure

```text
practice-Backend/
│
├── Aug19/
│   │
│   ├── backend/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   └── usercontroller.js
│   │   │
│   │   ├── models/
│   │   │   └── User.js
│   │   │
│   │   ├── Routes/
│   │   │   └── userRoutes.js
│   │   │
│   │   ├── server.js
│   │   ├── package.json
│   │   └── .env
│   │
│   └── frontend/
│       └── React + Vite application