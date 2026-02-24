
let attempts = 0;
let isAuthenticated = false;
const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";
while (attempts < 3) {
    let user = prompt("Tên đăng nhập:");
    let pass = prompt("Mật khẩu:");

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        alert("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
    } else {
        attempts++;
        alert("Sai tài khoản hoặc mật khẩu! Còn " + (3 - attempts) + " lần thử.");
    }
}

if (!isAuthenticated) {
    alert("Tài khoản đã bị khóa!");
} else {


    let libraries = ["Toán", "Văn", "Anh"];
    let choice;


    do {
        choice = Number(prompt(
            "--- HỆ THỐNG QUẢN LÝ THƯ VIỆN ---\n" +
            "1. Thêm sách mới\n" +
            "2. Hiển thị danh sách sách\n" +
            "3. Tìm kiếm sách\n" +
            "4. Cập nhật tên sách\n" +
            "5. Đảo ngược thứ tự sách\n" +
            "6. Gộp sách từ kho khác\n" +
            "7. Thoát\n" +
            "------------------------------------\n" +
            "Lựa chọn của bạn:"
        ));

        switch (choice) {


            case 1:
                let input = prompt("Nhập tên sách :");
                if (input) {
                    let newBooks = input.split(",");
                    for (let i = 0; i < newBooks.length; i++) {
                        let book = newBooks[i].trim();
                        if (book !== "") {
                            libraries.push(book);
                        }
                    }
                    alert("Đã thêm sách thành công!");
                }
                break;

            case 2:
                console.clear();
                console.log("DANH SÁCH SÁCH:");
                for (let i = 0; i < libraries.length; i++) {
                    console.log((i + 1) + ". " + libraries[i]);
                }
                alert("Danh sách đã in ra console (F12)");
                break;


            case 3:
                let search = prompt("Nhập tên sách cần tìm:");
                let index = libraries.indexOf(search);
                if (index !== -1) {
                    alert("Tìm thấy sách ở vị trí: " + index);
                } else {
                    alert("Không tìm thấy sách!");
                }
                break;
  
                 
            case 4:
                let oldName = prompt("Nhập tên sách cần sửa:");
                let pos = libraries.indexOf(oldName);
                if (pos !== -1) {
                    let newName = prompt("Nhập tên mới:");
                    libraries[pos] = newName;
                    alert("Cập nhật thành công!");
                } else {
                    alert("Sách không tồn tại!");
                }
                break;
   
                    
            case 5:
                libraries.reverse();
                alert("Đã đảo ngược thứ tự sách!");
                break;

                 
            case 6:
                let otherLibrary = ["Kỹ năng sống", "Truyện tranh"];
                libraries = libraries.concat(otherLibrary);
                alert("Đã gộp kho sách!");
                break;


            case 7:
                alert("Thoát chương trình!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }
 
    