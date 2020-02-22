import express from 'express';
import bodeParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter'
import './controllers/LoginController';
import './controllers/RootControle';

const app = express();

app.use(bodeParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['cookie'] }))

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log(`App listen and running at http://localhost:3000`);
});
