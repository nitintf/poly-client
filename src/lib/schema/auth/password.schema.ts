import * as z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email().min(3, 'Email should be at least 3 letters long'),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(18, { message: 'Password must be at least 18 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
