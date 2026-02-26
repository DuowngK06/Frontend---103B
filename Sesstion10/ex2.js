

const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35
};

function addPerformanceScore(player) {
    // Tính hiệu suất
    let performance = (player.goals + player.assists) / player.matchesPlayed;

    // Làm tròn 2 chữ số thập phân
    performance = Number(performance.toFixed(2));

    // Thêm thuộc tính mới
    player.performancePerMatch = performance;

    // Kiểm tra cầu thủ chủ chốt
    player.isKeyPlayer = performance >= 1.0;

    console.log(player);
}


addPerformanceScore(player);