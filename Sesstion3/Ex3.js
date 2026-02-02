let successCount = 0
let failCount = 0

while (true) {
    let newRequest = prompt("Có yêu cầu gia hạn mới không? (có/không)")

    if (newRequest === null || newRequest.toLowerCase() === "không") {
        break
    }

    if (newRequest.toLowerCase() === "có") {
        let readerName = prompt("Tên bạn đọc:")
        let bookName = prompt("Tên sách:")
        let currentDays = parseInt(prompt("Số ngày đã mượn hiện tại (≥1):"), 10)
        let extendDays = parseInt(prompt("Số ngày muốn gia hạn thêm (≥1):"), 10)

        if (currentDays + extendDays > 60) {
            alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa")
            failCount++
        } else if (currentDays > 45) {
            alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)")
            failCount++
        } else if (currentDays + extendDays <= 30) {
            alert("Gia hạn thành công")
            successCount++
        } else {
            alert("Không được gia hạn: Điều kiện không phù hợp")
            failCount++
        }
    } else {
        alert("Vui lòng nhập 'có' hoặc 'không'")
    }
}

alert("Thống kê ca làm việc:\n" +
    "Gia hạn thành công: " + successCount + "\n" +
    "Gia hạn không thành công: " + failCount)
