import { Router } from "express";
import { createclassrooms } from "../controllers/classroom.controller.js";
import { getclassroom } from "../controllers/classroom.controller.js";
import { updateclassroom } from "../controllers/classroom.controller.js";
import { deletestudent } from "../controllers/classroom.controller.js";
export const classroomrouter=Router();

classroomrouter.route('/createclass').post(createclassrooms);
classroomrouter.route('/getclassroom').get(getclassroom);
classroomrouter.route('/updateclassroom').post(updateclassroom);
classroomrouter.route('/deletestudent').post(deletestudent);
