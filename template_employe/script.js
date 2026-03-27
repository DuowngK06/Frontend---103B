const listproDuck = [
    { id: 1, name: "Laptop Dell XPS 13", price: 28500000, inventory: 12 },
    { id: 2, name: "Chuột Logitech MX Master", price: 1850000, inventory: 34 },
    { id: 3, name: "Bàn phím Keychron K2", price: 2200000, inventory: 7 },
    { id: 4, name: "Áo thun Basic Uniqlo", price: 390000, inventory: 0 },
    { id: 5, name: "Cà phê rang xay 500g", price: 185000, inventory: 58 },
];

localStorage.setItem("key", JSON.stringify(listproDuck));


const renderData = () => {
    let data = JSON.parse(localStorage.getItem('key'));
    let table = document.getElementById("tbody1");

    let html = "";
    data.forEach((element, index) => {
        html += `
         <tr>
          <td>${index + 1}</td>
          <td class="td-name">${element.name}</td>
          <td class="td-price">${element.price}</td>
          <td class="center"style="font-weight: 700" >${element.inventory}</td>
          <td>
                <button class="btn btn-sm btn-edit">Sửa</button>
                <button class="btn btn-sm btn-del">Xóa</button>
          </td>
         </tr>
        `;
    });

    table.innerHTML = html;
};
renderData();


const addlistproDuck = () => {
    let data = JSON.parse(localStorage.getItem('key'));

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let inventory = document.getElementById("inventory").value;
    let submit = document.getElementById("btnSubmit").value;

    let newlistproDuck = {
        id: data.length + 1,
        name: name,
        price: price,
        inventory: inventory,
    };

    data.push(newlistproDuck);
    localStorage.setItem("key", JSON.stringify(data));
    renderData();
};