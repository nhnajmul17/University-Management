import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterMonths,
  AcademicSemesterTitle,
} from './academicSemester.constants';

const AcademicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: AcademicSemesterTitle },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    startMonth: { type: String, required: true, enum: AcademicSemesterMonths },
    endMonth: { type: String, required: true, enum: AcademicSemesterMonths },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  AcademicSemesterSchema
);
