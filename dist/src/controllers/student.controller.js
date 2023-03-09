"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_schema_1 = __importDefault(require("../schemas/student.schema"));
class StudentController {
    static async showStudentList(req, res) {
        let students = await student_schema_1.default.find().sort({ theoryScore: 1, practiceScore: 1 });
        res.render('index', { students: students });
    }
    static async showStudentInClass(req, res) {
        let classId = req.params.class;
        let students = await student_schema_1.default.find({ classId: classId });
        res.render('index', { students: students });
    }
    static async showStudentDetail(req, res) {
        let id = req.params.id;
        let student = await student_schema_1.default.findOne({ _id: id });
        res.render('detail', { student: student });
    }
    static async showUpdateForm(req, res) {
        let id = req.params.id;
        let student = await student_schema_1.default.findOne({ _id: id });
        res.render('edit', { student: student });
    }
    static async updateStudentInfo(req, res) {
        let id = req.params.id;
        let student = await student_schema_1.default.findOne({ _id: id });
        let { name, studentId, theoryScore, practiceScore, description, review, classId } = req.body;
        student.name = name;
        student.studentId = studentId;
        student.theoryScore = theoryScore;
        student.practiceScore = practiceScore;
        student.description = description;
        student.review = review;
        student.classId = classId;
        await student.save();
        res.redirect('/student');
    }
    static async deleteStudent(req, res) {
        let id = req.params.id;
        await student_schema_1.default.findOneAndDelete({ _id: id });
        console.log('Deleted Successful');
        res.redirect('/student');
    }
    static async showAddForm(req, res) {
        res.render('add');
    }
    static async addStudent(req, res) {
        let student = new student_schema_1.default(req.body);
        await student.save();
        res.redirect('/student');
    }
}
exports.default = StudentController;
//# sourceMappingURL=student.controller.js.map