import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import { countryRouter } from './src/routes/country.route';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World, this is Country App!');
});

app.use('/country', countryRouter);

app
  .listen(PORT, () => {
    console.log('Server running at PORT:', PORT);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });
