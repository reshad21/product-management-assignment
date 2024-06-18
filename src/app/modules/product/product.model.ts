import { Schema, model } from "mongoose";
import { Inventory, TProduct, Variant } from "./product.interface";

const variantSchema = new Schema<Variant>({
    type: {
        type: String,
        required: [true, 'Variant type is required'],
        trim: true,
    },
    value: {
        type: String,
        required: [true, 'Variant value is required'],
        trim: true,
    },
});

const inventorySchema = new Schema<Inventory>({
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'InStock status is required'],
    },
});



const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative'],
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true,
    },
    tags: {
        type: [String],
        required: [true, 'Product tags are required'],
    },
    variants: {
        type: [variantSchema],
        required: [true, 'Product variants are required'],
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Product inventory is required'],
    },
});


// 3. Create a Model.
export const ProductModel = model<TProduct>('Product', productSchema);