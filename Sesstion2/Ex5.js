let tenSach = prompt("Nhập tên sách:");
let trangThai = prompt("Nhập trạng thái sách (có sẵn/đã mượn):");
let namXuatBan = prompt("Nhập năm xuất bản:");


namXuatBan = parseInt(namXuatBan);


let namHienTai = new Date().getFullYear();


let soNam = namHienTai - namXuatBan;


if (trangThai === "có sẵn" && soNam <= 5) {
    alert("Sách này mới và có sẵn để mượn");
} else if (trangThai === "đã mượn" && soNam <= 10) {
    alert("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (trangThai === "đã mượn" && soNam > 10) {
    alert("Sách này đã mượn và khá cũ");
} else if (trangThai === "có sẵn" && soNam > 5) {
    alert("Sách này có sẵn nhưng đã lâu năm");
} else {
    alert("Thông tin nhập chưa đúng, vui lòng thử lại!");
}
