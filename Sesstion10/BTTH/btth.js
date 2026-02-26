let squad = [

    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

    { id: 2, name: "Tran Van B", goals: 5, position: "MF" },

    { id: 3, name: "Le Van C", goals: 0, position: "DF" },

    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

    { id: 5, name: "Dang Van E", goals: 0, position: "GK" }

];

function showMenu() {

    console.log("\n----- FOOTBALL MANAGER PRO -----");
    console.log("1. Xem đội hình");
    console.log("2. Thêm cầu thủ");
    console.log("3. Tìm kiếm (theo ID)");
    console.log("4. Cập nhật bàn thắng");
    console.log("5. Xóa cầu thủ (Chuyển nhượng)");
    console.log("0. Thoát");
}

let choice;

do {
    showMenu();
    choice = prompt("Lựa chon của bạn là:");

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