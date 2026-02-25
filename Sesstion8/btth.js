const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

function showMenu() {
    console.log("\n--- QUẢN LÝ ĐỘI BÓNG ---");
    console.log("1. Xem danh sách");
    console.log("2. Tìm kiếm (Find)");
    console.log("3. Lọc vị trí (Filter)");
    console.log("4. Tổng bàn thắng (Reduce)");
    console.log("5. Kiểm tra hiệu suất (Some/Every)");
    console.log("0. Thoát");
}

function viewPlayers() {
    squad.forEach(function (player) {
        console.log(player[0] + " (" + player[2] + "): " + player[1] + " bàn thắng");
    });
}

function findPlayer() {
    let name = prompt("Nhập tên cầu thủ cần tìm:");
    let result = squad.find(function (player) {
        return player[0].toLowerCase() === name.toLowerCase();
    });

    if (result) {
        console.log("Tìm thấy:");
        console.log(result[0] + " - " + result[2] + " - " + result[1] + " bàn");
    } else {
        console.log("Không tìm thấy cầu thủ.");
    }
}

function filterByPosition() {
    let pos = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK):");

    let result = squad.filter(function (player) {
        return player[2] === pos;
    });

    console.log("=> KẾT QUẢ LỌC:");
    result.forEach(function (player) {
        console.log("- " + player[0] + " (" + player[1] + " bàn)");
    });
}

function totalGoals() {
    let total = squad.reduce(function (sum, player) {
        return sum + player[1];
    }, 0);

    console.log("=> Tổng số bàn thắng toàn đội: " + total + " bàn");
}

function checkPerformance() {
    let hasZero = squad.some(function (player) {
        return player[1] === 0;
    });

    if (hasZero) {
        console.log("Có cầu thủ chưa ghi bàn");
    }

    let allScored = squad.every(function (player) {
        return player[1] > 0;
    });

    if (allScored) {
        console.log("Tất cả cầu thủ đều đã ghi bàn");
    }
}

let choice;

do {
    showMenu();
    choice = prompt("Bạn chọn:");

    switch (choice) {
        case "1":
            viewPlayers();
            break;
        case "2":
            findPlayer();
            break;
        case "3":
            filterByPosition();
            break;
        case "4":
            totalGoals();
            break;
        case "5":
            checkPerformance();
            break;
        case "0":
            console.log("=> Hẹn gặp lại!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }

} while (choice !== "0");