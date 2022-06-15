import express from "express";
import  cItem from "../controllers/item.controller.js"

const iRouter =    express.Router()
 
iRouter.get("/items/:id?",cItem.getItem)
iRouter.patch("/items/:id",cItem.patchItem)
iRouter.post("/items",cItem.postItem)
iRouter.delete("/items/:id",cItem.deleteItem)

 
 export default  iRouter ;
