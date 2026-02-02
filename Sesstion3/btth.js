// --- Chức năng Đăng nhập ---
let attempts = 0
let loggedIn = false

while (attempts < 3) {
    let password = prompt("Nhập mật khẩu:")
    if (password === "admin123") {
        alert("Đăng nhập thành công")
        loggedIn = true
        break
    } else {
        attempts++
        alert("Sai mật khẩu. Lần thử: " + attempts)
    }
}

if (!loggedIn) {
    alert("Hệ thống bị khóa")
} else {
    // --- Menu chính ---
    while (true) {
        let choice = prompt(
            "MENU:\n" +
            "1. Nhập lô sách mới\n" +
            "2. Vẽ sơ đồ kệ sách\n" +
            "3. Thoát\n" +
            "Nhập lựa chọn (1/2/3):"
        )

        if (choice === "1") {

            let n = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"), 10)
            let total = 0

            for (let i = 1; i <= n; i++) {
                let price = parseFloat(prompt("Giá tiền cuốn sách thứ " + i + ":"))
                if (price <= 0 || isNaN(price)) {
                    alert("Giá không hợp lệ, bỏ qua cuốn này.")
                    continue
                }
                total += price
            }

            alert("Tổng giá trị nhập kho đợt này là: " + total)

        } else if (choice === "2") {

            let result = ""
            for (let area = 1; area <= 3; area++) {
                for (let shelf = 1; shelf <= 5; shelf++) {
                    if (area === 2 && shelf === 3) {
                        result += "Khu vực 2 - Kệ 3 (Đang sửa chữa)\n"
                        continue
                    }
                    result += "Khu vực " + area + " - Kệ " + shelf + "\n"
                }
            }
            alert(result)

        } else if (choice === "3") {

            alert("Hẹn gặp lại!")
            break
        } else {
            alert("Lựa chọn không hợp lệ, vui lòng nhập 1, 2 hoặc 3.")
        }
    }
}
