import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors());

//parser
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));

//application routes
app.use('/api/v1', router);

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //   Promise.reject(new Error('Unhandled Promise Rejection'))
//   throw new Error('ERROR OCCURED');
//   //   res.send('Working Successfully')
//   // next('Error Found')
// });

//Global error Handler
app.use(globalErrorHandler);

//handle 404 Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API NOT FOUND',
      },
    ],
  });
  next();
});

export default app;
