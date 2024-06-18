import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
}
const getAllProductsIntoDB = async () => {
    const result = await ProductModel.find();
    return result;
}
const getSingleProductIntoDB = async (id: string) => {
    const result = await ProductModel.findById(id);
    return result;
}
export const ProductServices = {
    createProductIntoDB,
    getAllProductsIntoDB,
    getSingleProductIntoDB
}