import express from "express";
import { mathRoutes } from "./routes/mathRoutes";
import { PORT } from "./env.js";

const app = express();

app.get("/", mathRoutes);

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});
