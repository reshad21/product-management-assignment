import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/search', ProductControllers.searchProducts);
router.post('/create-product', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProduct);
router.get('/:id', ProductControllers.getSingleProduct);
router.delete('/:id', ProductControllers.deleteProduct);
router.put('/:id', ProductControllers.updateProduct);

export const ProductRoutes = router;