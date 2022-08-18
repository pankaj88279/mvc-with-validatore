
const express=require('express');
const { admincontroller } = require('../../controllers/admin/admincontroller');
const { Student } = require('../../modles/student');
const { studentValidator } = require('../../validator/student');

const app=express();

const adminRoute=express.Router();


    adminRoute.get("/get_student",admincontroller,studentValidator,Student)

exports.adminRoute=adminRoute