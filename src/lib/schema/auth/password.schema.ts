import * as z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email().min(3, 'Email should be at least 3 letters long'),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(30, { message: 'Password must be at least 30 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
