let numbers = [100, 200, 300, 400];


for (let number of numbers) {
    console.log(number);
}


for (let index in numbers) {
    console.log(`Vị trí ${index}: ${numbers[index]}`);
}