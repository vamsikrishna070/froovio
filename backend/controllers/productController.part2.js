import Product from '../models/Product.js';
import asyncHandler from '../middleware/asyncHandler.js';
import AppError from '../utils/AppError.js';

export const getFeaturedProducts = asyncHandler(async (req,res)=>{
  const products = await Product.findFeatured().limit(10);
  res.json({success:true,data:products});
});

export const getLatestProducts = asyncHandler(async (req,res)=>{
  const products = await Product.find({status:'published',isDeleted:false})
    .sort('-createdAt')
    .limit(10);
  res.json({success:true,data:products});
});

export const getRelatedProducts = asyncHandler(async (req,res)=>{
  const product = await Product.findById(req.params.id);
  if(!product) throw new AppError('Product not found',404);

  const products = await Product.find({
    category: product.category,
    _id: {$ne: product._id},
    isDeleted:false,
    status:'published'
  }).limit(8);

  res.json({success:true,data:products});
});

export const restoreProduct = asyncHandler(async (req,res)=>{
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {isDeleted:false},
    {new:true}
  );

  if(!product) throw new AppError('Product not found',404);
  res.json({success:true,data:product});
});

export const permanentDeleteProduct = asyncHandler(async (req,res)=>{
  const product = await Product.findByIdAndDelete(req.params.id);

  if(!product) throw new AppError('Product not found',404);

  res.json({success:true,message:'Product permanently deleted'});
});

export const getProductStats = asyncHandler(async (req,res)=>{
  const stats = await Product.aggregate([
    {$match:{isDeleted:false}},
    {$group:{
      _id:null,
      totalProducts:{$sum:1},
      averagePrice:{$avg:'$price'},
      totalStock:{$sum:'$stock'}
    }}
  ]);

  res.json({success:true,data:stats[0] || {}});
});
