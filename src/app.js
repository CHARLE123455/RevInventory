require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const bodyParser = require('body-parser');


//Routes
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const itemRoutes = require('./routes/itemRoutes');
const logRoutes = require('./routes/logRoutes');

// Initialize the Application 
const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {explorer: true, 
     customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css"}));
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/item', itemRoutes);
app.use('/api/v1/log', logRoutes);

// Sync Database and Start the Application Server

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});

