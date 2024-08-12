import { Router } from "express";
import { principlevalidation } from "../controllers/principle.controller.js";
import { createprinciple } from "../controllers/principle.controller.js";

export const principlerouter=Router();

principlerouter.route('/principle').post(createprinciple);
principlerouter.route('/principlevalidate').post(principlevalidation);

