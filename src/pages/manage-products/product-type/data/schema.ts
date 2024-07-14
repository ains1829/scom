import {z} from "zod";

export const productTypeSchema = z.object({
	id: z.string(),
	unit: z.string(),
	name: z.string(),
});

export type ProductType = z.infer<typeof productTypeSchema>;
