
let studen = "Nam, Lan, Hùng, An, Nam";


let students = studen.split(',').map(s => s.trim());
console.log('Mảng students:', students);


students.reverse();
console.log('Mảng sau khi đảo ngược:', students);


if (students.includes('Lan')) {
    console.log('Tên Lan tồn tại trong mảng');
} else {
    console.log('Tên Lan không tồn tại trong mảng');
}


let indexNam = students.indexOf('Nam');
if (indexNam !== -1) {
    console.log("Vị trí đầu tiên của Nam là:", indexNam);
} else {
    console.log("Không tìm thấy tên Nam trong mảng");
}


for (let i = 0; i < students.length; i++) {
    console.log(`Học sinh thứ ${i + 1}: ${students[i]}`);
}
