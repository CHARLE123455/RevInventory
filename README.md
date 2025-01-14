# RevInventory

RevInventory is a inventory management system built with Node.js and PostgreSQL, designed designed with Image Upload.

## Live Demo
Access the live application here: [RevInventory](https://revinventory.onrender.com/)

## Project Structure
```
.
├── controllers/
│   ├── authController.js
│   ├── itemController.js
│   ├── categoryController.js
│   ├── logController.js
├── services/
│   ├── authService.js
│   ├── itemService.js
│   ├── categoryService.js
│  
├── middleware/
│   ├── authMiddleware.js
│   ├── logMiddleware.js
├── models/
│   ├── Item.js
│   ├── Category.js
│   ├── Log.js
│   ├── User.js
├── routes/
│   ├── authRoutes.js
│   ├── itemRoutes.js
│   ├── categoryRoutes.js
│   ├── logRoutes.js
├── utils/
│   ├── cloudinary.js
├── config/
│   ├── database.js
│   ├── jwtConfig.js
├── app.js
├── package.json
```

## Prerequisites
- Node.js (v22)
- PostgreSQL
- npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CHARLE123455/RevInventory.git
cd RevInventory
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your_postgres_database_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Set up the database:
```bash
# The application will automatically create the necessary tables when started
npm run start
```

## Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following:
   - Build Command: `npm install`
   - Start Command: `node src/app.js`

4. Add the following environment variables in Render dashboard:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

5. Deploy the application

## API Endpoints

### Authentication
- POST `/api/v1/auth/register` - Register a new user
- POST `/api/v1/auth/login` - Login user

### Items
- POST `/api/v1/items/sell/:id` - sell an item
- POST `/api/v1/items/update/:id` - Create new item
- PUT `/api/v1/items/:id` - Update item
  

### Categories
- GET `/api/v1/categories/all` - Get all categories
- POST `/api/v1/categories/create` - Create new category
  


### Logs
- GET `/api/v1/logs/action` - Get activity logs by action
- POST `/api/v1/logs/create` - Create new log entry

## Features
- User authentication and authorization
- Inventory management
- Category management
- Activity logging
- Image upload support via Cloudinary
- RESTful API architecture

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JSON Web Tokens (JWT)
- Cloudinary
- bcrypt for password hashing

