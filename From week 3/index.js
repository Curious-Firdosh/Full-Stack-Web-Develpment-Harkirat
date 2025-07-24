// const express = require("express")

const { email } = require("zod");

// const app = express()

// const sum = (n) => {
//     let ans = 0 
//     for(let i = 1 ; i <= n ; i++){
//         ans = ans + i 
//     }
//     return ans;
// }

// app.get("/" , (req,res) => {

//     const n = req.query.n
//     const ans = sum(n)
//     console.log(ans);
    
//     res.send(`Helloooo Jiiiii Ki Haaaal Chaaal   ${ans}`)
// })

// app.listen(3000 , () => {
//     console.log("Doctor Hospital Is Ready And Its Address Is 3000");
    
// })

// ! Using Zod 

const zod = require('zod')

function validateInput (obj) {

const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(6,"Enter Atleast 6 Numbers")
    })

    const response = schema.safeParse(obj)
    console.log(response);
    

}

validateInput({
    email : "heloo@gmail.com",
    password :"1234"
})