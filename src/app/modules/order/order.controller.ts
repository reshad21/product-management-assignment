import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const order = req.body;

        // data validation using zod
        // const zodparseData = productValidationSchema.parse(product)

        const result = await OrderServices.createOrderIntoDB(order);

        res.status(200).json({
            success: true,
            message: 'Order is created successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message: "Something went wrong",
            error: error
        })
    }
}


export const OrderControllers = {
    createProduct
}