const productList = document.getElementById("product-list");

productList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.closest("li");
        if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            li.remove();
        }
    }
});
