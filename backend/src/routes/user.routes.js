const { SignUp, SignIn } = require("../controllers/user.controllers");
const router = require("express").Router();
router.post("/signup", SignUp);
router.post("/signin", SignIn);

module.exports =  router
