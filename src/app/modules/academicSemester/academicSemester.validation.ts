import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterMonths,
  AcademicSemesterTitle,
} from './academicSemester.constants';

const AcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...AcademicSemesterTitle] as [string, ...string[]], {
      required_error: 'Title Is Required',
    }),
    year: z.string({
      required_error: 'Year is Required',
    }),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
      required_error: 'Code Is Required',
    }),
    startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month Is Required',
    }),
    endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month Is Required',
    }),
  }),
});

const UpdateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...AcademicSemesterTitle] as [string, ...string[]], {
          required_error: 'Title Is Required',
        })
        .optional(),
      year: z
        .string({
          required_error: 'Year is Required',
        })
        .optional(),
      code: z
        .enum([...AcademicSemesterCode] as [string, ...string[]], {
          required_error: 'Code Is Required',
        })
        .optional(),
      startMonth: z
        .enum([...AcademicSemesterMonths] as [string, ...string[]], {
          required_error: 'Start Month Is Required',
        })
        .optional(),
      endMonth: z
        .enum([...AcademicSemesterMonths] as [string, ...string[]], {
          required_error: 'End Month Is Required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    { message: 'Either both title and code should be provided or Neither' }
  );

export const AcademicSemesterValidation = {
  AcademicSemesterZodSchema,
  UpdateAcademicSemesterZodSchema,
};
// await createUserZodSchema.parseAsync(req)
