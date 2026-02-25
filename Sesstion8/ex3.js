let players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

function filterPlayersByPosition(position, players) {
    return players.filter(function (player) {
        let parts = player.split(" - ");
        return parts[1] === position;
    });
}

let result1 = filterPlayersByPosition("Midfielder", players);
let result2 = filterPlayersByPosition("Forward", players);

console.log(result1);
console.log(result2);