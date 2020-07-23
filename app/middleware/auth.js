const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;
    console.log(token);

    const decodedToken = jwt.verify(JSON.parse(token), "RANDOM_TOKEN_SECRET");

    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "invalid user ID ";
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: new Error("Unauthentify request"),
    });
  }
};
