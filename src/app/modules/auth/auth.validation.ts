import { z } from 'zod';

const loginZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'Id is Required',
    }),
    password: z.string({
      required_error: 'Password is Required',
    }),
  }),
});
const refreshZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token  is Required',
    }),
  }),
});
const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old Password  is Required',
    }),
    newPassword: z.string({
      required_error: 'New Password  is Required',
    }),
  }),
});

export const AuthValidation = {
  loginZodSchema,
  refreshZodSchema,
  changePasswordZodSchema,
};
