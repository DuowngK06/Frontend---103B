let tenSach = prompt("Nhập tên sách:");
let tenNguoiMuon = prompt("Nhập tên người mượn:");
let trangThai = prompt("Nhập tình trạng sách (có sẵn/đã mượn/không có sẵn):");
let soNgayMuon = prompt("Nhập số ngày mượn (nếu có):");
let coTheThuVien = prompt("Người mượn có thẻ thư viện không? (có/không):");


soNgayMuon = parseInt(soNgayMuon);


if (trangThai === "có sẵn") {
    if (coTheThuVien === "có") {
        alert("Chúc mừng, bạn có thể mượn sách này");
    } else {
        alert("Bạn cần có thẻ thư viện để mượn sách");
    }
} else if (trangThai === "đã mượn") {
    if (soNgayMuon < 30) {
        if (coTheThuVien === "có") {
            alert("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            alert("Bạn không thể mượn sách nếu không có thẻ thư viện");
        }
    } else {
        alert("Sách này đã mượn quá lâu, vui lòng liên hệ thủ thư");
    }
} else if (trangThai === "không có sẵn") {
    alert("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else {
    alert("Thông tin không hợp lệ, vui lòng nhập lại");
}

