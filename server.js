import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import { configDotenv } from "dotenv";
import db from "./db.js";
import bodyParser from "body-parser";
app.use(bodyParser.json());
import personRoutes from "./routes/person.route.js";
import menuItemRoutes from "./routes/menuItem.routes.js";
import passport from './auth/auth.js';
configDotenv();

//Middleware
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to : ${req.originalUrl}`
  );
  next();
};

const localAuthMiddleware = passport.authenticate("local", { session: false });
app.use(passport.initialize());

app.get("/", (res, req) => {
  req.send("Welcome to my Hotel....How can I Help you today?");
});

app.use(logRequest);

app.use("/person",localAuthMiddleware, personRoutes);
app.use("/menu", localAuthMiddleware, menuItemRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: 3000`);
});
