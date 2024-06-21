import { z } from "zod";

// Define the Zod schema for Variant
const variantValidationSchema = z.object({
    type: z.string().trim().min(1, "Variant type is required"),
    value: z.string().trim().min(1, "Variant value is required"),
});

// Define the Zod schema for Inventory
const inventoryValidationSchema = z.object({
    quantity: z.number().min(0, "Quantity cannot be negative"),
    inStock: z.boolean(),
});

// Define the Zod schema for Product
const productValidationSchema = z.object({
    name: z.string().trim().min(1, "Product name is required"),
    description: z.string().trim().min(1, "Product description is required"),
    price: z.number().min(0, "Price cannot be negative"),
    category: z.string().trim().min(1, "Product category is required"),
    tags: z.array(z.string().trim().min(1, "Product tag cannot be empty")),
    variants: z.array(variantValidationSchema).min(1, "Product variants are required"),
    inventory: inventoryValidationSchema,
});

export default productValidationSchema;
