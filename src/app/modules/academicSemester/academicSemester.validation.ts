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
    year: z.number({
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

export const AcademicSemesterValidation = {
  AcademicSemesterZodSchema,
};
// await createUserZodSchema.parseAsync(req)
