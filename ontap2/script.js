const listSinger = [
    { id: 1, name: "Sơn Tùng M-TP", birthDate: "1994-07-05", nationality: "Việt Nam", followers: 8500000, genre: "V-Pop" },
    { id: 2, name: "Jisoo", birthDate: "1995-01-03", nationality: "Hàn Quốc", followers: 32000000, genre: "K-Pop" },
    { id: 3, name: "Taylor Swift", birthDate: "1989-12-13", nationality: "Mỹ", followers: 95000000, genre: "Pop" }
];
localStorage.setItem("key", JSON.stringify(listSinger));

const renderData = () => {
    let data = JSON.parse(localStorage.getItem('key'));
    let table = document.getElementById("TablaData");

    let html = ""
    data.forEach((element, index) => {
        html += `
         <tr>
          <td>${index + 1}</td>
          <td>${element.name}</td>
          <td>${element.birthDate}</td>
          <td>${element.nationality}</td>
          <td>${element.followers}</td>
          <td>${element.genre}</td>
          <td>
                 <button onclick="editSinger(${element.id})">Sửa</button>
                <button onclick="deleteSinger(${element.id})">Xóa</button>
            </td>
         </tr>
        `;
    });
    table.innerHTML = html
}
renderData();

const addListSinger = () => {
    let name = document.getElementById("name").value;
    let birthDate = document.getElementById("birthDate").value;
    let nationality = document.getElementById("nationality").value;
    let followers = document.getElementById("followers").value;
    let genre = document.getElementById("genre").value;
    let data = JSON.parse(localStorage.getItem('key'));
    let newSinger = {
        id: data.length + 1,
        name: name,
        birthDate: birthDate,
        nationality: nationality,
        followers: followers,
        genre: genre
    };
    data.push(newSinger);
    localStorage.setItem("key", JSON.stringify(data));
    renderData();

}
addListSinger();

