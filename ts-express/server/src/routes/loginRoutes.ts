import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();

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
  
  if (email && password && email === 'edipoesn@gmail.com' && password === 'teste') {
    // mark this person as logged in
    req.session = { loggedIn: true };
    // redirect them to the root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/Login">Login</a>
      </div>
    `);
  }
});

export { router };