import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

const getAControlar = (req: Request, res: Response) => {
  const a = 1;
  res.send(a);
};

app.get('/', getAControlar);

export default app;
