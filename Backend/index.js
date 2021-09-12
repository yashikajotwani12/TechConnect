const express = require('express')

const app = express();
const bodyparser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

require('./DB/connection')
app.use(require('./routings/auth'))
app.get('/',(req,res)=>{
    res.send("backend")
})
app.listen(5000,()=>{
    console.log('Listing to Port')
})