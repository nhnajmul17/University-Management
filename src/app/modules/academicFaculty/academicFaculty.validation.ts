import { z } from 'zod';

const createFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is Required',
    }),
  }),
});

const updateFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is Required',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createFacultyZodSchema,
  updateFacultyZodSchema,
};
