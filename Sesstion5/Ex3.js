let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let soLoaiSach = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? "));
if (!isNaN(soLoaiSach) && soLoaiSach > 0) {
    for (let i = 0; i < soLoaiSach; i++) {
        let id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
        let name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
        let quantity = parseInt(prompt("Nhập số lượng tồn kho hiện tại:"));

        booksId.push(id);
        booksName.push(name);
        inventoryQuantity.push(quantity);
    }
    console.log("Danh sách sách cần xem xét bổ sung (" + booksId.length + " loại):");

    let uuTienBoSung = 0;
    let maSachHetHang = [];
    for (let i = 0; i < booksId.length; i++) {
        console.log((i + 1) + ". Mã: " + booksId[i] + " - Tên: " + booksName[i] + " - Còn: " + inventoryQuantity[i] + " bản");

        if (inventoryQuantity[i] <= 5) {
            uuTienBoSung++;
        }
        if (inventoryQuantity[i] === 0) {
            maSachHetHang.push(booksId[i]);
        }
    }
    console.log("\nSố sách có tồn kho <= 5 bản: " + uuTienBoSung + " loại");
    console.log("Các mã sách đã hết hàng (0 bản): " + (maSachHetHang.length > 0 ? maSachHetHang.join(", ") : "ko có"));
}