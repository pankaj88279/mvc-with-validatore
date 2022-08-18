console.log('ok')

const express=require('express');
const { adminRoute } = require('./routes/admin/adminRoutes');
const app=express();

require('dotenv').config();

app.use(adminRoute)

let port=process.env.PORT;
app.listen(port,()=>{
    console.log(`thise port running on port ${port}`)
})