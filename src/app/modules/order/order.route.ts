import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.get('/search', OrderControllers.searchOrderProducts);
router.post('/create-order', OrderControllers.createProduct);
router.get('/', OrderControllers.getAllOrder);

export const OrderRoutes = router;