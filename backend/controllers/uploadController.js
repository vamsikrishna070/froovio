import cloudinary from '../config/cloudinary.js';
export const uploadImage=async(req,res)=>{
 const result=await cloudinary.uploader.upload_stream;
 res.json({message:'Implement upload stream',result});
};
