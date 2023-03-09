import express from "express";
import StudentController from "../controllers/student.controller";
import multer from 'multer';

let upload = multer()
const StudentRouter = express.Router();

StudentRouter.get('/', StudentController.showStudentList);
StudentRouter.get('/add', StudentController.showAddForm);
StudentRouter.get('/:class', StudentController.showStudentInClass);
StudentRouter.post('/add', upload.none(), StudentController.addStudent);

StudentRouter.get('/detail/:id', StudentController.showStudentDetail);
StudentRouter.get('/update/:id', StudentController.showUpdateForm);
StudentRouter.post('/update/:id', upload.none(), StudentController.updateStudentInfo);
StudentRouter.get('/delete/:id', StudentController.deleteStudent);

export default StudentRouter;