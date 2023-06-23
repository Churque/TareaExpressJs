import express from "express";
import userRouter from "./routes/userRoutes.js";
import cors from 'cors';
import environments from './configs/environments.js';
import connect from './configs/mongo.js';
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", userRouter);

console.log("Connecting to database...");
connect()
  .then(() => {
    console.log("Mongo connected successful");
    app.listen(3000, async () => {
      console.log(`Server is running on PORT: 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });