let booksId = []; let booksName = []; let booksCategory = []; let inventoryQuantity = [];
let n = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay? "));

if (n > 0) {
    for (let i = 0; i < n; i++) {
        let id = prompt("Nhập mã sách thứ " + (i + 1));
        while (booksId.indexOf(id) !== -1 || id == "") {
            id = prompt("Mã bị trùng hoặc trống, nhập lại mã khác:");
        }
        booksId.push(id);


        let name = prompt("Nhập tên sách:"); booksName.push(name);
        let category = prompt("Nhập các thể loại:"); booksCategory.push(category);
        let qty = parseInt(prompt("Nhập số lượng tồn:")); inventoryQuantity.push(qty);
    }
    let countLT = 0;

    for (let j = 0; j < booksCategory.length; j++) {
        if (booksCategory[j].toLowerCase().indexOf("lập trình") !== -1) {
            countLT++;
        }
    }
    console.log("Tổng số sách thuộc thể loại 'Lập trình': " + countLT);
    console.log("Các mã sách thuộc cả 'JavaScript' và 'Web':");

    for (let k = 0; k < booksCategory.length; k++) {
        let cat = booksCategory[k].toLowerCase();
        if (cat.indexOf("javascript") !== -1 && cat.indexOf("web") !== -1) {
            console.log("- " + booksId[k]);
        }
    }
    let min = inventoryQuantity[0]; let indexMin = 0;
    for (let m = 1; m < inventoryQuantity.length; m++) {
        if (inventoryQuantity[m] < min) {
            min = inventoryQuantity[m]; indexMin = m;
        }
    }
    console.log("Loại sách có tồn kho thấp nhất là: " + booksName[indexMin] + " (" + booksId[indexMin] + ")");
}