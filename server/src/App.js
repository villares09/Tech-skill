const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/countryRoutes.js'); // Ajusta esta ruta

const server = express();
server.name = 'API';

// Middleware
server.use(express.json());
server.use(morgan('dev'));

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Cambia según el puerto de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
server.use(cors(corsOptions));

// Routes
server.use('/', routes); // Ajusta esta ruta

// Error handling middleware
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;