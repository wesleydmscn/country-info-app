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
  })
);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World, this is Country App!');
});

app.use('/country', countryRouter);

const startServer = (port: number) => {
  const server = app.listen(port, () => {
    console.log(`Server running at PORT: ${port}`);
  });

  server.on('error', (error: any) => {
    if (error.code === 'EADDRINUSE') {
      const nextPort = port + 1;

      console.error(`Port ${port} is already in use, trying another port...`);

      startServer(nextPort);
    } else {
      throw new Error(error.message);
    }
  });
};

startServer(Number(PORT));
