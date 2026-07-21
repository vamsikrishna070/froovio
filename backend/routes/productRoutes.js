import { Router } from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getLatestProducts,
  getRelatedProducts,
  restoreProduct,
  permanentDeleteProduct,
  getProductStats
} from '../controllers/productController.js';
import { productValidator } from '../validators/productValidator.js';
import { protect, authorize } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/latest', getLatestProducts);
router.get('/stats', protect, authorize('admin'), getProductStats);
router.get('/:id', getProductById);
router.get('/:id/related', getRelatedProducts);

router.post('/', protect, authorize('admin','seller'), upload.array('images',8), productValidator, createProduct);
router.put('/:id', protect, authorize('admin','seller'), upload.array('images',8), productValidator, updateProduct);
router.patch('/:id/restore', protect, authorize('admin'), restoreProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);
router.delete('/:id/permanent', protect, authorize('admin'), permanentDeleteProduct);

export default router;
