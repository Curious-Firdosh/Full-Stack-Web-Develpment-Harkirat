const mongoose = require('mongoose')
require('dotenv').config()


// DataBase Connecting 
const DBURL = process.env.DATABASE_URL

   mongoose.connect(DBURL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Error", err))



// Defining Schemaaas
const AdminSchema = new mongoose.Schema({
    username : String ,
    password : String
})

const UserSchema = new mongoose.Schema({
    username : String ,
    password : String ,
    purchasedCourses : [{
        type :mongoose.Schema.Types.ObjectId,
        ref :'Course'
    }]
});

const CourseSchema = new mongoose.Schema ( {
    title : String,
    Description :String ,
    imageLink : String,
    price : Number
})
 

const Admin = mongoose.model('Admin' ,AdminSchema)
const Course = mongoose.model('Course' ,CourseSchema)
const User = mongoose.model('User' ,UserSchema)

module.exports = {
    Admin,
    Course,
    User
}