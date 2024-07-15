import {z} from "zod";

export const teamSchema = z.object({
	id: z.string(),
	name: z.string(),
	leader: z.string(),
	members: z.array(z.string()),
});

export type Team = z.infer<typeof teamSchema>;
