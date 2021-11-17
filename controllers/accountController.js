import asyncHandler from "express-async-handler";
import mssql from "mssql";

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
      console.log("connected");
    }
    return pool;
  })
  .catch(function (err) {
    console.log("failed to open connection to database");
    console.log(err);
  });


const accounts = asyncHandler(async (req, res) => {
  const UserAccount = {
            id: 1,
            name: "Philip Ogungbenro",
            accountNo: "0141944727",
            bank: "GTB"
        }
        res.sendStatus(200).send(UserAccount); 
});


const withdrawals = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("SELECT * from [dbo].[SystemLogs] WHERE Action = 'TellerCashWithdrawal'");
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});

const deposits = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("SELECT * from [dbo].[SystemLogs] WHERE Action = 'TellerCashDeposit'");
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
    let result = await pool.request().query("select * from [dbo].[UserAccounts] where AccountType = '" +accountId+ "'");
    console.log(result);
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});

// const testMe = asyncHandler(async (req,res) => {
//     const UserAccount = {
//         id: 1,
//         name: "Philip Ogungbenro",
//         accountNo: "0141944727",
//         bank: "GTB"
//     }
//     res.sendStatus(200).send(UserAccount); 
// })
// const singleAccounts = asyncHandler(async (req, res) => {
//   try {
//     let pool = await mssql.connect(sqlConfig);
//     let result = await pool.request().query("select * from dbo.UserAccounts");
//     console.log(result);
//     res.json(result);
//     mssql.close;
//   } catch (error) {
//     console.log(error.message);
//     mssql.close;
//   }
// });

const cardRequest = asyncHandler(async (req, res) => {
    let requestBody = req.body;
    console.log('See the body', requestBody)
    
  });
const userBvn = asyncHandler(async (req, res) => {
  let accountNo = req.params.accountNo;
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("select * from [dbo].[vwPatientDOBInfo] where DateOfBirth = '" +accountNo+ "'");
    console.log(result);
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});

const userNin = asyncHandler(async (req, res) => {
  let accountNo = req.params.accountNo;
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("select * from [dbo].[vwPatientDOBInfo] where DateOfBirth = '" +accountNo+ "'");
    console.log(result);
    res.json(result);
    mssql.close;
  } catch (error) {
    console.log(error.message);
    mssql.close;
  }
});

const depositFx = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200);
  }
  else res.status(400).send('Failure')
})

 const withdrawalFx = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200);
  }
  else res.status(400).send('Failure')
})

const newCardRequest = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200);
  }
  else res.status(400).send('Failure')
})

const lotusFxTransfer = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200);
  }
  else res.status(400).send('Failure')
})

const otherFxTransfer = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200);
  }
  else res.status(400).send('Failure')
})

const cardBlock = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200).send();
  }
  else res.status(400).send('Failure')
})

const accountLimitUpdate = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200).send();
  }
  else res.sendStatus(400)
})

const updateReferee = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
    res.sendStatus(200);
  }
  else res.sendStatus(400)
})

const accountReferee = asyncHandler(async (req,res) => {
  let reqParam = req.params;
  if(reqParam){
    console.log(reqParam)
    res.sendStatus(200);
  }
  else res.sendStatus(400)
})


export { accounts, withdrawals, deposits, accountType, userNin, 
  userBvn, depositFx, withdrawalFx, cardBlock, accountLimitUpdate,
  otherFxTransfer, lotusFxTransfer, newCardRequest, updateReferee, 
  accountReferee,
 };