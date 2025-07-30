// MiddileWare For Handleing Auth 

const { User } = require("../config/db")

const userMiddilWare = (req,res,next) => {

    const username = req.headers.username
    const password = req.headers.password

    User.findOne({
        username :username,
        password : password 
    })
    .then(function(value){
        if(value){
            next();
        }
        else(
            res.status(403).json({
                msgg :"User Does Not Exist"
            })
        )
    })

}

module.exports = userMiddilWare