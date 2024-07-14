import {z} from "zod";

export const companySchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	nif: z.string(),
	stat: z.string(),
	numerofiscal: z.string(),
	telephone: z.string(),
	responsable: z.string(),
	address: z.string(),
	region: z.string(),
	district: z.string(),
});

export type Company = z.infer<typeof companySchema>;
