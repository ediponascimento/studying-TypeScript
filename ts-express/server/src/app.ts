import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `) 
});

app.listen(3000, () => {
  console.log(`App listen and running at http://localhost:3000`);
});
