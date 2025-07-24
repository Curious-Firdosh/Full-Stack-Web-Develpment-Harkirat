//! Wrost Way To Do Cheacks Or Defing mIDDILWARE

 /* 
const express = require('express')
const app = express()

app.get('/'  , (req , res) =>{
    
   try{
         const username = req.headers.username
         const password = req.headers.password
         const kidneyId = req.query.kidneyId


        if(username != "Firdosh"  || password != "1234"){
            // DO Somthing With Kidney Here
            
            return res.status(403).json({
                msg: "You Are Not Registerd Bhaaaag yAHHA sEEE "

            })
        }

        if(kidneyId != 1 && kidneyId != 2){     
            return res.status(411).json({
                msg : "Kideny INPUT is Wrong  "
            })
        }

        res.status(400).json({
            msg : "You Are A Healthy Man Why are You here"
        })
   }

   catch(err){
        console.log("Error Is " + err);
        
   }

})

app.listen(3000 , () => {
    console.log("App Is Running SuccessFullyyyyyy");
    
})
*/

// ! Best Way TI Write Middileware - that is just a function that sits between route and final handler to do such login , signup,authintication things


const express = require("express")
const app = express()
const zod = require("zod")

const schema = zod.array(zod.number())

app.use(express.json())

// Syntax of Zod  for example thre is inout i have to guve in post man 
// {
//     email : String,
//     password :  String ,
//     country : "IN" , 'US' 
// }

const schmeaaa = zod.object({
    email: zod.string({ required_error: "Email is required" }).email("Please enter a valid email address"),
    password: zod.string({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters long")
})


// ! THAT IS ALSO A MIDDILWARE 

const numberOfRequest = 0;
function calculateRequestMiddileware (req,res,next) {
    numberOfRequest++;
    console.log(numberOfRequest);
    next()

}



const userMiddileWares = (req,res,next) => {
    
    username = req.headers.username
    password = req.headers.password

    // Doing Input Validation Wtih Zod 


    if(username != "Firdosh" && password != "1234"){

        return res.status(403).json({
            msg : "Wrong Password And UserName Plzz Try Again"
        })
    }
    else{
        next();
    }
}

const kidneyMiddileWares = (req,res,next) => {
    
    const kidneyId = req.query.kidneyId

    if(kidneyId != 1  && kidneyId != 2){

        return res.status(403).json({
            msg : "Wrong KidneyId Plzz Try Again"
        })
    }
    else{
        next();
    }
}



app.get('/' ,userMiddileWares , kidneyMiddileWares, (req,res ) => {
    
    res.send("Your Heart Is Helathy Brother WHyyyy Are You Here")
})

app.post('/Kidney' , (req,res) => {

    const kidneyId = req.body.kidneyId
    const response = schema.safeParse(kidneyId)
    
     res.send({
        response
    })
})

app.post("/login" , (req , res) => {
    
    const inputs = req.body
    const response = schmeaaa.safeParse(inputs)
    
    console.log(response);
    
}) 


app.listen(3000 , () => {
    console.log("App Is Running SuccessFullyyyyyy");
    
})

// **  Global Catches - it isd also a midddileWare

/*
    app.use((err,req,res,next) => {
        console.log(err++);
        res.status(500).json({
            msg:"Somthing Wromng With Server Plzz Try Again Later"
        })
        
    })
*/
