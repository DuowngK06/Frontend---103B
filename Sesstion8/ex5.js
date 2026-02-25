let players = [
    "Messi - Forward - 30 - 10",
    "Ronaldo - Forward - 28 - 12",
    "Neymar - Forward - 20 - 18",
    "De Bruyne - Midfielder - 10 - 23",
    "Kante - Midfielder - 5 - 6",
    "Van Dijk - Defender - 8 - 0",
    "Alisson - Goalkeeper - 0 - 0"
];

function reportTopPerformers(minPerformance, players) {
    let total = players
        .map(function (player) {
            let parts = player.split(" - ");
            return {
                name: parts[0],
                performance: Number(parts[2]) + Number(parts[3])
            };
        })
        .filter(function (player) {
            return player.performance >= minPerformance;
        })
        .map(function (player) {
            console.log(player.name + ": " + player.performance);
            return player.performance;
        })
        .reduce(function (sum, value) {
            return sum + value;
        }, 0);

    console.log("Tổng hiệu suất: " + total);
    return total;
}

reportTopPerformers(30, players);
reportTopPerformers(20, players);
reportTopPerformers(50, players);