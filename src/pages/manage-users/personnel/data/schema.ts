import {z} from "zod";
export const personnelSchema = z.object({
	id: z.string(),
	name: z.string(),
	firstName: z.string(),
	matricule: z.string(),
	telephone: z.string(),
	email: z.string().email("Invalid email address"),
	birthdate: z.date(),
	image: z.string().url("Invalid image URL"),
	address: z.string(),
	region: z.string(),
	profile: z.string(),
});

export type Personnel = z.infer<typeof personnelSchema>;
