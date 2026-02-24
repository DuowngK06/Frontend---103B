// ===============================
// DỮ LIỆU MẪU ĐỘI BÓNG
// ===============================

let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần B-Hậu vệ",
    "P003-Lê Văn C-Tiền vệ",
    "P004-Phạm D-Tiền đạo",
    "P005-Hoàng Văn E-Tiền đạo"
];


// ====================================
// a. Tìm tên cầu thủ ngắn nhất
// ====================================
function getShortestPlayerName() {

    if (players.length === 0) {
        return null;
    }

    // Lấy tên đầu tiên làm mặc định
    let firstParts = players[0].split("-");
    let shortestName = firstParts[1];

    for (let i = 1; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];

        if (name.length < shortestName.length) {
            shortestName = name;
        }
    }

    return shortestName;
}


// ====================================
// b. Đếm số cầu thủ có độ dài tên vị trí > length
// ====================================
function countPlayersWithPositionLengthGreaterThan(length) {

    let count = 0;

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];

        if (position.length > length) {
            count++;
        }
    }

    return count;
}




console.log("Tên cầu thủ ngắn nhất:", getShortestPlayerName());

console.log(
    "Số cầu thủ có tên vị trí dài hơn 7 ký tự:",
    countPlayersWithPositionLengthGreaterThan(7)
);