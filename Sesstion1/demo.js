//kiểu chuỗi 
const email = "nva@gmail.com";
const address = "Thanh Xuân , Hà Nội";

//1. Thao tác nối chuỗi 
console.log("Email = " + email + " - " + "Địa chỉ  = " + address);

//Template string('')
console.log(`Email = ${email}, Address = ${address}`);

//3. Kiểu boolean
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("abc")); //true
console.log(Boolean("")); //false      
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false    
console.log(Boolean(NaN)); //false
console.log(Boolean(false)); //false
console.log(Boolean(true)); //true
//4. Kiểu undefined
let gender;
console.log("gender:", gender);

//5. Kiểu null: khi khai báo 1 biến , nếu chúng ta "chưa muốn hoặc không xác định
// trước được giá trị của biến đó " thì mặc định có thể gán là null
const user = null;

//6. Kiểu NaN (Not a Number)
console.log("kiểu dữ liệu của NaN:", typeof NaN);
console.log("Result:", 10 / "abc");

//Chuyển đổi dữ liệu

const mathScore = 10;
const physicsScore = "8";

//chuyển đổi từ 1 chuỗi thành số
// console.log (Number (historyScory));
//console.log(parseInt(physicsScore));
//console.log(parseFloat(physicsScore));
// cơ chế lựa chọn

