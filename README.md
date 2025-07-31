# SuperShop - Multi-Vendor Supermarket Platform

SuperShop is a comprehensive multi-vendor supermarket platform built with the MERN stack (MongoDB, Express, React, Node.js). It enables vendors to manage their shops and products, customers to shop seamlessly, and delivery personnel to ensure reliable service.

## Features

- **Multi-vendor shop management** (multiple owners per shop)
- **Smart delivery system** (shop-specific and global delivery personnel)
- **Dark/Light Mode** for better user experience
- **Real-time updates** for orders, deliveries, and notifications
- **Professional features** like reviews, discounts, and wishlists

## Tech Stack

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Socket.io** for real-time features
- **Multer** for file uploads

### Frontend
- **React** with React Router
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Formik & Yup** for form validation
- **Axios** for API requests
- **Socket.io-client** for real-time features

## Project Structure

```
project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   └── utils/
│   ├── index.html
│   └── vite.config.js
└── README.md
```

## User Roles

1. **Admin**
   - Manage users, shops, and global delivery personnel
   - View analytics and reports
   - Configure platform settings

2. **Vendor (Shop Owner)**
   - Manage shop profile and products
   - Process orders
   - Assign shop delivery personnel
   - Create promotions and discounts

3. **Shop Staff**
   - View and manage orders
   - Update product stock
   - Assist with packaging

4. **Delivery Personnel**
   - View assigned deliveries
   - Update delivery status
   - Upload delivery proof

5. **Customer**
   - Browse shops and products
   - Place orders
   - Track deliveries
   - Rate products and shops

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd supershop
   ```

2. Install backend dependencies
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables
   - Create a `.env` file in the backend directory
   ```
   PORT=12000
   MONGODB_URI=mongodb://localhost:27017/supershop
   JWT_SECRET=your_jwt_secret
   ```

5. Start the development servers
   - Backend
   ```
   cd backend
   npm run dev
   ```
   - Frontend
   ```
   cd frontend
   npm run dev
   ```

6. Access the application
   - Backend API: http://localhost:12000
   - Frontend: http://localhost:12001

## API Documentation

The API documentation is available at `/api-docs` when the backend server is running.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)