const port =  3000
const express = require("express");

const app  = express();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))


app.get("/",(req,res)=>{res.sendFile(__dirname+'/views/index.html');})
 
 
.listen(port,()=>{console.log("server is listing on ",port)})