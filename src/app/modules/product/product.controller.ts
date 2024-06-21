import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body.product;

        // data validation using zod
        const zodparseData = productValidationSchema.parse(product)

        const result = await ProductServices.createProductIntoDB(zodparseData);

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

const getAllProduct = async (req: Request, res: Response) => {
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

const getSingleProduct = async (req: Request, res: Response) => {
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

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductServices.getSingleProductIntoDB(id);
        res.status(200).json({
            success: true,
            message: "Product is deleted successfully",
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
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { product } = req.body;

        const result = await ProductServices.updateProductInDB(id, product);
        res.status(200).json({
            success: true,
            message: "Product is update successfully",
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



const searchProducts = async (req: Request, res: Response) => {
    try {
        const query = req.query; // Get query parameters from the request
        const searchResults = await ProductServices.searchProductsInDB(query);

        res.status(200).json({
            success: true,
            message: "Product search successfully",
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

export const ProductControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    searchProducts
}