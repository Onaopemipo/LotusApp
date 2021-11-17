import express from "express";
import cors from "cors";
import { accountType, accounts, deposits, withdrawals, userNin,userBvn, 
    depositFx, withdrawalFx, cardBlock,accountLimitUpdate, otherFxTransfer,
    lotusFxTransfer, newCardRequest, accountReferee,updateReferee

} from "../controllers/accountController.js";

const router = express.Router();

const app = express();

app.use(cors());

router.post("/fxDeposit", cors({origin: '*'}), depositFx);
router.post("/fxWithdrawal", cors({origin: '*'}), withdrawalFx);
router.post("/fxTransferLotus", cors({origin: '*'}), lotusFxTransfer);
router.post("/fxTransferOthers", cors({origin: '*'}), otherFxTransfer);
router.post("/cardRequest", cors({origin: '*'}), newCardRequest);
router.get("/getReferee", cors({origin: '*'}), accountReferee);
router.post("/confirmReferee", cors({origin: '*'}), updateReferee);
router.post("/checkbvn", cors({origin: '*'}), userBvn);
router.post("/checknin", cors({origin: '*'}), userNin);
router.post("/blockCard", cors({origin: '*'}), cardBlock);
router.post("/fxDeposit", cors({origin: '*'}), depositFx);
router.get("/fetchAccountOpened", cors({origin: '*'}), accounts);
router.get("/fetchcustomersDeposit", cors({origin: '*'}), deposits);
router.get("/fetchcustomersWithdrawal", cors({origin: '*'}), withdrawals);
router.get("/accounttype/:id", cors({origin: '*'}), accountType);
router.get("/createUserId", cors({origin: '*'}), deposits);
router.post("/updateLimit", cors({origin: '*'}), accountLimitUpdate);


export default router;