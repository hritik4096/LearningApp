const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt  =require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,

    },
});

// secure the password with the bcrypt

userSchema.pre('save',async function(next){
    // console.log("pre method",this);
    const user = this;

    if(!user.isModified('password')){
        next();
    }

    try {

        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password=hash_password;
        
    } catch (error) {
        next(error);
        
    }
});


// compare the password using bcrypt

userSchema.methods.comparePassword = async function(password){
return bcrypt.compare(password,this.password);

}



// json web token (jwt)
// Tokens, such as JWTs , are typically not stored in the database along with other user
// details. instead, they are issued by the server during the authentication process and then stored
// on the client-side (eg: in cookies or local storage) for later use.

userSchema.methods.generateToken = async function(){

try {
    return jwt.sign({
        userId : this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn:"30d"
    }
    
    );
    
} catch (error) {
    console.error(error);
}

};



// define the model or collection name

const User = new mongoose.model("User",userSchema);


module.exports=User;