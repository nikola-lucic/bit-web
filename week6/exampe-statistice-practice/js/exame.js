'user strict';

function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
};

Exam.prototype.getExamInfo = function () {
    return subject.getSubjectName() + ' ' + student.getStudentData();

};
Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return examPass.PASSED;
    }
    return examPass.FAILED;

    //(this.grade > 5) = examPass.PASSED ? examPass.PASSED : examPass.FAILED;
}
var examPass = {
    PASSED: 'Student has pass exam',
    FAILED: 'Student has not pass exam'
}