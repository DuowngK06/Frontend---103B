// ===============================
// DỮ LIỆU MẪU ĐỘI BÓNG
// ===============================

let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Văn B-Hậu vệ",
    "P003-Lê Văn C-Tiền vệ",
    "P004-Phạm Văn D-Tiền đạo",
    "P005-Hoàng Văn E-Tiền đạo",
    "P006-Đỗ Văn F-Thủ môn"
];


// ====================================
// a. In danh sách đội bóng
// ====================================
function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");

        console.log(
            (i + 1) + ". " +
            parts[0] + " | " +
            parts[1] + " | " +
            parts[2]
        );
    }
}


// ====================================
// b. Đếm số lượng cầu thủ theo vị trí
// ====================================
function countPlayerByPostion(players) {

    let result = {};

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];

        if (result[position]) {
            result[position]++;
        } else {
            result[position] = 1;
        }
    }

    return result;
}


// ====================================
// d. Kiểm tra có thủ môn không
// ====================================
function hasGoalkeeper() {

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];

        if (position === "Thủ môn") {
            return true;
        }
    }

    return false;
}


// ===============================
// CHẠY CHƯƠNG TRÌNH
// ===============================

printTeamRoster();

console.log("----- SỐ LƯỢNG THEO VỊ TRÍ -----");
console.log(countPlayerByPostion(players));

console.log("----- KIỂM TRA THỦ MÔN -----");
console.log("Đội có thủ môn không? ", hasGoalkeeper());