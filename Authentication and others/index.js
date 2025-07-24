const express = require('express')
const app = express()
const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')
const jwtPassword = 'firdosh'


app.use(express.json())
   
    // Connect to MongoDB
    mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Error", err));

const userProfileSchema = mongoose.model('Users' , 
    {
        username : String , 
        email : String , 
        password : String
    })

app.post('/signin' , async (req,res) => {

    try{
        const {username , email ,password} = req.body
    
        if(!username || !email || !password ){
            return res.status(403).json({
                msg : "Incorrect Input Plzz Fill The All Fields"
            })
        }

        const existingUser = await userProfileSchema.findOne({username : username})

        if(existingUser){
           return res.status(500).json({
                msg :"User Already Exist..... "
            })
        }       
    
        const token = jwt.sign({username : username} , jwtPassword)

        const newUser = new userProfileSchema({
              username : username,
              email : email,
              password : password,
              
        })
        newUser.save();
        
        return res.status(200).json({
            Data : newUser,
            token,
            message : "User SignIned SuccessFullyyyy "
        })

    }
    catch(err) {
        console.error("Error in Signin Controller" + err)
    }

})

app.post("/users" , (req , res) = >{
    
})

app.listen(3000 , () => {
    console.log("app is Runniung SucccessFully At port ")
})

app.get('/' ,(req,res) => {
    res.send("Hellllo Jiiiiiiii You Are At Home Route")
})