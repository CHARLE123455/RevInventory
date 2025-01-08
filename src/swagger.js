
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RevInventory API Documentation',
      version: '1.0.0',
      description: 'API documentation for RevInventory system'
    },
    servers: [
      {
        url: 'http://localhost:8818',
        description: 'Development server'
      }
    ]
  },
  apis: [
    './routes/*.js',
    './routes/logRoutes.js',
    './routes/itemRoutes.js',
    './routes/categoryRoutes.js',
    './routes/authRoutes.js'
  ]
};

const specs = swaggerJsdoc(options);
module.exports = specs;