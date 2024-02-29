//import express
const express = require('express');
//creating router from express
const router = express.Router();

//import data from jason located  '../public lib
const data = require('../public/completed.json')
const unCompletedData =require('../public/notCompleted.json')

//define a route to handle get requests
router.get('/completedtask', (req,res) =>{
    res.json(data,null,2)
 })
 router.get('/notcompletdtask',(req,res) =>{
     res.json(unCompletedData,null,2);
 })

 //export rout module to make available for other app
 module.exports = router;