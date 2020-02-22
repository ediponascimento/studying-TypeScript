import { Request, Response, NextFunction } from 'express';
import { get, controller, bodyValidator, post } from './decoretors';


@controller('/auth')  
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
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
  `)
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { password, email } = req.body;
    
    if (email && password && email === 'edipoesn@gmail.com' && password === 'teste') {
      // mark this person as logged in
      req.session = { loggedIn: true };
      // redirect them to the root route
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
}
