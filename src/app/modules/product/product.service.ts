import { ObjectId } from 'mongodb';
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
const deleteProductFromDB = async (id: string) => {
    const result = await ProductModel.deleteOne({ _id: new ObjectId(id) });
    return result;

}

const updateProductInDB = async (id: string, updateData: Partial<TProduct>) => {
    try {
        const result = await ProductModel.findByIdAndUpdate(
            new ObjectId(id),
            updateData,
            { new: true, runValidators: true }
        );

        if (!result) {
            throw new Error(`Product with id ${id} not found`);
        }

        return result;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}




interface SearchQuery {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    category?: string;
    tags?: string[];
}

const searchProductsInDB = async (query: SearchQuery) => {
    try {
        const dbQuery: any = {};

        if (query.name) {
            dbQuery.name = { $regex: query.name, $options: 'i' }; // Case-insensitive text search
        }

        if (query.minPrice || query.maxPrice) {
            dbQuery.price = {};
            if (query.minPrice) dbQuery.price.$gte = query.minPrice;
            if (query.maxPrice) dbQuery.price.$lte = query.maxPrice;
        }

        if (query.category) {
            dbQuery.category = query.category;
        }

        if (query.tags && query.tags.length > 0) {
            dbQuery.tags = { $all: query.tags }; // Matches products that have all the specified tags
        }

        const results = await ProductModel.find(dbQuery);

        return results;
    } catch (error) {
        console.error(`Error searching products with query ${JSON.stringify(query)}:`, error);
        throw error;
    }
}









export const ProductServices = {
    createProductIntoDB,
    getAllProductsIntoDB,
    getSingleProductIntoDB,
    deleteProductFromDB,
    updateProductInDB,
    searchProductsInDB
}