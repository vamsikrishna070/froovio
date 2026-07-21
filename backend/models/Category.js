import mongoose from "mongoose";
const schema=new mongoose.Schema({name:String,slug:{type:String,unique:true}});
export default mongoose.model("Category",schema);