// Health check controller
const getHealth = (req, res) => {
  const healthData = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0'
  };
  
  res.status(200).json(healthData);
};

const getReadiness = (req, res) => {
  // In a real application, you would check database connections, 
  // external service availability, etc.
  const isReady = true;
  
  if (isReady) {
    res.status(200).json({
      status: 'ready',
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(503).json({
      status: 'not ready',
      timestamp: new Date().toISOString()
    });
  }
};

module.exports = {
  getHealth,
  getReadiness
};