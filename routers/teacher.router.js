import { Router } from "express";
import { createteacher } from "../controllers/teacher.controller.js";
import { getteacher } from "../controllers/teacher.controller.js";
import { teachervalidation } from "../controllers/teacher.controller.js";
import { teacherclass } from "../controllers/teacher.controller.js";
import { deleteteacher } from "../controllers/teacher.controller.js";
export const teacherrouter=Router();

teacherrouter.route('/createteacher').post(createteacher);
teacherrouter.route('/getteacher').get(getteacher);
teacherrouter.route('/teachervalidate').post(teachervalidation);
teacherrouter.route('/teacherclass').post(teacherclass);
teacherrouter.route('/deleteteacher').post(deleteteacher);