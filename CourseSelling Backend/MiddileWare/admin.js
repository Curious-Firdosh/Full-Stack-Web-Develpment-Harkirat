// MiddileWare For Handleing Auth 

const { Admin } = require("../config/db")

const adminMiddilWare = (req,res,next) => {

    const username = req.headers.username
    const password = req.headers.password

    Admin.findOne({
        username :username,
        password : password 
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msgg :"Admin  Does Not Exist"
            })
        }
    })

}

module.exports = adminMiddilWare;