const productList = document.getElementById("product-list");

productList.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-price-btn")) {
        const li = event.target.closest("li");
        const newPrice = prompt("Nhập giá mới (VND):");
        if (newPrice) {

            const formattedPrice = Number(newPrice).toLocaleString("vi-VN") + " VND";
            li.querySelector(".price").textContent = formattedPrice;
        }
    }
});
