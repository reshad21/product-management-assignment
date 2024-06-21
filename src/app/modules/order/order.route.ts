import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/create-product', OrderControllers.createProduct);

export const OrderRoutes = router;