const players = [
    "01-Nguyen Van A-Thủ môn",
    "02-Le Van B-Hậu vệ",
    "03-Tran Van C-Tiền vệ",
    "04-Pham Van D-Tiền đạo",
    "05-Nguyen Thi E-Hậu vệ",
    "06-Hoang Van F-Tiền vệ"
];

// a. Lấy tất cả vị trí duy nhất
function getAllPositions() {
    const positions = players.map(p => p.split("-")[2]);
    return [...new Set(positions)];
}

// b. Tìm cầu thủ có tên dài nhất
function findPlayersWithLongestName() {
    const names = players.map(p => p.split("-")[1]);
    let longest = names[0];
    for (let name of names) {
        if (name.length > longest.length) {
            longest = name;
        }
    }
    return longest;
}

// c. Đếm số cầu thủ có tên bắt đầu bằng chữ cái cho trước
function countPlayersStartingWithLetter(letter) {
    const names = players.map(p => p.split("-")[1]);
    const target = letter.toLowerCase();
    return names.filter(name => name[0].toLowerCase() === target).length;
}

// Chạy thử
console.log("Các vị trí:", getAllPositions());
console.log("Tên dài nhất:", findPlayersWithLongestName());
console.log("Số cầu thủ bắt đầu bằng N:", countPlayersStartingWithLetter("N"));
