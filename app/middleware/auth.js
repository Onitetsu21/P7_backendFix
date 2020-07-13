const jwt = require('jsonwebtoken');

exports.auth = function(req, res, next) {
  // console.log("req.body.userId==> ", req.body.userId,);
  // console.log("req.headers.authorization ==>", req.headers.authorization)
  try {
    
    const token = req.headers.authorization.split(' ')[1];
    
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    
    const userId = decodedToken.userId;
    // console.log("userId===>", userId)
    // console.log("req.body.userId==>", req.body.userId, "userId ==>", userId );
    if (req.body.userId && req.body.userId !== userId) {
      
      throw 'invalid user ID ';
      
    } else {
      next();
    }
  } catch {
    console.log("ça passe direct au catch")
    res.status(401).json({
      error: new Error('Unauthentify request')
      
    });
  };
};