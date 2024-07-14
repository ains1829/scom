import {z} from "zod";

export const anomalySchema = z.object({
	id: z.string(),
	name: z.string(),
});

export type Anomaly = z.infer<typeof anomalySchema>;
