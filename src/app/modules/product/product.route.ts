import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/searchTerm', ProductControllers.searchProducts);
router.post('/create-product', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProduct);
router.get('/:productId', ProductControllers.getSingleProduct);
router.delete('/:productId', ProductControllers.deleteProduct);
router.put('/:productId', ProductControllers.updateProduct);

export const ProductRoutes = router;