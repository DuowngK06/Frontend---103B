let products = [
    { id: "P01", name: "laptop MacBook Pro M3", price: 2000, cattegory: "laptop", inStock: true },
    { id: "P02", name: "Chuột không dây Logitech", price: 45, cattegory: "Phụ kiện", inStock: true },
    { id: "P03", name: "Bàn phím cơ Keychron", price: 95, cattegory: "Phụ kiện", inStock: false },
    { id: "P04", name: "Màn hình Dell UltraSharp ", price: 450, cattegory: "Màn hình", inStock: true },
    { id: "P05", name: "Tai nghe Sony WH-1000M5", price: 350, cattegory: "Phụ kiện", inStock: true }
]


const productP03 = products .find(products => products.id === "P03");
console.log(productP03);


