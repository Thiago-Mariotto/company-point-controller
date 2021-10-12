const isAdmin = (req, res, next) => {
  try {
    const { user } = req;

    if (user.role !== 'admin') {
      return res.status(401).json({ 
        message: 'Not authorized to access this page', 
      });
    }
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Not authorized to access this page' }); 
  }
};

module.exports = isAdmin;