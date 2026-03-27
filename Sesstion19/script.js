let students = [
  { id: 1734567890, name: "Nguyễn Văn A", age: 20, class: "CNTT-12" },
  { id: 1734567891, name: "Trần Thị B", age: 21, class: "KTPM-11" },
  { id: 1734567892, name: "Lê Văn C", age: 19, class: "CNTT-12" },
  { id: 1734567893, name: "Phạm Thị D", age: 22, class: "MKT-10" },
  { id: 1734567894, name: "Hoàng Văn E", age: 20, class: "CNTT-11" }];

localStorage.setItem('key', JSON.stringify(students));

const renderStudent = () => {
  let data = JSON.parse(localStorage.getItem('key')) || [];
  let table = document.getElementById("TableBody");

  let html = "";

  data.forEach((sv, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${sv.name}</td>
        <td>${sv.age}</td>
        <td>${sv.class}</td>
        <td></td>
      </tr>
    `;
  });

  table.innerHTML = html;

}
renderStudent();

const addStudent = () => {
  let Elemenname = document.getElementById("name").value;
  let Elemenage = document.getElementById("age").value;
  let Elemenclass = document.getElementById("class").value;
  let addStudent = document.getElementById("addStudent").value;
}