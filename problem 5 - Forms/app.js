const port =  3000
const express = require("express");

const app  = express();
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{res.send("move to /form")})
.get("/form",(req,res)=>{
    const form = `<form method="post">
        <input type="input" name="str" />
        <input type="submit" />
    </form>`;
    res.send(form)
}
    )
.post("/form",(req,res)=>{
    
    res.send([...req.body.str].reverse().join(""))
})
.listen(port,()=>{console.log("server is listing on ",port)})