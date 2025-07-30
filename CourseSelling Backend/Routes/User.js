const express = require('express')
const router = express.Router()
const { User, Course } = require('../config/db')
const userMiddilWare = require('../MiddileWare/user')
const { default: mongoose } = require('mongoose')

router.post('/signup' , async(req,res) => {
    
    try{
            // Implement  Admin Signup Logic
            const username = req.body.username
            const password = req.body.password

            // Cheack IF THe User With that UserName Exist 
            const UserDetails = await User.findOne({username : username})

            if(UserDetails){
                res.json({
                    success : true ,
                    msg : "Admin from that UserName  Already Exists"
                })
            }

            const Resposne = await User.create({
                    username :username,
                    password :password
                })
            return res.status(200).json({
                success : true,
                msg :"Admin Created SuccessFully ",
                data : Resposne
            })
        }
        catch(err) {
            res.status(500).json({
                success :false ,
                msg : `User Not Created  ${err}`
            })
        }
    
})

router.get('/courses' , async(req,res) => {

    try{
        const Courses = await Course.find({})

        if(Courses.length == 0 ){
            return res.json({
                msg : "Courses Not Found"
            })
        }
        return res.status(200).json({
            msg:"All Course Featched SuccessFully",
            data : Courses
        })
    }
    catch(err) {
            res.status(500).json({
                success :false ,
                msg : `Course Not Not Created  ${err}`
            })
        }
    
});



router.post("/courses/:courseId", userMiddilWare, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return res.status(400).json({ success: false, msg: "Invalid course ID" });
    }

    try {
        // Step 1: Push courseId into purchasedCourses
        await User.updateOne(
            { username: username },
            { $push: { purchasedCourses: courseId } }
        );

        return res.status(200).json({
            success: true,
            msg: "Course purchased successfully",
    
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: `Failed to purchase course: ${err.message}`
        });
    }
});

router.get('/purchasedCourses' , userMiddilWare , async(req,res) => {
    try{

        const {username} = req.headers

        const UserDetails = await User.findOne({username : username})

        const courses = await Course.find({
            _id : {
                "$in" : UserDetails.purchasedCourses
            }
        })


        return res.status(200).json({
            msg : "All Purchased Course Of A Use riS Here",
            data : courses
        })


    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: `Failed to purchase course: ${err.message}`
        });
    }
})

module.exports = router