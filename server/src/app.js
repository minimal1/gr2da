/** @format */

import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import "./passport";
import routes from "./routes";
import apiRouter from "./routers/apiRouters";
import globalRouter from "./routers/globalRouter";
import mongoose from "mongoose";
import { localMiddleWare } from "./middlewares";

const app = express();
const CookieStore = MongoStore(session);

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,

    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.PRODUCTION) {
  const clientApp = path.join(__dirname, "../../client/build/");
  app.use(express.static(clientApp));
}

app.use(routes.home, globalRouter);
app.use(routes.api, apiRouter);

export default app;
