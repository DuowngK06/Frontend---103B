


let bookName;
let borrowerName;
let favoriteLevel;

// Lấy dữ liệu từ người dùng
bookName = prompt("Nhập tên sách mượn:");
borrowerName = prompt("Nhập tên người mượn:");
favoriteLevel = parseInt(prompt("Nhập mức độ yêu thích (1-5):"));

if (favoriteLevel === 5 || favoriteLevel === 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (favoriteLevel === 3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (favoriteLevel === 2 || favoriteLevel === 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
    console.log("Mức độ yêu thích không hợp lệ. Vui lòng nhập giá trị từ 1 đến 5.");
}


console.log(`\n--- Thông tin sách mượn ---`);
console.log(`Tên sách: ${bookName}`);
console.log(`Người mượn: ${borrowerName}`);
console.log(`Mức độ yêu thích: ${favoriteLevel}/5`);
