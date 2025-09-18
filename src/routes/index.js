const express = require('express');
const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Jenkins POC API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

// Example data endpoint
router.get('/status', (req, res) => {
  res.json({
    service: 'jenkins-poc-01',
    status: 'running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;