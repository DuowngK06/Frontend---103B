let orders = ["Don hang A", "Don hang B", "Don hang C", "Don hang D", "Don hang E"];
let enruve = [1500, 2800, 1200, -500, 3200];



let orderReports = orders.map((order, index) => {
    return `${order} mang về ${enruve[index]} USD`;
});

console.log(orderReports);
