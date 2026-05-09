import type { Messages } from "@/lib/i18n/messages/bg";
import { z } from "zod";

const timeEnum = z.enum([
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]);

export function createMehanaBookingSchema(errors: Messages["booking"]["errors"]) {
  return z.object({
    name: z.string().trim().min(2, errors.name),
    email: z.string().trim().email(errors.email),
    phone: z
      .string()
      .trim()
      .min(8, errors.phone)
      .max(32, errors.phone)
      .regex(/^[\d\s+()\-]+$/, errors.phoneFormat),
    date: z
      .string()
      .min(1, errors.dateRequired)
      .refine((d) => /^\d{4}-\d{2}-\d{2}$/.test(d), errors.dateFuture)
      .refine((d) => {
        const picked = new Date(`${d}T12:00:00`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return !Number.isNaN(picked.getTime()) && picked >= today;
      }, errors.dateFuture),
    time: timeEnum,
    guests: z.coerce
      .number()
      .min(1, errors.guestsMin)
      .max(20, errors.guestsMax),
    notes: z.string().max(500).optional(),
  });
}

export type MehanaBookingFormValues = z.infer<
  ReturnType<typeof createMehanaBookingSchema>
>;
