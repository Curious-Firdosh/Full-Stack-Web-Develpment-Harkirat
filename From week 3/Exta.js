const express = require("express")


const app = express()

const user = [{
    userName : "Jhon",
    kidneys: [
        {
            healthy : false
        }
    ]
}]

app.get('/' , (req,res) => {
    const userKidneys = user[0].kidneys
    const numberOfkidneys = userKidneys.length
    
    let numberOfHelathyKidneys = 0 

    for (let i = 0; i <= userKidneys.length ; i++){
        if(userKidneys[i].healthy){
            numberOfHelathyKidneys = numberOfHelathyKidneys + 1 
        }
    }
    const  numberOfNonHelathyKidneys = numberOfkidneys - numberOfHelathyKidneys;
    
    res.json({
        userKidneys,
        numberOfNonHelathyKidneys ,
        numberOfNonHelathyKidneys

    })
})


app.listen(3001 , () => {
    console.log("App Is Running At Port 3001 SucessFu;llluy");
    
} )