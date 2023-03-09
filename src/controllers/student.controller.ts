import Student from '../schemas/student.schema';
import Class from '../schemas/class.schema';

class StudentController {
    static async showStudentList (req, res) {
        let students = await Student.find().sort({theoryScore:1,practiceScore:1})
        res.render('index', {students: students});
    }
    static async showStudentInClass (req, res) {
        let classId = req.params.class
        let students = await Student.find({classId: classId});
        res.render('index', {students: students});
    }
    static async showStudentDetail (req, res) {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        res.render('detail', {student: student});
    }
    static async showUpdateForm (req, res) {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        res.render('edit', {student: student});
    }
    static async updateStudentInfo (req, res) {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        let { name, studentId, theoryScore, practiceScore, description, review, classId} = req.body;

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
    static async deleteStudent (req, res) {
        let id = req.params.id;
        await Student.findOneAndDelete({_id: id})
            console.log('Deleted Successful');
            res.redirect('/student');
    }
    static async showAddForm (req, res) {
        res.render('add');
    }

    static async addStudent (req, res) {
        let student = new Student(req.body);
        await student.save();
        res.redirect('/student');
    }
}

export default StudentController;