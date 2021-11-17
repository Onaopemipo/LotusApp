import express from "express";
import cors from "cors";
import { newLoan } from "../controllers/loanController.js";
// const { branches,accountType, accounts, deposits, withdrawals } = require("../controllers/setupController.js");

const router = express.Router();

const app = express();

app.use(cors());

router.post("/loanApplication", cors({origin: '*'}), newLoan);

export default router;