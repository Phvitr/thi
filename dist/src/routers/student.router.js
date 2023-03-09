"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = __importDefault(require("../controllers/student.controller"));
const multer_1 = __importDefault(require("multer"));
let upload = (0, multer_1.default)();
const StudentRouter = express_1.default.Router();
StudentRouter.get('/', student_controller_1.default.showStudentList);
StudentRouter.get('/add', student_controller_1.default.showAddForm);
StudentRouter.get('/:class', student_controller_1.default.showStudentInClass);
StudentRouter.post('/add', upload.none(), student_controller_1.default.addStudent);
StudentRouter.get('/detail/:id', student_controller_1.default.showStudentDetail);
StudentRouter.get('/update/:id', student_controller_1.default.showUpdateForm);
StudentRouter.post('/update/:id', upload.none(), student_controller_1.default.updateStudentInfo);
StudentRouter.get('/delete/:id', student_controller_1.default.deleteStudent);
exports.default = StudentRouter;
//# sourceMappingURL=student.router.js.map