import asyncHandler from "express-async-handler";
import mssql from "mssql";
import Joi from "joi";

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
       return res.sendStatus(200); 
});


const withdrawals = asyncHandler(async (req, res) => {
  try {
    let pool = await mssql.connect(sqlConfig);
    let result = await pool.request().query("SELECT * from [dbo].[SystemLogs] WHERE Action = 'TellerCashWithdrawal'");
   return res.json(result);
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
    return res.json(result);
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
   return res.json(result);
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
//    return res.sendStatus(200).send(UserAccount); 
// })
// const singleAccounts = asyncHandler(async (req, res) => {
//   try {
//     let pool = await mssql.connect(sqlConfig);
//     let result = await pool.request().query("select * from dbo.UserAccounts");
//     console.log(result);
//    return res.json(result);
//     mssql.close;
//   } catch (error) {
//     console.log(error.message);
//     mssql.close;
//   }
// });

const userBvn = asyncHandler(async (req, res) => {
  let useracc = req.params.accountNo;
  if(useracc){
    console.log(useracc)
   return res.sendStatus(200);
  }
  else return res.status(400)
});

const userNin = asyncHandler(async (req, res) => {
  let useracc = req.params.accountNo;
  if(useracc){
    console.log(useracc)
   return res.sendStatus(200);
  }
  else return res.status(400)
});

const depositFx = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200);
  }
  else return res.status(400).send('Failure')
})

 const withdrawalFx = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200);
  }
  else return res.status(400).send('Failure')
})

const newCardRequest = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200);
  }
  else return res.status(400).send('Failure')
})

const lotusFxTransfer = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200);
  }
  else return res.status(400).send('Failure')
})

const otherFxTransfer = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200);
  }
  else return res.status(400).send('Failure')
})

const cardBlock = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200).send();
  }
  else return res.status(400).send('Failure')
})

const accountLimitUpdate = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200).send();
  }
  else return res.sendStatus(400)
})

const accountLimit = asyncHandler(async (req,res) => {
  let reqBody = req.params.accountNumber;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200).send();
  }
  else return res.sendStatus(400)
})

const updateReferee = asyncHandler(async (req,res) => {
  let reqBody = req.body;
  if(reqBody){
    console.log(reqBody)
   return res.sendStatus(200);
  }
  else return res.sendStatus(400)
})

const accountReferee = asyncHandler(async (req,res) => {
  let reqParam = req.params.id;
  console.log('see your params',reqParam)
  if(reqParam){
    console.log(reqParam)
   return res.sendStatus(200);
  }
  else return res.sendStatus(400)
})


export { accounts, withdrawals, deposits, accountType, userNin, 
  userBvn, depositFx, withdrawalFx, cardBlock, accountLimitUpdate,
  otherFxTransfer, lotusFxTransfer, newCardRequest, updateReferee, 
  accountReferee,accountLimit,
 };