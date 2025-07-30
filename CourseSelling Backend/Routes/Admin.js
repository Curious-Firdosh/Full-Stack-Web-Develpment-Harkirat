const express = require('express')
const { Admin, Course } = require('../config/db')
const adminMiddilWare = require('../MiddileWare/admin')
const router = express.Router()


router.post('/signup' , async(req,res) => {
    
    try{
            // Implement  Admin Signup Logic
            const username = req.body.username
            const password = req.body.password

            // Cheack IF THe User With that UserName Exist 
            const UserDetails = await Admin.findOne({username : username})

            if(UserDetails){
                res.json({
                    success : true ,
                    msg : "Admin from that UserName  Already Exists"
                })
            }

            const Resposne = await Admin.create({
                    username :username,
                    password :password
                })
            res.status(200).json({
                success : true,
                msg :"Admin Created SuccessFully ",
                data : Resposne
            })
        }
        catch(err) {
            res.status(500).json({
                success :false ,
                msg : `Admin Not Created  ${err}`
            })
        }
    
})

router.post('/courses' ,adminMiddilWare , async(req,res) => {
        
    try{

        const {title, Description, price , imageLink} = req.body

        if(!title || !Description || !price ||  !imageLink){
           return  res.json({
                msg : "Please Fill  The  All Fields"
            })
        }

        const CreatedCourse = await Course.create({
            title :title,
            Description :Description,
            price:price , 
            imageLink :imageLink
        })

        return res.status(200).json({
            msg : "Course Created SuccesFully",
            data : CreatedCourse,
            Course_id : CreatedCourse._id
        })

    }
     catch(err) {
           return res.status(500).json({
                success :false ,
                msg : `Course could not Created  ${err}`
            })
    }
} )

router.get("/allCourses" ,adminMiddilWare, async(req,res) => {

    try{
        const allCourses = await Course.find({})

        return res.status(200).json({
            data :allCourses,
            msg : "All Coursese featched SucessFully "
        })
    }
     catch(err) {
           return res.status(500).json({
                success :false ,
                msg : `all Course doesnt featched SuccessFully    ${err}`
            })
    }
})

router.put('/updateCourse', adminMiddilWare , async(req,res) => {

    const {courseId} = req.body

    const courseDetails = await Course.findById(courseId)

    return res.json({
        courseDetails : courseDetails
    })
})


module.exports = router