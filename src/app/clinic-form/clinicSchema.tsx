import z from "zod";

export const clinicFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Clinic name is required" }),
});
