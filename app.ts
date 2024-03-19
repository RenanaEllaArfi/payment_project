import path from 'path';
import express, { Application } from 'express';
import cors from 'cors';
import log from '@ajar/marker';
import {verifyAuth} from "./src/middlewares/authenticate-middlewares"
import fs from 'fs';
import raw from "./src/middlewares/route.async.wrapper";
import businessCompanyRouter from "./src/routes/business-company-router";
import userRouter from "./src/routes/user-router";
import statisticsRouter from "./src/routes/statistics-router";
import meetingRouter from "./src/routes/meeting-router";
const { PORT = 8080, HOST = 'localhost' } = process.env;

class App {
  private readonly app: Application;

  readonly API_PATH = '/api/account';

  constructor() {
    this.configEnvVariables();
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private configEnvVariables() {
    process.env = JSON.parse(fs.readFileSync('./app-config.json', 'utf8'));
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(raw(verifyAuth));
  }

  private initializeRoutes() {
    this.app.use(`${this.API_PATH}/CompanyBusiness`, businessCompanyRouter.router);
    this.app.use(`${this.API_PATH}/meeting`, meetingRouter.router);
    this.app.use(`${this.API_PATH}/family`, userRouter.router);
    this.app.use(`${this.API_PATH}`, statisticsRouter.router);
  }

  async start() {
    this.app.listen(Number(PORT), HOST as string, () => {
      log.magenta('api is live on', ` ✨⚡  http://${HOST}:${PORT} ✨⚡`);
    });
  }
}

const app = new App();
export default app;
