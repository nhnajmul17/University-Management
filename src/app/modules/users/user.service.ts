import mongoose from 'mongoose';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateFacultyId, generateStudentId } from './user.utils';
import { Student } from '../student/student.model';
import httpStatus from 'http-status';
import { IFaculty } from '../faculty/faculty.interface';
import { Faculty } from '../faculty/faculty.model';

const createStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  //default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  //set role
  user.role = 'student';

  // generate Student Id

  const academicSemester = await AcademicSemester.findById(
    student.academicSemester
  );

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const id = await generateStudentId(academicSemester);
    student.id = id;
    user.id = id;

    const newStudent = await Student.create([student], { session });
    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Student');
    }

    user.student = newStudent[0]._id;

    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        {
          path: 'academicFaculty',
        },
        {
          path: 'academicDepartment',
        },
      ],
    });
  }
  return newUserAllData;
};

const createFaculty = async (
  faculty: IFaculty,
  user: IUser
): Promise<IUser | null> => {
  //default Password
  if (!user.password) {
    user.password = config.default_faculty_pass as string;
  }

  //set role
  user.role = 'faculty';

  let newUserAllData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    //set faculty id
    const id = await generateFacultyId();
    user.id = id;
    faculty.id = id;

    //create new Faculrty
    const newFaculty = await Faculty.create([faculty], { session });
    if (!newFaculty.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Create Faculty');
    }
    user.faculty = newFaculty[0]._id;

    //create New user For Faculty

    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To create User');
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'faculty',
      populate: [{ path: 'academicFaculty' }, { path: 'academicDepartment' }],
    });
  }

  return newUserAllData;
};

export const UserService = {
  createStudent,
  createFaculty,
};
