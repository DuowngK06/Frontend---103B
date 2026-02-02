let totalBooks = 0
let lostBooks = 0
let outOfStockBooks = 0
let manyStockBooks = 0
let normalStockBooks = 0

while (true) {
    let continueCheck = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)")

    if (continueCheck === null || continueCheck.toLowerCase() === "không") {
        break
    }

    if (continueCheck.toLowerCase() === "có") {
        let bookCode = ""
        while (bookCode.trim() === "") {
            bookCode = prompt("Mã sách (không được để trống):")
        }

        let bookName = prompt("Tên sách:")

        let quantity = -1
        while (isNaN(quantity) || quantity < 0) {
            quantity = parseInt(prompt("Số lượng thực tế (≥0):"), 10)
        }

        let status = 0
        while (status !== 1 && status !== 2) {
            status = parseInt(prompt("Tình trạng sách (1 - Bình thường, 2 - Mất):"), 10)
        }

        totalBooks++

        if (status === 2) {
            alert("Kết quả: Sách mất")
            lostBooks++
        } else if (status === 1 && quantity === 0) {
            alert("Kết quả: Sách hết hàng")
            outOfStockBooks++
        } else if (status === 1 && quantity >= 10) {
            alert("Kết quả: Sách tồn kho nhiều")
            manyStockBooks++
        } else if (status === 1 && quantity >= 1 && quantity <= 9) {
            alert("Kết quả: Sách tồn kho bình thường")
            normalStockBooks++
        }
    } else {
        alert("Vui lòng nhập 'có' hoặc 'không'")
    }
}

alert("BÁO CÁO KIỂM KÊ:\n" +
    "Tổng số sách đã kiểm kê: " + totalBooks + "\n" +
    "Số sách mất: " + lostBooks + "\n" +
    "Số sách hết hàng: " + outOfStockBooks + "\n" +
    "Số sách tồn kho nhiều: " + manyStockBooks + "\n" +
    "Số sách tồn kho bình thường: " + normalStockBooks)
