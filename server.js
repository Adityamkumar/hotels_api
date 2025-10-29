import express from "express";
const app = express();
const PORT = process.env.PORT || 3000
import {configDotenv} from "dotenv";
import db from "./db.js";
import bodyParser from "body-parser";
app.use(bodyParser.json());
import personRoutes from './routes/person.route.js'
import menuItemRoutes from './routes/menuItem.routes.js'

configDotenv()
app.get("/", (res, req) => {
  req.send("Welcome to my Hotel....How can I Help you today?");
});

app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)

app.listen(PORT, () => {
  console.log(`Server Running on PORT: 3000`);
});
