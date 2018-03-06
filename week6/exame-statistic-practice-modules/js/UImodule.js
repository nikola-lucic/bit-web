'user strict';

var UImodule = (function () {
    var validateSubject = document.getElementsByClassName('validate-subject')[0];
    var validateSubjectValue = validateSubject.innerHTML;

    var validateStudent = document.getElementsByClassName('validate-student')[0];
    var validateStudentValue = validateStudent.innerHTML;

    var validateGrade = document.getElementsByClassName('validate-grade')[0];
    var validateGradeValue = validateGrade.innerHTML;


    function CollectData() {
        var subjectInput = document.getElementsByClassName('add-subject')[0];
        var subjectIndex = subjectInput.selectedIndex;
        var subjectValue = subjectIndex.option[SubjectIndex].value;

        var studentNameInput = document.getElementsByClassName('add-student-name')[0];
        var studentNameText = studentNameInput.value;
        var checkUpperCase = studentNameText.split(' ');
        var studentName = checkUpperCase[0];
        var studentSurname = checkUpperCase[1];

        var grade = document.getElementsByClassName('add-grade')[0];
        var gradeValue = grade.value;
    };

    function validateData() {

        var validateErrors = {
            SUBJECT_OK: 'OK',
            SUBJECT_ERROR: 'Please select subject',
            STUDENT_OK: 'OK',
            STUDENT_ERROR: 'Please enter name',
            GRADE_OK: 'OK',
            GRADE_ERROR: 'Please select grade'
        };

        /*
        if ((SubjectValue === '') && (!(isNaN(StudentNameText)) || StudentNameText === '') && (isNaN(gradeValue)) || gradeValue === '') {
            return (SubjectValue = validateErrors.SUBJECT_ERROR) + (StudentNameText = validateErrors.STUDENT_ERROR) + (gradeValue = validateErrors.GRADE_ERROR)
    
        }
        */
        if (subjectValue === '') {
            validateSubjectValue = validateErrors.SUBJECT_ERROR;
        };
        if (!(isNaN(studentNameText)) || (studentNameText === '') || studentNameText === studentNameText[0].toUpperCase()) {
            validateStudentValue = validateErrors.STUDENT_ERROR;
        };
        if (checkUpperCase.length < 2) {
            validateStudentValue = validateErrors.STUDENT_ERROR;
        }
        if ((isNaN(gradeValue)) || (gradeValue > 10) || (gradeValue < 0) || (gradeValue === '')) {
            validateGradeValue = validateErrors.GRADE_ERROR
        };
        for (var i = 0; i < checkUpperCase.length; i++) {
            if ((checkUpperCase[i][0] && checkUpperCase[i][1]) !== (checkUpperCase[i][0] && checkUpperCase[i][1]).toUpperCase()) {
                validateStudentValue = validateErrors.STUDENT_ERROR;
            }
        };
    };

    function UpdateList() {

        var subjectCreate = new dataModule.Subject(subjectValue);
        var studentCreate = new dataModule.Student(studentName, studentSurname);

        var exam = new dataModule.Exam(subjectCreate, studentCreate, gradeValue);

        var passedList = document.getElementsByClassName('passed-list')[0];
        var passedUl = passedList.getElementsByTagName('ul')[0];

        var failList = document.getElementsByClassName('failed-list')[0];
        var failUL = passedList.getElementsByTagName('ul')[0];

        if (exam.hasPassed()) {
            var newLi = document.createElement('li');
            var newText = document.createTextNode(exam.getExamInfo() + ' ' + gradeValue);
            newLi.appendChild(newText);
            passedUl.appendChild(newLi);
        }
        else {
            var newLi = document.createElement('li');
            var newText = document.createTextNode(exam.getExamInfo() + ' ' + gradeValue);
            newLi.appendChild(newText);
            failUL.appendChild(newLi);


        }

    };

    var statistic = {
        passed: 0,
        failed: 0,
        total: function () {
            return this.passed + this.failed;
        },
        percent: function () {
            var a = this.failed * 100 / this.total();
            return a.toFixed() + '%';
        }
    };

})();