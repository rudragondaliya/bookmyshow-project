const bcrypt = require("bcrypt")
const User = require("../models/Admin");

module.exports.userSignup=async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        const existing =  await User.findOne({email})
        if(existing) {
            console.log("Email Already Registered..");
            
        }
        else
        {
            const hashedpassword = await bcrypt.hash(password,10);
            const newUser = new User ({...req.body,password:hashedpassword})
            await newUser.save();
            console.log("Signup Successfully");
            
        }
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports.userLogin=async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            console.log("Users not Found");   
        }
        else
        {
            const match = await bcrypt.compare(password,user.password)
            if(match){
                console.log("Login Success");
            }
            else
            {
                console.log("Invalid Password");
                
            }
        }
    } catch (error) {
        console.log(error.message);
        
    }
}