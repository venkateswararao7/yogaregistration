import { Router } from "express";
import { addyogastudent } from "../controllers/addyogastudent.js";
import { students } from "../controllers/allyogastudents.js";
import { updatepayment } from "../controllers/updatepayment.js";
import { changeshift } from "../controllers/changesift.js";
import { amount } from "../controllers/amount.js";
import { user } from "../controllers/loginuser.js";

const router = Router();

router.post("/enroll", addyogastudent);
router.get("/students", students);
router.put("/payments", updatepayment);
router.put("/changeshift", changeshift);
router.get("/amount", amount);

router.post("/create", user)

export default router;
