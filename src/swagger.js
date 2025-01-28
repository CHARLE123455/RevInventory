const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'RevInventory API Documentation',
      version: '1.0.0',
      description: 'API documentation for RevInventory system',
    },
    servers: [
      {
        url: 'http://localhost:8818',
        description: 'Development server',
      },
      {
        url: 'https://revinventory.onrender.com/',
        description: 'Production server',
      },
    ],
    components: {
      schemas: {
        Auth: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              description: 'The username for authentication',
              example: 'johndoe',
            },
            password: {
              type: 'string',
              description: 'The password for authentication',
              example: 'Password123!',
            },
            token: {
              type: 'string',
              description: 'JWT token returned after successful login',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
          },
        },
        Category: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'Category ID', example: 1 },
            name: { type: 'string', description: 'Category name', example: 'Electronics' },
            description: { type: 'string', description: 'Description', example: 'All electronic items' },
          },
        },
        Item: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'Item ID', example: 1 },
            name: { type: 'string', description: 'Item name', example: 'Laptop' },
            price: { type: 'number', description: 'Item price', example: 799.99 },
            quantity: { type: 'integer', description: 'Available quantity', example: 100 },
            categoryId: { type: 'integer', description: 'Category ID', example: 1 },
          },
        },
        Log: {
          type: 'object',
          properties: {
            id: { type: 'integer', description: 'Log ID', example: 1 },
            action: { type: 'string', description: 'Action type', example: 'CREATE' },
            details: { type: 'string', description: 'Details about the log entry', example: 'Item created successfully' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Include all route files
};

const specs = swaggerJsdoc(options);
module.exports = specs;
