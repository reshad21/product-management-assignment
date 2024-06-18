// const express = require('express')
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express()
// const port = 3000

//parser
app.use(express.json())
app.use(cors())



//application routes
app.use('/api/v1/products', ProductRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;
