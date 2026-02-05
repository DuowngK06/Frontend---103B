let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let loop = true;
while (loop) {
    let menu = "=== QUẢN LÝ THƯ VIỆN 4.0 ===\n" +
        "1. Xem danh sách\n" +
        "2. Thêm sách\n" +
        "3. Mượn sách (Xóa)\n" +
        "4. Cập nhật tên sách\n" +
        "5. Sắp xếp A-Z\n" +
        "0. Thoát\n" +
        "Nhập lựa chọn của bạn:";

    let input = prompt(menu);

    switch (input) {
        case "1":
            let list = "";
            for (let i = 0; i < books.length; i++) {
                list += books[i] + "\n";
            }
            alert(list);
            break;

        case "2":
            let newBook = prompt("Nhập tên sách:");
            if (newBook) {
                books[books.length] = newBook;
            }
            break;

        case "3":
            let deleteBook = prompt("Nhập tên sách muốn xóa:");
            let delIndex = -1;
            for (let i = 0; i < books.length; i++) {
                if (books[i] === deleteBook) {
                    delIndex = i;
                    break;
                }
            }
            if (delIndex !== -1) {
                for (let i = delIndex; i < books.length - 1; i++) {
                    books[i] = books[i + 1];
                }
                books.length = books.length - 1;
            }
            break;

        case "4":
            let oldName = prompt("Nhập tên sách cũ:");
            let upIndex = -1;
            for (let i = 0; i < books.length; i++) {
                if (books[i] === oldName) {
                    upIndex = i;
                    break;
                }
            }
            if (upIndex !== -1) {
                let newName = prompt("Nhập tên mới:");
                if (newName) books[upIndex] = newName;
            }
            break;

        case "5":
            for (let i = 0; i < books.length - 1; i++) {
                for (let j = i + 1; j < books.length; j++) {
                    if (books[i] > books[j]) {
                        let temp = books[i];
                        books[i] = books[j];
                        books[j] = temp;
                    }
                }
            }
            break;

        case "0":
        case null:
            loop = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}