
const express=require('express')
const {validationResult} = require('express-validator');

const { Student } = require('../../modles/student')


let admincontroller=(req,res)=>{

    let errors = validationResult(req);

    
    
    if (errors.isEmpty()) {
       const studentobj=new Student({name:req.query.name,surname:req.query.surname,adress:req.query.adress})
   
        studentobj.save().then(d=>{
            res.status(200).json({
            msg:"okk"
        })
        })
        .catch(e=>{
            res.status(400).json({
                msg:"error",
                data:error
        })
        })
        
        }else{
                res.status(400).json({
                    msg:"error"
                })



        }
        
        
    }

 exports.admincontroller =admincontroller