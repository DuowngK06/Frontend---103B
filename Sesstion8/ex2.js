

// Mảng tên cầu thủ (đã định nghĩa sẵn)
let playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];

// Hàm chuyển toàn bộ tên sang chữ HOA
function getUpperNames(playerNames) {

    let newArray = playerNames.map(function (name) {
        return name.toUpperCase();
    });

    return newArray;
}

// Gọi hàm
let result = getUpperNames(playerNames);

console.log(result);