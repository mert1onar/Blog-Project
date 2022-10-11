import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const databaseId ="admin"
const databasepsw="3wGnZEMPSylyi7lO"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)

mongoose
  .connect(
    `mongodb+srv://${databaseId}:${databasepsw}@cluster0.81iyhq6.mongodb.net/Blog?retryWrites=true&w=majority`
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to database and Listenening to local host 5000")
  )
  .catch((err) => console.log(err));

