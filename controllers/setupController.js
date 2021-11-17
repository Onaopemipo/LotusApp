import asyncHandler from "express-async-handler";
import mssql from "mssql";
// const asyncHandler = require("express-async-handler");
// const mssql = require("mssql")
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
const dashboardData = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("select * from dbo.DropdownValues");
    console.log(result);
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});

const accountOfficer = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("select * from dbo.UserAccounts");
    console.log(result);
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});


const industries = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("SELECT * from dbo.SystemLogs WHERE Action = 'TellerCashWithdrawal'");
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});

const accountCategories = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("SELECT * from dbo.SystemLogs WHERE Action = 'TellerCashDeposit'");
     res.json(result);
     mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});


const accountType = asyncHandler(async (req, res) => {
  let accountId = req.params.id;
  try {

    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("select * from dbo.UserAccounts where AccountType = '" +accountId+ "'");
    console.log(result);
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});


export { dashboardData, accountOfficer, accountCategories, industries, accountType };