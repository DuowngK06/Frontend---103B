
let tenSach = prompt("Nhập tên sách:");
let theLoai = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let tinhTrang = prompt("Sách còn sẵn không? (có sẵn / đã mượn)");

// Chuẩn hóa dữ liệu nhập
theLoai = theLoai.trim();
tinhTrang = tinhTrang.trim().toLowerCase();

if (theLoai === "Khoa học" || theLoai === "Lịch sử") {
    if (tinhTrang === "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (theLoai === "Văn học" || theLoai === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}
