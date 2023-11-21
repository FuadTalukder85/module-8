import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './modules/student/student.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applications routes
app.use('/api/v1/students', StudentRoutes);

const getAControlar = (req: Request, res: Response) => {
  const a = 1;
  res.send(a);
};

app.get('/', getAControlar);

export default app;
