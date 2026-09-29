import express from "express";
import 'dotenv/config';
import initApp from "./src/initApp.js";

const app = express();

initApp(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server is running on port ${PORT}`);
});