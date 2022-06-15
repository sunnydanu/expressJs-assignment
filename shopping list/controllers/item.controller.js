import { getJSON,setJSON} from "../model/inventory-model.js";

const getItem =  async (req,res) =>{
    const {id}  = req.params;
    let ItemList =   global.ItemList

    if(id){
        ItemList = ItemList.filter(item=>item.id == id)
    }    

    res.send(ItemList)
}
const postItem =   (req,res) =>{
    let item = req.body
    let ItemList =   global.ItemList
    global.ItemList = [item,...ItemList];
    res.send({"message":"Item Added"})
}


const patchItem =  async (req,res) =>{

   
     const oldItemList =  global.ItemList
     const newData   = req.body 
   
     global.ItemList = [newData,...oldItemList];
  
    res.send({"message":"Item Updated",...global.ItemList})
}
const deleteItem =  async (req,res) =>{
   
    const {id}  = req.params; 
    const newData = global.ItemList.filter(item=>parseInt(item.id) !== parseInt(id))
    global.ItemList = newData;
    res.send({"message":"Item Deleted"})

}


export default {
    getItem,postItem,patchItem,deleteItem
}