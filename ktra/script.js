const Student = [
    {
        id: 1,
        maSV: "SV0001",
        name: "LeVanA ",
        Email: "lva@gmail.com",
        Score: 8, Result: "Pass"
    }
    ,
    {
        id: 2,
        maSV: "SV0002",
        name: "LeVanB ",
        Email: "lvb@gmail.com",
        Score: 8,
        Result: "False"
    },

];
localStorage.setItem("key", JSON.stringify(Student));

const renderStuden = () => {
    let data = JSON.parse(localStorage.getItem("key"));
    let tabel = document.getElementById("listStudent")
    let HTML = "";
    data.forEach((element, index) => {
        HTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${element.maSV}</td>
            <td>${element.name}</td>
            <td>${element.Email}</td>
            <td>${element.Score}</td>
            <td>${element.Result}</td>
        </tr>
        `;
    });

    tabel.innerHTML = HTML;
};

renderStuden();

const addStudent = () => {

    let maSV = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let score = document.getElementById("studentScore").value;
    let submit = document.getElementById("btnAdd").value;

    let data = JSON.parse(localStorage.getItem("key")) || [];
    let newStudent = {
        id: data.length + 1,
        maSV: maSV,
        name: name,
        Email: email,
        Score: score,
        Result: score >= 5 ? "Pass" : "Fail"
    };


    data.push(newStudent);

    localStorage.setItem("key", JSON.stringify(data));
    renderStuden();
};


