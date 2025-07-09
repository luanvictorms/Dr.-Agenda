import z from "zod";

export const upsertDoctorSchema = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().trim().min(1, { message: "Name is required" }),
    speciality: z.string().trim().min(1, { message: "Specialty is required" }),
    appointmentPriceInCents: z
      .number()
      .min(1, { message: "Appointment price is required" }),
    availableFromWeekDay: z.number().min(0).max(6),
    availableToWeekDay: z.number().min(0).max(6),
    availableFromTime: z
      .string()
      .min(1, { message: "Start appointment time is required" }),
    availableToTime: z
      .string()
      .min(1, { message: "End appointment time is required" }),
  })
  .refine(
    (data) => {
      return data.availableFromTime < data.availableToTime;
    },
    {
      message: "Start appointment time must be before end appointment time",
      path: ["availableToTime"],
    },
  );

export type UpsertDoctorSchema = z.infer<typeof upsertDoctorSchema>;
