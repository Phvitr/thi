import mongoose, {model, Schema} from "mongoose";

interface iStudent {
    name: string;
    studentId: string;
    theoryScore: number;
    practiceScore: number;
    description: string;
    review : string;
    classId : string
}
const StudentSchema = new Schema<iStudent>({
    name: String,
    studentId: String,
    theoryScore: Number,
    practiceScore: Number,
    description: String,
    review: String,
    classId: String

});

const Student = model<iStudent>('Student', StudentSchema);

export default Student;

