import { Request, Response } from 'express';
import { get } from './decoretors/routes';

@controller('/')
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
