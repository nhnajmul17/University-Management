import { Request, Response } from 'express'
import usersService from './users.service'

const userCreate = async (req: Request, res: Response) => {
  try {
    const { user } = await req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user Created Succesfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create User',
      error: error,
    })
  }
}

export default {
  userCreate,
}
