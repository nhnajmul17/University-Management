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
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const AcademicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: AcademicSemesterTitle },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    startMonth: { type: String, required: true, enum: AcademicSemesterMonths },
    endMonth: { type: String, required: true, enum: AcademicSemesterMonths },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

AcademicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester is already Exist!'
    );
  }

  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  AcademicSemesterSchema
);
