


let students = [
    { id: 1, name: "Bui Gia Luong", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Phan Dang Huy Hoang", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Huynh Nguyen Minh", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Do Thanh Dat", age: 19, gpa: 6.8, status: "active" },
];

let nextId = 5;

// ===== HELPER FUNCTIONS =====

function showMenu() {
    return prompt(
        `===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:`
    );
}

function formatStudent(s) {
    return `ID: ${s.id} | Name: ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`;
}

function formatList(list, title = "Student List") {
    if (list.length === 0) return `${title}\n(No records found)`;
    const divider = "-".repeat(60);
    const rows = list.map((s) => formatStudent(s)).join("\n");
    return `${title}\n${divider}\n${rows}\n${divider}\nTotal: ${list.length} student(s)`;
}

// ===== 1. CREATE STUDENT =====
function createStudent() {
    const name = prompt("Enter student name:");
    if (!name || name.trim() === "") return alert("Name cannot be empty!");

    const age = parseInt(prompt("Enter age:"));
    if (isNaN(age) || age <= 0) return alert("Invalid age!");

    const gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
    if (isNaN(gpa) || gpa < 0 || gpa > 10) return alert("Invalid GPA!");

    const statusInput = prompt("Enter status (active / inactive):").trim().toLowerCase();
    if (statusInput !== "active" && statusInput !== "inactive")
        return alert('Status must be "active" or "inactive"!');

    const newStudent = {
        id: nextId++,
        name: name.trim(),
        age,
        gpa,
        status: statusInput,
    };

    students.push(newStudent);
    alert(`Student created successfully!\n${formatStudent(newStudent)}`);
}

// ===== 2. READ ALL STUDENTS =====
function readAllStudents() {
    alert(formatList(students, "===== ALL STUDENTS ====="));
}

// ===== 3. FILTER SCHOLARSHIP CANDIDATES =====
function filterScholarship() {
    const candidates = students.filter((s) => s.gpa > 8.0);
    alert(formatList(candidates, "===== SCHOLARSHIP CANDIDATES (GPA > 8.0) ====="));
}


// ===== MAIN LOOP =====
function main() {
    let running = true;

    while (running) {
        const choice = showMenu();

        switch (choice) {
            case "1":
                createStudent();
                break;
            case "2":
                readAllStudents();
                break;
            case "3":
                filterScholarship();
                break;
            case "4":
                updateStudent();
                break;
            case "5":

                break;
            case "6":

                break;
            case "7":

                break;
            case "8":

                break;
            case "0":
                alert("Goodbye! Thank you for using Student Management System.");
                running = false;
                break;
            case null:
                running = false;
                break;
            default:
                alert("Invalid choice! Please enter a number from 0 to 8.");
        }
    }
}


main();
