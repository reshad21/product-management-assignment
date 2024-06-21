import { TOrderDocument } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (payload: TOrderDocument) => {
    const result = await OrderModel.create(payload);
    return result;
}

export const OrderServices = {
    createOrderIntoDB
}