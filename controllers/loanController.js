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
const newLoan = asyncHandler(async (req, res) => {
  let loanValue = req.body;
  console.log('See loan details', loanValue)
  if(loanValue){
    res.sendStatus(200)
  }
  else res.sendStatus(400)
  // try {
  //   let pool = await mssql.connect(sqlConfig);
  //   let result = await pool.request().query(`INSERT INTO [dbo].[Loans] (
  //     [AccountNo],
  //     [AccountName],
  //     [PhoneNo],
  //     [Email],
  //     [Amount],
  //     [Duration],
  //     [LoanType],
  //     [Guarantor],
  //     [Justification],
  //   ) VALUES (
  //     loanValue.accountNo,
  //     loanValue.accountName,
  //     loanValue.phoneNo,
  //     loanValue.email,
  //     loanValue.duration,
  //     loanValue.loanType,
  //     loanValue.guarantor,
  //     loanValue.justification,
  //   )`);
  //   console.log(result);
  //   res.json(result);
  //   mssql.close;
  // } catch (error) {
  //   console.log(error.message);
  //   mssql.close;
  // }
});


export { newLoan };