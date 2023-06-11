import {
  IAcademicFaculty,
  AcademicFacultyModel,
} from './academicFaculty.interface';
import { Schema, model } from 'mongoose';

const AcademicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  AcademicFacultySchema
);
