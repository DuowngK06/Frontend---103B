let warriors = [
    { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 60 },
    { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 70 },
    { id: "W003", name: "Spartacus", class: "Gladiator", attack: 80, defense: 65 },
    { id: "W004", name: "Lancelot", class: "Knight", attack: 75, defense: 85 },
    { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 }
];

function showMenu() {
    return +prompt(`
 ==========================================
        ANCIENT WARRIORS GUILD - QUAN LÝ GUILD

1. Hiển thị danh sách chiến binh hiện tại
2. Thêm chiến binh mới
3. Xóa chiến binh
4. Cập nhật thông tin chiến binh
5. Tìm kiếm chiến binh (theo tên hoac class)
6. Tính tổng sức mạnh guild (attack + defense)
7. Sắp xếp danh sách theo attack
8. Kiểm tra độ cân bang guild theo class
9. Mô phỏng trận chiến 1v1
0. Thoát chương trình
============================================
 lựa chọn của bạn :`);
}

// Case 1 
const displayWarriors = () => {
    console.table(warriors);
}

//Case 2
const createWarrior = () => {
    const id = prompt("Nhập ID chiến binh:").trim();
    const name = prompt("Nhập tên chiến binh:").trim();
    const warriorClass = prompt("Nhập class chiến binh:").trim();
    const attack = parseInt(prompt("Nhập điểm tấn công (attack):"));
    const defense = parseInt(prompt("Nhập điểm phòng thủ (defense):"));

    if (warriors.some(w => w.id === id)) {
        alert("ID đã tồn tại!");
        return;
    }

    warriors.push({ id, name, class: warriorClass, attack, defense });
    alert("Chiến binh đã được thêm thành công!");
}

// Case 3
const deleteWarrior = () => {
    const id = prompt("Nhập ID chiến binh cần xóa:");

    // tìm vị trí trong mảng
    const index = warriors.findIndex(w => w.id === id);

    if (index === -1) {
        alert("Không tìm thấy chiến binh!");
        return;
    }

    warriors.splice(index, 1);
    alert("Xóa chiến binh thành công!");
};

// Case 4
const updateWarrior = () => {
    const id = prompt("Nhập ID chiến binh cần cập nhật:");

    const warrior = warriors.find(w => w.id === id);

    if (!warrior) {
        alert("Không tìm thấy chiến binh!");
        return;
    }

    warrior.name = prompt("Nhập tên mới:", warrior.name);
    warrior.class = prompt("Nhập class mới:", warrior.class);
    warrior.attack = parseInt(prompt("Nhập attack mới:", warrior.attack));
    warrior.defense = parseInt(prompt("Nhập defense mới:", warrior.defense));

    alert("Cập nhật thành công!");
};

// Case 5
const searchWarrior = () => {
    const keyword = prompt("Nhập tên hoặc class cần tìm:").toLowerCase();

    const results = warriors.filter(w =>
        w.name.toLowerCase().includes(keyword) ||
        w.class.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
        alert("Không tìm thấy chiến binh!");
    } else {
        console.table(results);
    }
};

function main() {
    let running = true;

    while (running) {
        const choice = showMenu();

        switch (choice) {
            case 1:
                displayWarriors();
                break;
            case 2:
                createWarrior();
                break;
            case 3:


                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 0:
                running = false;
                alert("Thoát chương trình. Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

main();