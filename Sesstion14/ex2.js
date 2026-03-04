const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    const li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `<span>${name}</span> - <span>${price}</span>`;

    productList.appendChild(li);

    // reset input
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
});
