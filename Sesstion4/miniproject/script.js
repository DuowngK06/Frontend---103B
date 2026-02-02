/***********************
 *  ĐĂNG NHẬP HỆ THỐNG
 ***********************/
let username;
let password;
let failCount = 0;
const MAX_FAIL = 3;

do {
    username = prompt("Mời bạn nhập tài khoản:");
    password = prompt("Mời bạn nhập mật khẩu:");

    if (username === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        break;
    }

    failCount++;
    let remain = MAX_FAIL - failCount;

    if (username !== "admin" && password !== "12345") {
        alert(`Sai cả tài khoản và mật khẩu! Còn ${remain} lần thử.`);
    } else if (password !== "12345") {
        alert(`Sai mật khẩu! Còn ${remain} lần thử.`);
    } else {
        alert(`Sai tài khoản! Còn ${remain} lần thử.`);
    }

    if (failCount === MAX_FAIL) {
        alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
    }

} while (failCount < MAX_FAIL);


/***************************
 *  MENU QUẢN TRỊ THƯ VIỆN
 ***************************/
let choice;

do {
    let menu = `
--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
1. Phân loại mã số sách (Chẵn / Lẻ)
2. Thiết kế sơ đồ kho sách
3. Dự toán phí bảo trì sách
4. Tìm mã số sách may mắn
5. Thoát
Nhập lựa chọn (1 - 5):
`;
    choice = Number(prompt(menu));

    switch (choice) {

        /* 1. PHÂN LOẠI MÃ SÁCH */
        case 1: {
            let bookId;
            let total = 0;
            let even = 0;
            let odd = 0;

            do {
                bookId = Number(prompt("Nhập mã sách (0 để kết thúc):"));

                if (isNaN(bookId)) {
                    alert("Vui lòng nhập số hợp lệ!");
                    continue;
                }

                if (bookId === 0) break;

                total++;
                bookId % 2 === 0 ? even++ : odd++;

            } while (true);

            console.log(`
--- KẾT QUẢ PHÂN LOẠI ---
Tổng số mã: ${total}
Mã chẵn (Sách khoa học): ${even}
Mã lẻ (Sách nghệ thuật): ${odd}
            `);

            alert("Đã phân loại xong! Xem Console (F12).");
            break;
        }

        /* 2. SƠ ĐỒ KHO SÁCH */
        case 2: {
            let rows = Number(prompt("Nhập số hàng kho:"));
            let cols = Number(prompt("Nhập số cột kho:"));

            if (rows <= 0 || cols <= 0 || isNaN(rows) || isNaN(cols)) {
                alert("Hàng và cột phải là số dương!");
                break;
            }

            console.log(`--- SƠ ĐỒ KHO SÁCH (${rows} x ${cols}) ---`);
            for (let i = 1; i <= rows; i++) {
                let line = "";
                for (let j = 1; j <= cols; j++) {
                    line += i === j ? `[${i}-${j}]* ` : `[${i}-${j}] `;
                }
                console.log(line);
            }

            alert("Đã in sơ đồ kho ra Console.");
            break;
        }

        /* 3. DỰ TOÁN PHÍ BẢO TRÌ */
        case 3: {
            let quantity = Number(prompt("Nhập số lượng sách:"));
            let cost = Number(prompt("Nhập phí bảo trì mỗi cuốn (VNĐ):"));
            let years = Number(prompt("Nhập số năm dự toán:"));

            if ([quantity, cost, years].some(isNaN)) {
                alert("Dữ liệu nhập vào phải là số!");
                break;
            }

            console.log("--- DỰ TOÁN PHÍ BẢO TRÌ ---");
            for (let year = 1; year <= years; year++) {
                let totalCost = quantity * cost;
                console.log(`Năm ${year}: ${totalCost.toLocaleString()} VNĐ`);
                cost *= 1.1; // tăng 10% mỗi năm
            }

            alert("Đã hoàn thành dự toán!");
            break;
        }

        /* 4. MÃ SÁCH MAY MẮN */
        case 4: {
            let n = Number(prompt("Kiểm tra mã sách từ 1 đến N:"));

            if (isNaN(n) || n <= 0) {
                alert("N phải là số dương!");
                break;
            }

            let count = 0;
            let result = "";

            for (let i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 !== 0) {
                    result += i + " ";
                    count++;
                }
            }

            console.log("--- MÃ SÁCH MAY MẮN ---");
            console.log(result || "Không có mã phù hợp.");
            console.log(`Tổng cộng: ${count} mã`);

            alert(`Tìm thấy ${count} mã may mắn.`);
            break;
        }

        /* 5. THOÁT */
        case 5:
            alert("Đăng xuất hệ thống. Hẹn gặp lại!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== 5);
