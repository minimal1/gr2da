/** @format */

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import routes from "./routes";
import apiRouter from "./routers/apiRouters";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.api, apiRouter);

if (process.env.PRODUCTION) {
  const clientApp = path.join(__dirname, "../../client/build/");
  console.log(clientApp);
  app.use(express.static(clientApp));
}
export default app;
