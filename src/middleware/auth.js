// Example authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({
      error: 'Access denied',
      message: 'No token provided'
    });
  }
  
  // In a real application, you would validate the JWT token here
  // For POC purposes, we'll just check for a basic token
  if (token !== 'Bearer poc-token') {
    return res.status(401).json({
      error: 'Access denied',
      message: 'Invalid token'
    });
  }
  
  next();
};

module.exports = { authenticate };