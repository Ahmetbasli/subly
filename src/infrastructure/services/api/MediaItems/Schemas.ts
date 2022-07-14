import { z } from "zod";

const mediaSchema = z.object({
  media: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      cover: z.string(),
      languages: z.array(z.string()),
      status: z.enum(["ready", "error", "transcribing"]),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
  ),
});

export type Media = z.infer<typeof mediaSchema>;

export default mediaSchema;
