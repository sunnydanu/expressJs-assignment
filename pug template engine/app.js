const port =  process.argv[2] || 3000;
const templateDir =  process.argv[3] || "templates" ;
const express = require("express");
const path = require("path")

const app  = express();
 
app.set("views",path.join(__dirname,templateDir));

app.set("view engine","pug")

app.get("/home",(req,res)=>{res.render("index",{date: new Date().toDateString()})})
 
 
.listen(port,()=>{console.log("server is listing on ",port)})