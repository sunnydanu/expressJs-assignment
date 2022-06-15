const port = process.argv[2] || 3000


require("express")()
.use("/home",(req,res)=>{
    res.send(`Hello World !` )
})
.listen(port,()=>{console.log("server is listing on ",port)})