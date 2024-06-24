import mongoose from "mongoose";
import { z } from "zod";

// Custom Zod transformer to convert valid strings to ObjectId
const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/).transform((val) => new mongoose.Types.ObjectId(val));

// Define the Zod schema for order validation
const orderValidationSchema = z.object({
    email: z.string().email(),
    product: objectIdSchema,
    price: z.number().positive(),
    quantity: z.number().positive().int(),
    createdAt: z.date().default(new Date())  // Optional since default value will be provided
});


export default orderValidationSchema;
