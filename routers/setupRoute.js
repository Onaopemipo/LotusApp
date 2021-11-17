import express from "express";
import cors from "cors";
import { dashboardData, accountOfficer, accountCategories, industries, accountType } from "../controllers/setupController.js";
// const { branches,accountType, accounts, deposits, withdrawals } = require("../controllers/setupController.js");

const router = express.Router();

const app = express();

app.use(cors());

router.get("/fetchDashboardData", cors({origin: '*'}), dashboardData);
router.get("/fetchAccountOfficer", cors({origin: '*'}), accountOfficer);
router.get("/fetchIndustries", cors({origin: '*'}), industries);
router.get("/fetchCategories", cors({origin: '*'}), accountCategories);
router.get("/fetchAccountTypes", cors({origin: '*'}), accountType);

export default router;