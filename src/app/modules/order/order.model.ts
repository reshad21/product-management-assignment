import { Schema, model } from "mongoose";
import { TOrderDocument } from "./order.interface";

const orderSchema = new Schema<TOrderDocument>({
    email: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const OrderModel = model<TOrderDocument>('Order', orderSchema);