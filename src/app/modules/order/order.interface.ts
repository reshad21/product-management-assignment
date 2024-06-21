import { Types } from 'mongoose';

export type TOrderDocument = {
    email: string;
    productId: Types.ObjectId;
    price: number;
    quantity: number;
    createdAt: Date;
};