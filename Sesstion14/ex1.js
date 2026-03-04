const productList = document.getElementById("product-list");

const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lua", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Li Xi", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
]

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<p>${product.name}</p><p>${product.price}</p>`;
    productList.appendChild(div);
});
