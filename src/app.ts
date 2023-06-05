import express, { Application, urlencoded } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', UserRoutes)

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //   Promise.reject(new Error('Unhandled Promise Rejection'))
//   throw new Error('ERROR OCCURED')
//   //   res.send('Working Successfully')
//   // next('Error Found')
// })

//Global error Handler
app.use(globalErrorHandler)

export default app
