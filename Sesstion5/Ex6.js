

let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];


let numberOfOverdueReaders = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? "));


if (numberOfOverdueReaders <= 0 || isNaN(numberOfOverdueReaders)) {
    alert("Số lượng không hợp lệ!");
} else {

    for (let i = 0; i < numberOfOverdueReaders; i++) {
        console.log(`\n--- Nhập thông tin bạn đọc thứ ${i + 1} ---`);


        let readerCardId;
        let isDuplicate;
        do {
            isDuplicate = false;
            readerCardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);

            if (!readerCardId) {
                alert("Mã thẻ không được để trống!");
                isDuplicate = true;
                continue;
            }


            for (let j = 0; j < readerCardIds.length; j++) {
                if (readerCardIds[j] === readerCardId) {
                    alert("Mã thẻ này đã tồn tại! Vui lòng nhập mã thẻ khác.");
                    isDuplicate = true;
                    break;
                }
            }
        } while (isDuplicate);


        let readerName;
        do {
            readerName = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);
            if (!readerName) {
                alert("Tên bạn đọc không được để trống!");
            }
        } while (!readerName);


        let bookCodes = prompt(`Nhập mã sách đang mượn (cách nhau bởi dấu phẩy):`);
        if (!bookCodes) {
            bookCodes = "";
        }


        let days;
        do {
            days = parseInt(prompt(`Nhập số ngày quá hạn (≥ 0):`));
            if (isNaN(days) || days < 0) {
                alert("Số ngày quá hạn phải là số nguyên ≥ 0!");
            }
        } while (isNaN(days) || days < 0);


        readerCardIds.push(readerCardId);
        readerNames.push(readerName);
        borrowedBookCodes.push(bookCodes);
        overdueDays.push(days);
    }


    console.log("\n========== KẾT QUẢ ==========\n");


    let countOverdue10Days = 0;
    for (let i = 0; i < overdueDays.length; i++) {
        if (overdueDays[i] >= 10) {
            countOverdue10Days++;
        }
    }
    console.log(`a. Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${countOverdue10Days}`);


    let readersBothJS_PYT = [];
    for (let i = 0; i < borrowedBookCodes.length; i++) {
        let hasJS = false;
        let hasPYT = false;


        let bookCodeArray = borrowedBookCodes[i].split(",");
        for (let j = 0; j < bookCodeArray.length; j++) {
            let code = bookCodeArray[j].trim();
            if (code.startsWith("JS")) {
                hasJS = true;
            }
            if (code.startsWith("PYT")) {
                hasPYT = true;
            }
        }

        if (hasJS && hasPYT) {
            readersBothJS_PYT.push(readerCardIds[i]);
        }
    }

    console.log(`b. Mã thẻ bạn đọc mượn cả sách "JS" và "PYT":`);
    if (readersBothJS_PYT.length > 0) {
        for (let i = 0; i < readersBothJS_PYT.length; i++) {
            console.log(`   - ${readersBothJS_PYT[i]}`);
        }
    } else {
        console.log(`   Không có bạn đọc nào mượn cả sách "JS" và "PYT"`);
    }


    let maxOverdueDays = 0;
    let readerWithMaxOverdue = "";
    for (let i = 0; i < overdueDays.length; i++) {
        if (overdueDays[i] > maxOverdueDays) {
            maxOverdueDays = overdueDays[i];
            readerWithMaxOverdue = readerNames[i];
        }
    }
    console.log(`c. Bạn đọc có số ngày quá hạn cao nhất: ${readerWithMaxOverdue} (${maxOverdueDays} ngày)`);

    /
    let countOverdue7Days = 0;
    for (let i = 0; i < overdueDays.length; i++) {
        if (overdueDays[i] >= 7) {
            countOverdue7Days++;
        }
    }

    console.log(`d. Cảnh báo:`);
    if (countOverdue7Days === 0) {
        console.log(`   "Tình hình trả sách hôm nay khá tốt!"`);
    } else if (countOverdue7Days >= 1 && countOverdue7Days <= 4) {
        console.log(`   "Cần gửi nhắc nhở cho một số bạn đọc!"`);
    } else if (countOverdue7Days >= 5) {
        console.log(`   "Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!"`);
    }


    console.log("\n========== BẢNG THÔNG TIN CHI TIẾT ==========");
    console.log("STT | Mã Thẻ | Tên Bạn Đọc | Mã Sách | Số Ngày Quá Hạn");
    console.log("----+---------+-------------+---------+----------------");
    for (let i = 0; i < readerCardIds.length; i++) {
        console.log(`${i + 1}   | ${readerCardIds[i]} | ${readerNames[i]} | ${borrowedBookCodes[i]} | ${overdueDays[i]}`);
    }
}
