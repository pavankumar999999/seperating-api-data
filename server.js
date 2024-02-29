const express = require('express');
//const hostname = '127.0.0.1';
const app = express();
//import router from specific path
const router=require('router')
//defining port number
const port = 1234;
//use router middleware for path starting '/api'
app.use('/api', router)
//start server make it listen to specific path
app.listen(port, () =>{
    console.log("Server is up and running")
})