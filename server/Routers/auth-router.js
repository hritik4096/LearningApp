const express = require('express');

const router = express.Router();
const authcontroller=require('../controllers/auth-controller');


// router.get('/',(req,res)=>{
//     res.status(200).send("Welcome to the Hritik's mern series using router");
// })

// you can also use it instead of the previous router but it prefer by developers so use it.
// you can also use chaining with this method.

// router.route("/").get((req,res)=>{
//     res.status(200).send("Welcome to the Hritik's mern series using router ya");
// });

const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);



module.exports = router;