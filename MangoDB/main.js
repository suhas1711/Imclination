const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const env = require('dotenv');
const cors = require('cors')
//DB Connection
mongoose.connect(
    `mongodb+srv://pod:admin123@cluster0.ilsmtbl.mongodb.net/?retryWrites=true&w=majority`).then(() => {
        console.log('Db Connected');
    });

//Schema

const sch={
    title:String,
    city:String,
    img:String,
    ig:Number,
    fb:Number,
    tw:Number,
    bh:Number
}

const monmodel=mongoose.model("IMCLI", sch);


//POST
app.post("/post",async(req,res)=>{
    console.log("post function");

    const data=new monmodel({
        title:req.body.title,
        city:req.body.city,
        img:req.body.img,
        ig:req.body.ig,
        fb:req.body.fb,
        tw:req.body.tw,
        bh:req.body.bh   
    });

    const val=await data.save();
    res.json(val);
})

// GET
app.get("/getdata",(req,res)=>{


    monmodel.find((err,val)=>{
        if(err)
        {
            console.log(err)
        }else{
            res.json(val)
        }
    })

    // monmodel.find({})
    // .then((val) => {
    //     res.status(200).json(val);
    // }).catch((err) => {
    //     res.status(422).json(err);
    // })
})



app.use(cors())
app.listen(5000,()=>{
    console.log("Server running on 5000")
})