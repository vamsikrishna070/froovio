import Product from '../models/Product.js';
import ApiFeatures from '../utils/ApiFeatures.js';
import asyncHandler from '../middleware/asyncHandler.js';
import AppError from '../utils/AppError.js';

export const createProduct = asyncHandler(async (req,res)=>{
  const product = await Product.create(req.body);
  res.status(201).json({success:true,data:product});
});

export const getProducts = asyncHandler(async (req,res)=>{
  const features = new ApiFeatures(Product.find({isDeleted:false}), req.query)
    .search().filter().sort().limitFields().paginate();

  const products = await features.query;
  res.json({success:true,count:products.length,data:products});
});

export const getProductById = asyncHandler(async (req,res)=>{
  const product = await Product.findById(req.params.id)
    .populate('category')
    .populate('brand')
    .populate('seller','name email');

  if(!product || product.isDeleted){
    throw new AppError('Product not found',404);
  }

  res.json({success:true,data:product});
});

export const updateProduct = asyncHandler(async (req,res)=>{
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
    runValidators:true
  });

  if(!product){
    throw new AppError('Product not found',404);
  }

  res.json({success:true,data:product});
});

export const deleteProduct = asyncHandler(async (req,res)=>{
  const product = await Product.findById(req.params.id);

  if(!product){
    throw new AppError('Product not found',404);
  }

  product.isDeleted = true;
  await product.save();

  res.json({success:true,message:'Product deleted successfully'});
});
