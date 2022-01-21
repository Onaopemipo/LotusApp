import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import path from "path";
import setupRoute from "./routers/setupRoute.js";
import accountRoute from "./routers/accountRoute.js";
import loanRoute from "./routers/loanRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.cjs";
import mssql from "mssql";
const app = express();

// dotenv.config();
app.use(express.json());
app.use("/api/Common", setupRoute);
app.use("/api/Account", accountRoute);
app.use("/api/Loan", loanRoute);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const sqlConfig = {
  user: "superdbuser",
  password: "J@p@n123",
  database: "LotusPaperless",
  server: "mssql-35101-0.cloudclusters.net",
  port: 35101,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true,
  },
};
mssql
  .connect(sqlConfig)
  .then((pool) => {
    console.log(pool);
    if (pool.connecting) {
      console.log("connecting");
    }
    if (pool.connected) {
      console.log("connected now!");
    }
    return pool;
  })
  .catch(function (err) {
    console.log("failed to open connection to database");
    console.log(err);
  });

mssql.on("error", (err) => {
  console.log(err.message);
});

const __dirname = path.resolve();
const PORT = process.env.PORT || 9600;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
