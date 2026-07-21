import mongoose from 'mongoose';
const UserSchema=new mongoose.Schema({
name:String,
email:{type:String,unique:true,index:true},
password:String,
role:{type:String,enum:['user','admin'],default:'user'},
refreshToken:String
},{timestamps:true});
export default mongoose.model('User',UserSchema);
