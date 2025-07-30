const express = require("express")

const bodyParser = require('body-parser')
const AdminRouter = require('./Routes/Admin')
const UserRouter = require('./Routes/User')

// MiddileWare For Parsing Request Bodies
const app = express()
app.use(bodyParser.json())
app.use('/admin' , AdminRouter)
app.use('/user' , UserRouter)

const Port = process.env.PORT || 4000

app.listen(Port , () => {
    console.log(`Server is SuccessFully Running At ${Port}`);
})

app.get("/" , (req,res) => {
    res.send("Hello Welcome To MongoDB Class")
})
