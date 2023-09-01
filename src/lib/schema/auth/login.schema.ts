import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email().min(2, { message: 'Email must be at least 2 characters' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(18, { message: 'Password must be at least 18 characters' }),
});
