import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email().min(2, { message: 'Email must be at least 2 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(30, { message: 'Password must be at least 30 characters' }),
});
