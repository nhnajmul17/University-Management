import express, { Application, urlencoded } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', userRoute)

//Global error Handler
app.use(globalErrorHandler)

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Working Successfully')
//   // throw new ApiError('Error Hoise')
//   // next('Error Found')
// })

export default app
