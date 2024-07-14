import {z} from "zod";

export const productSchema = z.object({
	id: z.string(),
	productType: z.string(),
	name: z.string(),
});

export type Product = z.infer<typeof productSchema>;
