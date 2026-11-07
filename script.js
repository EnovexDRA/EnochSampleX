/* ======================================
   ENOVEX ACADEMY
   SCHOOL RESULT PORTAL
====================================== */


/* ======================================
   STUDENT DATA

   These are FAKE students for development.
====================================== */

const students = [

    {
        name: "Michael Ade",
        id: "EA001",
        pin: "2580",
        sex: "Male",
        className: "JSS 2",
        dateOfBirth: "2012-05-10",
        session: "2026/2027",
        term: "First Term",
        position: 3,

        subjects: [
            {
                name: "Mathematics",
                ca: 28,
                exam: 62
            },

            {
                name: "English Language",
                ca: 27,
                exam: 63
            },

            {
                name: "Basic Science",
                ca: 26,
                exam: 58
            },

            {
                name: "Computer Studies",
                ca: 29,
                exam: 65
            },

            {
                name: "Social Studies",
                ca: 25,
                exam: 61
            }
        ],

        comment:
            "Excellent performance. Keep working hard and continue striving for greater achievement."
    },


    {
        name: "David Okafor",
        id: "EA002",
        pin: "3741",
        sex: "Male",
        className: "JSS 2",
        dateOfBirth: "2012-08-19",
        session: "2026/2027",
        term: "First Term",
        position: 5,

        subjects: [
            {
                name: "Mathematics",
                ca: 25,
                exam: 55
            },

            {
                name: "English Language",
                ca: 24,
                exam: 59
            },

            {
                name: "Basic Science",
                ca: 23,
                exam: 56
            },

            {
                name: "Computer Studies",
                ca: 27,
                exam: 61
            },

            {
                name: "Social Studies",
                ca: 24,
                exam: 57
            }
        ],

        comment:
            "A good effort. Continue practicing and focus on improving weaker subjects."
    },


    {
        name: "Sarah Bello",
        id: "EA003",
        pin: "4916",
        sex: "Female",
        className: "JSS 1",
        dateOfBirth: "2013-02-14",
        session: "2026/2027",
        term: "First Term",
        position: 2,

        subjects: [
            {
                name: "Mathematics",
                ca: 29,
                exam: 64
            },

            {
                name: "English Language",
                ca: 28,
                exam: 66
            },

            {
                name: "Basic Science",
                ca: 27,
                exam: 62
            },

            {
                name: "Computer Studies",
                ca: 30,
                exam: 67
            },

            {
                name: "Social Studies",
                ca: 28,
                exam: 63
            }
        ],

        comment:
            "Outstanding performance. Maintain this level of dedication."
    },


    {
        name: "Daniel James",
        id: "EA004",
        pin: "6253",
        sex: "Male",
        className: "JSS 3",
        dateOfBirth: "2011-11-09",
        session: "2026/2027",
        term: "First Term",
        position: 7,

        subjects: [
            {
                name: "Mathematics",
                ca: 23,
                exam: 51
            },

            {
                name: "English Language",
                ca: 24,
                exam: 55
            },

            {
                name: "Basic Science",
                ca: 22,
                exam: 49
            },

            {
                name: "Computer Studies",
                ca: 26,
                exam: 58
            },

            {
                name: "Social Studies",
                ca: 23,
                exam: 53
            }
        ],

        comment:
            "Keep improving your study habits and pay extra attention to challenging subjects."
    },


    {
        name: "Grace Williams",
        id: "EA005",
        pin: "8147",
        sex: "Female",
        className: "JSS 2",
        dateOfBirth: "2012-03-22",
        session: "2026/2027",
        term: "First Term",
        position: 4,

        subjects: [
            {
                name: "Mathematics",
                ca: 27,
                exam: 60
            },

            {
                name: "English Language",
                ca: 26,
                exam: 62
            },

            {
                name: "Basic Science",
                ca: 27,
                exam: 59
            },

            {
                name: "Computer Studies",
                ca: 28,
                exam: 64
            },

            {
                name: "Social Studies",
                ca: 26,
                exam: 60
            }
        ],

        comment:
            "Very good performance. Continue working consistently toward excellence."
    }

];


/* ======================================
   GET HTML ELEMENTS
====================================== */

const loginSection =
    document.getElementById("loginSection");

const resultSection =
    document.getElementById("resultSection");

const loginForm =
    document.getElementById("loginForm");

const studentIdInput =
    document.getElementById("studentId");

const studentPinInput =
    document.getElementById("studentPin");

const loginMessage =
    document.getElementById("loginMessage");

const logoutButton =
    document.getElementById("logoutButton");

const printButton =
    document.getElementById("printButton");


