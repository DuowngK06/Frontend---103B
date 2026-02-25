let players = [
    "Messi - Forward - 30",
    "Ronaldo - Forward - 28",
    "Neymar - Forward - 20",
    "De Bruyne - Midfielder - 10",
    "Kante - Midfielder - 5",
    "Van Dijk - Defender - 8",
    "Alisson - Goalkeeper - 0"
];

function getReversedNames(players) {
    return players
        .map(function (player) {
            return player.split(" - ")[0];
        })
        .slice()
        .reverse();
}

let result = getReversedNames(players);
console.log(result);