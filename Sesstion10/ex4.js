
const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 }
];

function analyzeSalary(minYears, teamPlayers) {
    // Lọc cầu thủ đủ điều kiện
    const filteredPlayers = teamPlayers.filter(player => player.years >= minYears);

    // Nếu không có ai đạt điều kiện
    if (filteredPlayers.length === 0) {
        return {
            totalSalary: 0,
            highestPaid: null,
            lowestPaid: null
        };
    }

    // Tính tổng lương
    const totalSalary = filteredPlayers.reduce((sum, player) => sum + player.salary, 0);

    // Tìm cao nhất
    const highest = filteredPlayers.reduce((max, player) =>
        player.salary > max.salary ? player : max
    );

    // Tìm thấp nhất
    const lowest = filteredPlayers.reduce((min, player) =>
        player.salary < min.salary ? player : min
    );

    return {
        totalSalary: totalSalary,
        highestPaid: { name: highest.name, salary: highest.salary },
        lowestPaid: { name: lowest.name, salary: lowest.salary }
    };
}


console.log(analyzeSalary(10, players));