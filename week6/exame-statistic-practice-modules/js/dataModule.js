'use strict';
var dataModule = (function () {
    //subject object
    function Subject(name) {
        this.name = name;
    };

    Subject.prototype.getSubjectName = function () {
        return this.name;
    };
    //student object
    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    };
    Student.prototype.getStudentData = function () {
        return this.name + ' ' + this.surname;
    };
    //exam info
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
            return true;
        }
        return false;

        //(this.grade > 5) = examPass.PASSED ? examPass.PASSED : examPass.FAILED;
    }
    /*
    var examPass = {
        PASSED: 'Student has pass exam',
        FAILED: 'Student has not pass exam'
    };
    */





})();
