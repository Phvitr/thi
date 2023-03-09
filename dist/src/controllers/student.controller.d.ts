declare class StudentController {
    static showStudentList(req: any, res: any): Promise<void>;
    static showStudentInClass(req: any, res: any): Promise<void>;
    static showStudentDetail(req: any, res: any): Promise<void>;
    static showUpdateForm(req: any, res: any): Promise<void>;
    static updateStudentInfo(req: any, res: any): Promise<void>;
    static deleteStudent(req: any, res: any): Promise<void>;
    static showAddForm(req: any, res: any): Promise<void>;
    static addStudent(req: any, res: any): Promise<void>;
}
export default StudentController;
