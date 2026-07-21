import Product from '../models/Product.js';
import ApiFeatures from '../utils/ApiFeatures.js';
import asyncHandler from '../middleware/asyncHandler.js';
import AppError from '../utils/AppError.js';

export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
});

export const getProducts = asyncHandler(async (req, res) => {
  const features = new ApiFeatures(Product.find({ isDeleted: false }), req.query)
    .search()
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const products = await features.query;
  res.json({ success: true, count: products.length, data: products });
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate('category')
    .populate('brand')
    .populate('seller', 'name email');

  if (!product || product.isDeleted) {
    throw new AppError('Product not found', 404);
  }

  res.json({ success: true, data: product });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  res.json({ success: true, data: product });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  product.isDeleted = true;
  await product.save();

  res.json({ success: true, message: 'Product deleted successfully' });
});

export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.findFeatured().limit(10);
  res.json({ success: true, data: products });
});

export const getLatestProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ status: 'published', isDeleted: false })
    .sort('-createdAt')
    .limit(10);
  res.json({ success: true, data: products });
});

export const getRelatedProducts = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new AppError('Product not found', 404);

  const products = await Product.find({
    category: product.category,
    _id: { $ne: product._id },
    isDeleted: false,
    status: 'published',
  }).limit(8);

  res.json({ success: true, data: products });
});

export const restoreProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { isDeleted: false },
    { new: true }
  );

  if (!product) throw new AppError('Product not found', 404);
  res.json({ success: true, data: product });
});

export const permanentDeleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) throw new AppError('Product not found', 404);

  res.json({ success: true, message: 'Product permanently deleted' });
});

export const getProductStats = asyncHandler(async (req, res) => {
  const stats = await Product.aggregate([
    { $match: { isDeleted: false } },
    {
      $group: {
        _id: null,
        totalProducts: { $sum: 1 },
        averagePrice: { $avg: '$price' },
        totalStock: { $sum: '$stock' },
      },
    },
  ]);

  res.json({ success: true, data: stats[0] || {} });
});
