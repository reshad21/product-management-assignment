import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderControllers.createProduct);
router.get('/', OrderControllers.getAllOrder);

export const OrderRoutes = router;