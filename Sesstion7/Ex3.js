let players = [];

let numberOfPlayers = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

while (isNaN(numberOfPlayers) || numberOfPlayers <= 0) {
    numberOfPlayers = parseInt(prompt("Vui lòng nhập số nguyên dương hợp lệ:"));
}

function pushPlayer(id, name, position) {
    let playerString = id + "-" + name + "-" + position;
    players.push(playerString);
}

function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(
            (i + 1) + ". Mã: " + parts[0] +
            " | Tên: " + parts[1] +
            " | Vị trí: " + parts[2]
        );
    }
}

for (let i = 0; i < numberOfPlayers; i++) {

    console.log("Nhập cầu thủ " + (i + 1));

    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt("Mã cầu thủ:");

        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === id) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại! Nhập lại.");
                break;
            }
        }

    } while (!id || isDuplicate);

    let name;

    do {
        name = prompt("Tên cầu thủ:");
    } while (!name);

    let positionChoice;
    let positionName;

    do {
        positionChoice = parseInt(prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"));
    } while (isNaN(positionChoice) || positionChoice < 1 || positionChoice > 4);

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

    pushPlayer(id, name, positionName);
}

printTeamRoster();