import express from 'express';
import { router } from './routes/loginRoutes';
import bodeParser from 'body-parser';

const app = express();

app.use(bodeParser.urlencoded({extended: true}));
app.use(router);

app.listen(3000, () => {
  console.log(`App listen and running at http://localhost:3000`);
});
