const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('./model/User')
const cors = require('cors')
const axios = require('axios')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test121',{useNewUrlParser: true}).then(()=>{
    console.log("DB CONNECTED");
})

const datas = [
    {
        'uname':'admin',
        'pass':'22334'
    }
]

// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get("/users",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        return res.json({DATA:response.data})
    })
})


app.get("/todos",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
        return res.json({DATA:response.data})
    })
})


app.post("/login",async(req,res)=>{
    const { uname , pass } = req.body;
    var data = false;
    console.log(uname);
    // const data = await User.findOne({uname});
    for (let index = 0; index < datas.length; index++) {
        const element = datas[index];
        if(element['uname'] == uname ){
            data = true;break;
        } 
        
    }
    if(data){
        var token = jwt.sign({data},'secret121')
        return res.json({'msg':"DATA VALID" , 'token':token,'status':true})
        // if(bcrypt.compare(pass , data.pass)){
            
        // }else{
        //     return res.json({'msg':"DATA MATCHED BUT WRONG PASSWORD",'status':false})
        // }
    }else{
        return res.json({'msg':"WRONG DATA",'status':false})
    }
})

app.listen(4000,()=>{
    console.log("SERVER AT 4000");
})