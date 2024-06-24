import { Types } from 'mongoose';

export type TOrderDocument = {
    email: string;
    product: Types.ObjectId;
    price: number;
    quantity: number;
    createdAt: Date;
};