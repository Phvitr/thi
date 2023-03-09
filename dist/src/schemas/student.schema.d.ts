import mongoose from "mongoose";
interface iStudent {
    name: string;
    studentId: string;
    theoryScore: number;
    practiceScore: number;
    description: string;
    review: string;
    classId: string;
}
declare const Student: mongoose.Model<iStudent, {}, {}, {}, mongoose.Document<unknown, {}, iStudent> & Omit<iStudent & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default Student;
