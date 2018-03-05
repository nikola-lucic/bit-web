'use strict';


var validateSubject = document.getElementsByClassName('validate-subject');
var validateSubjectValue = validateSubject.innerHTML;

var validateStudent = document.getElementsByClassName('validate-student');
var validateStudentValue = validateStudent.innerHTML;

var validateGrade = document.getElementsByClassName('validate-grade');
var validateGradeValue = validateStudent.innerHTML;


function CollectData() {
    var SubjectInput = document.getElementsByClassName('add-subject');
    var SubjectIndex = SubjectInput.selectedIndex;
    var SubjectValue = SubjectIndex.option[SubjectIndex].value;

    var StudentNameInput = document.getElementsByClassName('add-student-name')[0];
    var StudentNameText = StudentNameInput.value;

    var grade = document.getElementsByClassName('add-grade');
    var gradeValue = grade.value;
};

function ValidateData() {

    var validateErrors = {
        SUBJECT_OK: 'OK',
        SUBJECT_ERROR: 'Plesae select subject',
        STUDENT_OK: 'OK',
        STUDENT_ERROR: 'Please enter name',
        GRADE_OK: 'OK',
        GRADE_ERROR: 'Please select grade'
    }

    /*
    if ((SubjectValue === '') && (!(isNaN(StudentNameText)) || StudentNameText === '') && (isNaN(gradeValue)) || gradeValue === '') {
        return (SubjectValue = validateErrors.SUBJECT_ERROR) + (StudentNameText = validateErrors.STUDENT_ERROR) + (gradeValue = validateErrors.GRADE_ERROR)

    }
    */
    if (SubjectValue === '') {
        validateSubjectValue = validateErrors.SUBJECT_ERROR;
    };
    if (!(isNaN(StudentNameText)) || StudentNameText === '') {
        validateStudentValue = validateErrors.STUDENT_ERROR;
    };
    if ((isNaN(gradeValue)) || gradeValue === '') {
        validateGradeValue = validateErrors.GRADE_ERROR
    };


};

