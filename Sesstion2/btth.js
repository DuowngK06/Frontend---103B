// 1. Nhập liệu từ người dùng
let rawName = prompt("Nhập tên người dùng:");
let rawRole = prompt("Nhập vai trò (admin, student, guest):");
let rawBalance = prompt("Nhập số dư tài khoản:");
let rawStatus = prompt("Trạng thái thẻ (nhập 'true' nếu đang hoạt động):");
let rawOverdueDays = prompt("Số ngày quá hạn (nhập 0 nếu đúng hạn):");

// 2. Chuẩn hóa và ép kiểu dữ liệu
let name = rawName ? rawName.trim() : "";
let role = rawRole ? rawRole.toLowerCase().trim() : "";
let balance = Number(rawBalance) || 0;
let isActive = rawStatus === "true";
let overdueDays = parseInt(rawOverdueDays) || 0;

// Biến lưu trữ kết quả xử lý
let accessMsg = "";
let borrowStatus = "";
let fineMsg = "";
let totalFine = 0;

// 3. Kiểm tra quyền truy cập (Switch Case)
switch (role) {
    case "admin":
        accessMsg = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        accessMsg = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        accessMsg = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        accessMsg = "Lỗi: Vai trò không hợp lệ!";
}

// 4. Kiểm tra điều kiện mượn sách
let canBorrow = false;
let reason = "";

if (!name) {
    reason = "Tên không được để trống";
} else if (role !== "admin" && role !== "student") {
    reason = "Vai trò không có quyền mượn";
} else if (balance <= 0 || !isActive) {
    reason = "Tài khoản hết tiền hoặc thẻ bị khóa";
} else {
    canBorrow = true;
}

borrowStatus = canBorrow ? "ĐƯỢC PHÉP MƯỢN SÁCH" : `YÊU CẦU BỊ TỪ CHỐI (${reason})`;

// 5. Tính phí phạt
if (overdueDays <= 0) {
    fineMsg = "Cảm ơn bạn đã trả đúng hạn";
    totalFine = 0;
} else if (overdueDays <= 5) {
    totalFine = overdueDays * 5000;
    fineMsg = `Quá hạn ${overdueDays} ngày`;
} else if (overdueDays <= 10) {
    totalFine = overdueDays * 10000;
    fineMsg = `Quá hạn ${overdueDays} ngày`;
} else {
    totalFine = 200000;
    fineMsg = `Quá hạn ${overdueDays} ngày - TÀI KHOẢN BỊ KHÓA`;
}

// 6. In kết quả cuối cùng
console.log(`--- HỆ THỐNG MƯỢN TRẢ ---`);
console.log(`Người dùng: ${name.toUpperCase()}`);
console.log(`Quyền hạn: ${accessMsg}`);
console.log(`Kết quả mượn: ${borrowStatus}`);
console.log(`Tình trạng trả sách: ${fineMsg}`);
console.log(`Tiền phạt: ${totalFine.toLocaleString()} VNĐ`);