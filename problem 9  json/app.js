const port = process.argv[2] || 3000;
const filePath = process.argv[3] || "books/";
require("express")()
.get("/books/:book?",(req,res)=>{
    const fs = require("fs");
    const {book="catalogue.txt"}  = req.params

    console.log(__dirname+`/${filePath}/${book}`)
    fs.readFile(__dirname+`/${filePath}/${book}`,"utf8",(err,data)=>{
        console.log(data)
        res.json(JSON.parse(data))
    })


})
.listen(port,()=>{console.log("server is listing on :",port)})