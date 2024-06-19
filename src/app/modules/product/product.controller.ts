import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProductController = async (req: Request, res: Response) => {
    try {
        const product = req.body.product;
        const result = await ProductServices.createProductIntoDB(product);
        res.status(200).json({
            success: true,
            message: 'Product is created successfully',
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

const getAllProductController = async (req: Request, res: Response) => {
    try {
        const product = await ProductServices.getAllProductsIntoDB();
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

const getSingleProductController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductServices.getSingleProductIntoDB(id);
        res.status(200).json({
            success: true,
            message: "Product is retrive successfully",
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

export const ProductControllers = {
    createProductController,
    getAllProductController,
    getSingleProductController
}