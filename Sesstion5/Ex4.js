let booksId = [];
let booksName = [];
let bookStatus = [];

let n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
for (let i = 0; i < n; i++) {
    let id = prompt("Nhập mã sách (không để trống):");
    let name = prompt("Nhập tên sách (không để trống):");
    let statusChoice = prompt("Nhập tình trạng ban đầu (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp):");
    let status = "";
    if (statusChoice === "1") status = "Hỏng nhẹ";
    else if (statusChoice === "2") status = "Hỏng nặng";
    else if (statusChoice === "3") status = "Cần sửa gấp";
    booksId.push(id);
    booksName.push(name);
    bookStatus.push(status);
}

function hienThiDanhSach() {
    console.log("--- Danh sách hiện tại (" + booksId.length + " cuốn) ---");
    for (let i = 0; i < booksId.length; i++) {
        console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
    }
}
hienThiDanhSach();

let check = true;
while (check) {
    let luaChon = prompt("Hỏi người dùng muốn làm gì:\n1: Sửa tình trạng cuốn sách\n2: Loại bỏ (xóa) một cuốn sách khỏi danh sách\n0: Kết thúc và in báo cáo cuối");

    if (luaChon === "1") {
        let maSua = prompt("Nhập mã sách cần sửa:");
        let indexSua = booksId.indexOf(maSua);
        if (indexSua !== -1) {
            let tinhTrangMoi = prompt("Chọn tình trạng mới (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp, 4: Đã sửa xong, 5: Loại bỏ):");
            let statusMoi = "";
            if (tinhTrangMoi === "1") statusMoi = "Hỏng nhẹ";
            else if (tinhTrangMoi === "2") statusMoi = "Hỏng nặng";
            else if (tinhTrangMoi === "3") statusMoi = "Cần sửa gấp";
            else if (tinhTrangMoi === "4") statusMoi = "Đã sửa xong";
            else if (tinhTrangMoi === "5") statusMoi = "Loại bỏ";

            bookStatus[indexSua] = statusMoi;
            hienThiDanhSach();
        } else {
            console.log("Không tìm thấy mã sách!");
        }
    } else if (luaChon === "2") {
        let maXoa = prompt("Nhập mã sách cần xóa:");
        let indexXoa = booksId.indexOf(maXoa);
        if (indexXoa !== -1) {
            booksId.splice(indexXoa, 1);
            booksName.splice(indexXoa, 1);
            bookStatus.splice(indexXoa, 1);
            hienThiDanhSach();
        } else {
            console.log("Không tìm thấy mã sách!");
        }
    } else if (luaChon === "0") {
        check = false;
        let daSuaXong = 0;
        let loaiBo = 0;

        for (let status of bookStatus) {
            if (status === "Đã sửa xong") daSuaXong++;
            if (status === "Loại bỏ") loaiBo++;
        }

        console.log("--- BÁO CÁO CUỐI ---");
        console.log("Tổng số sách còn lại: " + booksId.length);
        console.log("Số sách đã 'Đã sửa xong': " + daSuaXong);
        console.log("Số sách 'Loại bỏ': " + loaiBo);
        hienThiDanhSach();
    }
}