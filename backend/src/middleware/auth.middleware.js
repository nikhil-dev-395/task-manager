const jwt = require("jsonwebtoken");

/*
 DEVELOPMENT - 
 * auth user , how to use it , just go to postman and with respective path where i added a this middleware , i Headers add authorization and in value add Bearer token , don't forgot to add bearer
 */
const authUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ success: false, message: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error at authorizing the user", error);
    res
      .status(501)
      .json({ success: false, message: "internal server error && authUser" });
  }
};

module.exports = authUser;
