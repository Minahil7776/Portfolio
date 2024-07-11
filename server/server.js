const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors")
const { error, info } = require("console");
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// mail sending configration
let transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"minahil7776@gmail.com",
        pass:"skty ooho eahz cfkf"
    }
})

app.post('/send-email',(req,res)=>{
    const{name,email,message} = req.body;
    let mailOptions = {
        from:"minahil7776@gmail.com",
        to:email,
        subject:name,
        text:message
    } 


transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return res.status(500).send(error.toString());
    }
    else{
        return res.status(200).send("Email sent"+info.response)
    }
})
})
app.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
})
