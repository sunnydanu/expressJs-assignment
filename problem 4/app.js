const port = process.env.PORT|| 8080

require("express")()
.get("/",(req,res)=>{res.send("Hello World")})
.get("/time",(req,res)=>{
    
    res.send(new Date().toISOString())
})
.listen(port,()=>{console.log("server is listing on ",port)})