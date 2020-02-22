import { Request, Response, NextFunction } from 'express';
import { get, controller } from './decoretors';


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
}
