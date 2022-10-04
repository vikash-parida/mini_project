const express = require('express');
const app = express();
const {keypair,auth}=require('./middleware/middleware')

// // app.use(auth)

app.get("/", keypair,(req,res)=>{
    console.log('home');
    console.log(req.pair);
    let{pair}=req
     res.send(pair)
})

app.get("/user", auth,(req,res)=>{
    let secret={
        username:"Mahad",
        secret:"secrets"
    }
    res.send(secret);
})

app.listen(9000,()=>{
    console.log('listening on port 9000');
});