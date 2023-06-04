import { RequestHandler } from 'express'
import usersService from './users.service'

const userCreate: RequestHandler = async (req, res, next) => {
  try {
    const { user } = await req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user Created Succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export default {
  userCreate,
}
