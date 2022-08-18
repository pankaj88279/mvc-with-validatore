const express=require('express')

const mongoose=require('mongoose')

require('dotenv').config();


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.mongodb.net/?retryWrites=true&w=majority`)
.then(d=>{
 console.log('connected')
})
.catch((e)=>{
    console.log('error')
})

exports.mongoose=mongoose