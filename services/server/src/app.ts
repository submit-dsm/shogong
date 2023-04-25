import express, { Application } from "express";
import loader from "./loader";

const startServer = async () => {
  const app: Application = express();
  await loader(app);
  app.listen(8080);
};

startServer()
  .then(() => console.log(`Server Run on http://localhost:8080`))
  .catch((e) => {
    console.error("Server Run Failed");
    console.error(e);
    process.exit(1);
  });
