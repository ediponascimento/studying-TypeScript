import express from 'express';
import { router } from './routes/loginRoutes';
import bodeParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decoretors/controller';

import './controllers/LoginControllers';

const app = express();

app.use(bodeParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['cookie'] }))

app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log(`App listen and running at http://localhost:3000`);
});
