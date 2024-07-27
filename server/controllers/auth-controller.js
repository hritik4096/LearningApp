const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home route handler
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to Hritik's MERN series using router!");
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
} 



// *--------------------------------------------------------------------------------------------------------
// 1. get Registration data : Retrieve user data (username,email,password)
// 2. check email existence : check if email is already registered.
// 3. Hash password: Securely hash the password.
// 4 .Create User : Create a new user with hased password.
// 5. Save to DB : Save user data to the database.
// 6. Respond : Respond with "Registration Successful" or handle errors.

// Registration route handler
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Check if the email already exists in the database
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        // Create a new user and save to the database
        const newUser = await User.create({ username, email, phone, password });

        res.status(201).json({ msg: "Registration successful" , token: await newUser.generateToken(),
        userId:newUser._id.toString() });
    } catch (error) {
        console.error(error);
        // res.status(500).json({ msg: "Internal Server Error" });
        next(error);
    }
}


// *------------------------------
// * user login logic 
// *------------------------------


const login = async(req,res)=>{

    try {
    
        const {email,password} = req.body;

         const userExist = await User.findOne({ email });

         if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
         }

        //  const user = await bcrypt.compare(password,userExist.password);

             const user = await userExist.comparePassword(password);
         
         if(user){
            res.status(200).json({
            msg: "Login successful" ,
            token: await userExist.generateToken(),
            userId:userExist._id.toString(),
        
        }); 

         }else{
            res.status(401).json({message:"Invalid Email or Password"});
         }


        
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });

        
    }

}

module.exports = { home, register,login };
