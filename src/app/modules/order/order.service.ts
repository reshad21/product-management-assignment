import { TOrderDocument } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (payload: TOrderDocument) => {
    const result = await OrderModel.create(payload);
    return result;
}

const getAllOrderIntoDB = async () => {
    const result = await OrderModel.find();
    return result;
}


interface SearchQuery {
    email?: string;
}

const searchOrderProductsInDB = async (query: SearchQuery) => {
    try {
        // Initialize dbQuery with proper typing
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dbQuery: { [key: string]: any } = {};

        if (query.email) {
            dbQuery.email = { $regex: query.email, $options: 'i' }; // Case-insensitive text search
        }

        const results = await OrderModel.find(dbQuery);

        return results;
    } catch (error) {
        console.error(`Error searching products with query ${JSON.stringify(query)}:`, error);
        throw error;
    }
}



export const OrderServices = {
    createOrderIntoDB,
    getAllOrderIntoDB,
    searchOrderProductsInDB
}