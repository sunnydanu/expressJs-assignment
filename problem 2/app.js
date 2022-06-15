require("express")()
.use("/year",(req,res)=>{
    const {age} = req.query
    const today = new Date();
    today.setFullYear(today.getFullYear() - age)
    res.send(`You were born in ${today.getFullYear()}` )
})
.listen(3000,()=>{console.log("server is listing on 3000")})