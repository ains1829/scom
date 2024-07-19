import {z} from "zod";
export const adminSchema = z.object({
	id: z.string(),
	name: z.string(),
	firstName: z.string(),
	telephone: z.string(),
	email: z.string().email("Invalid email address"),
	birthdate: z.date(),
	image: z.string().url("Invalid image URL"),
	address: z.string(),
	profile: z.string(),
});

export type Admin = z.infer<typeof adminSchema>;
