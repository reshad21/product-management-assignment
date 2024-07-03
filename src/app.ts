// const express = require('express')
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import notFound from './app/middlewares/notFound';
import { OrderRoutes } from './app/modules/order/order.route';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express()
// const port = 3000

//parser
app.use(express.json())
app.use(cors())



//application routes
app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
//Not Found
app.use(notFound);
export default app;
