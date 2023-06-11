import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { AcademicDepartmentService } from './academicDepartment.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { AcademicDepartmentFilterableFields } from './academicDepartment.constant';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await AcademicDepartmentService.createDepartment(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department Created Successfully',
    data: result,
  });
});

const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, AcademicDepartmentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicDepartmentService.getAllDepartment(
    filters,
    paginationOptions
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Department Retrieved Successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicDepartmentService.getSingleDepartment(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department Retrieved Successfully',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await AcademicDepartmentService.updateDepartment(
    id,
    updateData
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department Updated Succesfully',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicDepartmentService.deleteDepartment(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department Deleted Succesfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
