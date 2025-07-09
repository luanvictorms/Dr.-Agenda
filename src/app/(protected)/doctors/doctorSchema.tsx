import z from "zod";

export const doctorFormSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    speciality: z.string().trim().min(1, { message: "Specialty is required" }),
    appointmentPrice: z
      .number()
      .min(1, { message: "Appointment price is required" }),
    availableFromWeekDay: z.string(),
    availableToWeekDay: z.string(),
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
