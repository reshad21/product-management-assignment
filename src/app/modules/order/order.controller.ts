import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        // data validation using zod
        const zodparseData = orderValidationSchema.parse(order)
        const result = await OrderServices.createOrderIntoDB(zodparseData);

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

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const product = await OrderServices.getAllOrderIntoDB();
        res.status(200).json({
            success: true,
            message: "Product retrive successfully",
            data: product,
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message: "Something went wrong",
            error: error
        })
    }
}

const searchOrderProducts = async (req: Request, res: Response) => {
    try {
        const query = req.query; // Get query parameters from the request
        const searchResults = await OrderServices.searchOrderProductsInDB(query);

        res.status(200).json({
            success: true,
            message: "Order search successfully",
            data: searchResults,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error
        });
    }
}


export const OrderControllers = {
    createProduct,
    getAllOrder,
    searchOrderProducts
}