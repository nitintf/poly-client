import { z } from 'zod';

export const signupFormSchema = z
  .object({
    email: z.string().email().min(2, { message: 'Email must be at least 2 characters' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(30, { message: 'Password must be at least 30 characters' }),
    confirmPassword: z.string(),
    firstName: z.string().min(2, { message: 'First Name must be at least 2 characters' }),
    lastName: z.string().min(2, { message: 'Last Name must be at least 2 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
