let danhSachSach = [];
let soLuong = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));
for (let i = 1; i <= soLuong; i++) {
    let tenSach = prompt("Nhập tên cuốn sách thứ " + i + ":");

    danhSachSach.push(tenSach);
}
console.log("--- Kết quả ---");
console.log("Tổng số sách đã được trả: " + danhSachSach.length);
console.log("Danh sách sách đã trả:");
for (let i = 0; i < danhSachSach.length; i++) {
    console.log((i + 1) + ". " + danhSachSach[i]);
}