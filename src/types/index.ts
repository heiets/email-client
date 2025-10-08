import { z } from "zod";

export const EmailSchema = z.object({
  id: z.number(),
  from: z.string(),
  subject: z.string(),
  date: z.string(),
  icon: z.string(),
  content: z.string(),
  isRead: z.boolean(),
  isDeleted: z.boolean(),
});

export const EmailListSchema = z.array(EmailSchema);

export type Email = z.infer<typeof EmailSchema>;

export type Folder = "inbox" | "read" | "deleted";
