// ===============================
// QUẢN LÝ ĐỘI BÓNG
// ===============================

// 1. Khai báo 2 mảng song song
let playerIds = [];
let playerPositions = [];

// 2. Hỏi số lượng cầu thủ
let numberOfPlayers = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

while (isNaN(numberOfPlayers) || numberOfPlayers <= 0) {
    numberOfPlayers = parseInt(prompt("Vui lòng nhập số nguyên dương hợp lệ:"));
}

// ===============================
// 3. Nhập thông tin cầu thủ
// ===============================

for (let i = 0; i < numberOfPlayers; i++) {

    console.log("Nhập cầu thủ " + (i + 1));

    // --- Nhập mã cầu thủ (phải duy nhất)
    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt("Mã cầu thủ:");

        // Kiểm tra trùng mã
        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại! Nhập lại.");
                break;
            }
        }

    } while (isDuplicate || !id);

    playerIds.push(id);

    // --- Nhập vị trí cầu thủ
    let positionChoice;
    let positionName;

    do {
        positionChoice = parseInt(prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"));
    } while (positionChoice < 1 || positionChoice > 4 || isNaN(positionChoice));

    switch (positionChoice) {
        case 1:
            positionName = "Thủ môn";
            break;
        case 2:
            positionName = "Hậu vệ";
            break;
        case 3:
            positionName = "Tiền vệ";
            break;
        case 4:
            positionName = "Tiền đạo";
            break;
    }

    playerPositions.push(positionName);
}

// ===============================
// 4. Function in danh sách
// ===============================
function printTeamRoster() {
    console.log("Đội bóng hiện tại (" + playerIds.length + " cầu thủ):");

    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}

// ===============================
// 5. Function tìm cầu thủ theo vị trí
// ===============================
function findPlayersByPosition(position) {
    let indexes = [];

    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indexes.push(i);
        }
    }

    return indexes;
}

// ===============================
// 6. Hỏi vị trí cần đếm
// ===============================

let countChoice = parseInt(prompt(
    "Nhập vị trí cầu thủ muốn đếm (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"
));

let countPosition;

switch (countChoice) {
    case 1:
        countPosition = "Thủ môn";
        break;
    case 2:
        countPosition = "Hậu vệ";
        break;
    case 3:
        countPosition = "Tiền vệ";
        break;
    case 4:
        countPosition = "Tiền đạo";
        break;
    default:
        countPosition = "";
}

// ===============================
// 7. In kết quả
// ===============================

printTeamRoster();

let resultIndexes = findPlayersByPosition(countPosition);

console.log("Số cầu thủ ở vị trí " + countPosition + ": " + resultIndexes.length);
console.log("Các chỉ số cầu thủ ở vị trí " + countPosition + ": " + resultIndexes);