import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', userRoute)

//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
