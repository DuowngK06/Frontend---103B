let danhSachSach = [];
let soLuong = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));
if (!isNaN(soLuong) && soLuong > 0) {
    for (let i = 1; i <= soLuong; i++) {
        let tenSach = prompt("Nhập tên cuốn sách bị trả muộn thứ " + i + ":");
        danhSachSach.push(tenSach);
    }

    console.log("Tổng số sách bị trả muộn: " + danhSachSach.length);
    console.log("Danh sách sách bị trả muộn:");
    let sachTenDai = 0;
    for (let i = 0; i < danhSachSach.length; i++) {
        console.log((i + 1) + ". " + danhSachSach[i]);
        if (danhSachSach[i].length > 20) {
            sachTenDai++;
        }
    }
    console.log("Số lượng sách có tên dài hơn 20 ký tự: " + sachTenDai);
}