import express from "express";
import mathRoutes from "./routes/mathRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

app.use("/", mathRoutes);

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});
