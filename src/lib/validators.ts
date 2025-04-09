import { z } from "zod";

export const dealershipFormSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(255)
    .regex(/^[a-zA-Z0-9]*$/),
  company: z.string().max(255),
  mobile_phone: z.string().regex(/^0(\s*)7(\s*)(\d(\s*)){9}$/),
  email_address: z.string().email().max(255).min(5),
  postcode: z
    .string()
    .regex(/^[a-zA-Z0-9]*$/)
    .max(30),
  pay_later: z.boolean(),
  pay_now: z.boolean(),
});
