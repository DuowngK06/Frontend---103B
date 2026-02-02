
let count = 0;
let total = 0;
let maxTimes = 3;

while (count < maxTimes) {
    let input = prompt("Nhập một số:");
    let number = Number(input);


    if (!isNaN(number)) {
        total = total + number;
        count = count + 1;
    } else {
        alert("Bạn phải nhập số hợp lệ!");
    }
}

alert("Tổng các số bạn nhập là: " + total);
