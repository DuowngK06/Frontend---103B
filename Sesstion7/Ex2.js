// =====================================
// QUẢN LÝ ĐỘI BÓNG (3 MẢNG SONG SONG)
// =====================================

// 1. Dữ liệu ban đầu (khai báo cứng)
let playerIds = ["P001", "P002", "P003"];
let playerNames = ["Nguyễn Văn A", "Trần Văn B", "Lê Văn C"];
let playerJerseyNumbers = [10, 5, 9];

// =====================================
// 2. Function in danh sách cầu thủ
// =====================================
function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");

    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            (i + 1) + ". " +
            playerIds[i] + " - " +
            playerNames[i] + " - Số áo: " +
            playerJerseyNumbers[i]
        );
    }
}

// =====================================
// 3. Function cập nhật tên và số áo
// =====================================
function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {

    for (let i = 0; i < playerIds.length; i++) {

        if (playerIds[i] === playerId) {

            playerNames[i] = newName;
            playerJerseyNumbers[i] = newJerseyNumber;

            return true;
        }
    }

    return false;

    // =====================================
    // 4. Chương trình chính
    // =====================================


    printTeamRoster();


    let idToUpdate = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");


    let index = playerIds.indexOf(idToUpdate);

    if (index !== -1) {

        let newName = prompt("Nhập tên mới cho cầu thủ:");

        let newJersey;


        do {
            newJersey = parseInt(prompt("Nhập số áo mới (1-99):"));
        } while (isNaN(newJersey) || newJersey < 1 || newJersey > 99);

        let result = updatePlayerNameAndJersey(idToUpdate, newName, newJersey);

        if (result) {
            console.log("Cập nhật thành công!");
            printTeamRoster();
        }

    } else {
        console.log("Không tìm thấy cầu thủ với mã này!");
    }