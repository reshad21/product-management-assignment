import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProductController);
router.get('/', ProductControllers.getAllProductController);
router.get('/:id', ProductControllers.getSingleProductController);

export const ProductRoutes = router;