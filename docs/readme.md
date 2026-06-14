# 🛒 eCommerce Platform

A modern full-stack eCommerce application built with **React** for the frontend and **NestJS** for the backend. The platform provides a scalable architecture for managing products, users, orders, authentication, and payments while delivering a responsive shopping experience.

---

## 🚀 Tech Stack

### Frontend

* React
* React Router
* TypeScript
* Redux Toolkit / Context API (optional)
* Tailwind CSS / Bootstrap / Material UI
* Axios
* Vite or Create React App

### Backend

* NestJS
* TypeScript
* REST API
* JWT Authentication
* Passport.js
* TypeORM / Prisma
* PostgreSQL / MySQL
* Swagger API Documentation

### Other Tools

* Docker (optional)
* Git & GitHub
* ESLint & Prettier
* npm / pnpm / yarn

---

## 📁 Project Structure

```text
ecommerce/
├── frontend/          # React application
├── backend/           # NestJS API
├── docs/              # Project documentation
├── .gitignore
├── README.md
└── docker-compose.yml (optional)
```

---

## ✨ Features

### Customer Features

* User registration and login
* JWT-based authentication
* Browse products
* Search and filter products
* Product details page
* Shopping cart management
* Wishlist functionality
* Secure checkout process
* Order history
* User profile management

### Admin Features

* Admin dashboard
* Product CRUD operations
* Category management
* Order management
* User management
* Inventory tracking
* Sales reporting

---

## 🔐 Authentication

* JWT Access Tokens
* Password hashing with bcrypt
* Protected routes
* Role-based authorization (Admin/User)

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/ecommerce.git
cd ecommerce
```

---

## 🖥️ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔧 Backend Setup

```bash
cd backend

npm install

npm run start:dev
```

Backend runs on:

```
http://localhost:3000
```

---

## 🌐 Environment Variables

### Frontend (`.env`)

```env
VITE_API_URL=http://localhost:3000/api
```

### Backend (`.env`)

```env
PORT=3000

DATABASE_URL=your_database_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d
```

---

## 📡 API Endpoints

### Authentication

```
POST   /auth/register
POST   /auth/login
GET    /auth/profile
```

### Products

```
GET    /products
GET    /products/:id
POST   /products
PATCH  /products/:id
DELETE /products/:id
```

### Categories

```
GET    /categories
POST   /categories
```

### Orders

```
GET    /orders
POST   /orders
GET    /orders/:id
```

### Users

```
GET    /users
GET    /users/:id
PATCH  /users/:id
```

---

## 🧪 Running Tests

### Frontend

```bash
npm test
```

### Backend

```bash
npm run test
```

---

## 📦 Build for Production

### Frontend

```bash
npm run build
```

### Backend

```bash
npm run build
npm run start:prod
```

---

## 📈 Future Enhancements

* Payment gateway integration (Stripe/PayPal)
* Email notifications
* Product reviews and ratings
* Coupon and discount system
* Multi-vendor support
* Real-time order tracking
* AI-powered product recommendations
* Progressive Web App (PWA)
* Multi-language support

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ using React and NestJS.
