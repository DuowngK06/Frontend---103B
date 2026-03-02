let products = [
    { id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    { id: "P02", name: "Chuot không day Logitech", price: 45, category: "Phu kien", inStock: true },
    { id: "P03", name: "Ban phim co Keychron", price: 95, category: "Phu kien", inStock: false },
    { id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phy kien", inStock: true }

];


const inStockProducts = products.filter(product => product.inStock);
console.log("Sản phẩm còn hàng:", inStockProducts);


const sortedProducts = inStockProducts.sort((a, b) => b.price - a.price);

sortedProducts.forEach(product => {
    console.log(`Tên sản phẩm: ${product.name}, Giá: $${product.price}`);
});

