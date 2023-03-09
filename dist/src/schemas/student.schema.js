"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
    name: String,
    studentId: String,
    theoryScore: Number,
    practiceScore: Number,
    description: String,
    review: String,
    classId: String
});
const Student = (0, mongoose_1.model)('Student', StudentSchema);
exports.default = Student;
//# sourceMappingURL=student.schema.js.map