/* ======================================
   LOGIN
====================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get what the parent/student entered

    const enteredId =
        studentIdInput.value.trim().toUpperCase();

    const enteredPin =
        studentPinInput.value.trim();


    // Find matching student

    const student = students.find(function (student) {

        return (
            student.id === enteredId &&
            student.pin === enteredPin
        );

    });


    // If no student was found

    if (!student) {

        loginMessage.textContent =
            "Invalid Student ID or PIN. Please check your details.";

        loginMessage.style.color = "#dc2626";

        return;
    }


    // Login successful

    loginMessage.textContent =
        "Login successful! Loading result...";

    loginMessage.style.color = "#16a34a";


    setTimeout(function () {

        loginSection.classList.add("hidden");

        resultSection.classList.remove("hidden");

        displayStudentResult(student);

    }, 400);

});


/* ======================================
   DISPLAY STUDENT RESULT
====================================== */

function displayStudentResult(student) {

    // Student information

    document.getElementById("resultStudentName")
        .textContent = student.name;

    document.getElementById("resultStudentId")
        .textContent = student.id;

    document.getElementById("resultStudentClass")
        .textContent = student.className;

    document.getElementById("resultStudentSex")
        .textContent = student.sex;

    document.getElementById("resultStudentDob")
        .textContent = formatDate(student.dateOfBirth);


    // Student avatar

    document.getElementById("studentInitial")
        .textContent = student.name.charAt(0).toUpperCase();


    // Academic information

    document.getElementById("resultSession")
        .textContent = student.session;

    document.getElementById("resultTerm")
        .textContent = student.term;

    document.getElementById("resultPosition")
        .textContent = getPositionText(student.position);


    // Calculate the results

    const calculatedSubjects =
        student.subjects.map(function (subject) {

            const total =
                subject.ca + subject.exam;

            const grade =
                getGrade(total);

            const remark =
                getRemark(total);

            return {
                ...subject,
                total: total,
                grade: grade,
                remark: remark
            };

        });


    // Calculate overall total

    let overallTotal = 0;

    calculatedSubjects.forEach(function (subject) {

        overallTotal += subject.total;

    });


    // Number of subjects

    const numberOfSubjects =
        calculatedSubjects.length;


    // Calculate average

    const overallAverage =
        overallTotal / numberOfSubjects;


    // Overall grade

    const overallGrade =
        getGrade(overallAverage);


    // Overall remark

    const overallRemark =
        getRemark(overallAverage);


    // Display summary

    document.getElementById("overallTotal")
        .textContent = overallTotal;

    document.getElementById("overallAverage")
        .textContent = overallAverage.toFixed(2);

    document.getElementById("overallGrade")
        .textContent = overallGrade;

    document.getElementById("overallRemark")
        .textContent = overallRemark;


    // Display subjects

    displaySubjects(calculatedSubjects);


    // Display principal's comment

    document.getElementById("principalComment")
        .textContent = student.comment;

}


/* ======================================
   DISPLAY SUBJECTS
====================================== */

function displaySubjects(subjects) {

    const tableBody =
        document.getElementById("resultTableBody");


    // Clear old result

    tableBody.innerHTML = "";


    subjects.forEach(function (subject) {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                <strong>${subject.name}</strong>
            </td>

            <td>
                ${subject.ca}
            </td>

            <td>
                ${subject.exam}
            </td>

            <td>
                <strong>${subject.total}</strong>
            </td>

            <td>
                <span class="grade-badge">
                    ${subject.grade}
                </span>
            </td>

            <td>
                ${subject.remark}
            </td>

        `;


        tableBody.appendChild(row);

    });

}


/* ======================================
   GRADE FUNCTION
====================================== */

function getGrade(score) {

    if (score >= 70) {
        return "A";
    }

    else if (score >= 60) {
        return "B";
    }

    else if (score >= 50) {
        return "C";
    }

    else if (score >= 45) {
        return "D";
    }

    else if (score >= 40) {
        return "E";
    }

    else {
        return "F";
    }

}


/* ======================================
   REMARK FUNCTION
====================================== */

function getRemark(score) {

    if (score >= 70) {
        return "Excellent";
    }

    else if (score >= 60) {
        return "Very Good";
    }

    else if (score >= 50) {
        return "Good";
    }

    else if (score >= 45) {
        return "Fair";
    }

    else if (score >= 40) {
        return "Pass";
    }

    else {
        return "Fail";
    }

}


/* ======================================
   FORMAT DATE
====================================== */

function formatDate(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

}


/* ======================================
   POSITION
====================================== */

function getPositionText(position) {

    if (position === 1) {
        return "1st";
    }

    if (position === 2) {
        return "2nd";
    }

    if (position === 3) {
        return "3rd";
    }

    return position + "th";

}


/* ======================================
   LOGOUT
====================================== */

logoutButton.addEventListener("click", function () {

    resultSection.classList.add("hidden");

    loginSection.classList.remove("hidden");

    loginForm.reset();

    loginMessage.textContent = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ======================================
   PRINT
====================================== */

printButton.addEventListener("click", function () {

    window.print();

});