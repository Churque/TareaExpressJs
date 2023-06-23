import express from "express";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messages.routes.js"
import authenticationRouter from "./routes/authentication.routes.js";
import authorRouter from "./routes/author.routes.js";
import cors from 'cors';
import connect from './configs/mongo.js';
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/messages",messageRouter)
app.use("/auth",authenticationRouter)
app.use("",authorRouter)

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
