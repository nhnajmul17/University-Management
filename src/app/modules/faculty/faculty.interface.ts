import { Model, Types } from 'mongoose';
import { UserName } from '../student/student.interface';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';

export type IFaculty = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  designation: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  academicDepartment: Types.ObjectId | IAcademicDepartment;
  profileImage?: string;
};

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;
