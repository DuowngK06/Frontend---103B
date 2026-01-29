//Sự khác nhau giữa toán tử so sánh : == và ===
//toán tử so sánh "==" : chỉ so sánh về mặt giá trị, không quan tâm kiểu dữ liệu
//toán tử so sánh "===" : so sánh cả về giá trị và kiểu dữ liệu
const variable_1 = 10; // type: number

const variable_2 = "10";// type: string

console.log(variable_1 == variable_2); // true: so sánh giá trị

console.log(variable_1 === variable_2); // false: so sánh cả giá trị và kiểu dữ liệu

console.log("khi kiểm tra lại với !=", variable_1 != variable_2); // false: so sánh giá trị

console.log("khi kiểm tra lại với !==", variable_1 !== variable_2); // true: so sánh cả giá trị và kiểu dữ liệu

// Câu lệnh điều kiện
//1. Nếu có 1 điều kiện 
const myAge = 18
if (myAge >= 18) {
    console.log("Bạn đã đủ tuổi đi tù ");
}

//2. Nếu có 2 điều kiện
if (myAge < 18) {
    console.log("Bạn đã đủ tuổi đi tù ");
} else {
    console.log("Bạn chưa đủ tuổi đi tù ");
}

//3. Nếu có nhiều hơn 2 điều kiện

// if(){

// }else if(){

// }else{

// }

// Khi nào nên dùng if - else if - else: Khi điều kiện "nằm trong khoảng "

// Câu lệnh switch - case: Dùng toán tử so sánh "==="
const day = 7;
switch (day) {
    case 2:
        console.log("Hôm nay là thứ 2");
        break;
    case 3:
        console.log("Hôm nay là thứ 3");
        break;
    case 4:
        console.log("Hôm nay là thứ 4");
        break;
    case 5:
        console.log("Hôm nay là thứ 5");
        break;
    case 6:
        console.log("Hôm nay là thứ 6");
        break;
    case 7:
        console.log("Hôm nay là thứ 7");
        break;
    case 8:
        console.log("Hôm nay là thứ 8");
        break;
    default:
        console.log("Không xác định được ngày");
        break;
}









