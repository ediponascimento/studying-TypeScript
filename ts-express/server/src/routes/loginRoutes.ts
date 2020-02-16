import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hi there');
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  
    <form method="POST">
      <div>
        <label>Email</label>
        <input type="email" name="email" placeholder="e-mail"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="password"/>
      </div>
      <button type="submit">Login</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { password, email } = req.body;
  
  if ( email ) { // type guard
    res.send(email);
  } else {
    res.send('You must provide an email');
  }
});

export { router };