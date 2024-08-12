import { Router } from "express";
import { createstudent } from "../controllers/student.controller.js";
import { getstudent } from "../controllers/student.controller.js";
import { studentvalidation } from "../controllers/student.controller.js";
import { studentclass } from "../controllers/student.controller.js";
import { deletestudent } from "../controllers/student.controller.js";

export const studentrouter=Router();

studentrouter.route('/createstudent').post(createstudent)
studentrouter.route('/getstudent').get(getstudent)
studentrouter.route('/studentvalidate').post(studentvalidation)
studentrouter.route('/studentclass').post(studentclass)
studentrouter.route('/studentdelete').post(deletestudent)