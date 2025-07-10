import z from "zod";

export const patientFormSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phoneNumber: z.string().min(10, { message: "Phone number is required" }),
  sex: z.enum(["male", "female"], { required_error: "Sex is required" }),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;
