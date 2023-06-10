import { Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const userCreate = catchAsync(async (req: Request, res: Response) => {
  const { user } = await req.body;
  const result = await UserService.createUser(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user Created Succesfully',
    data: result,
  });
});

export const UserController = {
  userCreate,
};
