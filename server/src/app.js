/** @format */

import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import "./passport";
import routes from "./routes";
import apiRouter from "./routers/apiRouters";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(passport.initialize());

if (process.env.PRODUCTION) {
  const clientApp = path.join(__dirname, "../../client/build/");
  app.use(express.static(clientApp));
}

app.use(routes.home, globalRouter);
app.use(routes.api, apiRouter);

export default app;
