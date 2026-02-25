let players = [
    "Messi - Forward - 30 - 10 - 35",
    "Ronaldo - Forward - 28 - 12 - 34",
    "Neymar - Forward - 15 - 23 - 35",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Van Dijk - Defender - 5 - 3 - 33"
];

function reportByPosition(players) {

    let grouped = players
        .map(function (player) {
            let parts = player.split(" - ");
            return {
                name: parts[0],
                position: parts[1],
                goals: Number(parts[2]),
                assists: Number(parts[3]),
                matches: Number(parts[4])
            };
        })
        .reduce(function (acc, player) {
            if (!acc[player.position]) {
                acc[player.position] = {
                    count: 0,
                    goals: 0,
                    assists: 0,
                    matches: 0
                };
            }

            acc[player.position].count += 1;
            acc[player.position].goals += player.goals;
            acc[player.position].assists += player.assists;
            acc[player.position].matches += player.matches;

            return acc;
        }, {});

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");

    Object.keys(grouped).forEach(function (position) {
        let data = grouped[position];
        let avg = data.matches === 0
            ? 0
            : ((data.goals + data.assists) / data.matches).toFixed(2);

        console.log(position + ":\n");
        console.log("- Số cầu thủ: " + data.count);
        console.log("- Tổng bàn thắng: " + data.goals);
        console.log("- Tổng kiến tạo: " + data.assists);
        console.log("- Tổng số trận: " + data.matches);
        console.log("- Trung bình hiệu suất/trận: " + avg + "\n");
    });

    let totalGoals = Object.values(grouped)
        .reduce(function (sum, group) {
            return sum + group.goals;
        }, 0);

    console.log("------------------------");
    console.log("Tổng bàn thắng toàn đội : " + totalGoals);
}

reportByPosition(players);