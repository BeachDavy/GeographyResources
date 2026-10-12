// =========================
// GAME LIST (g1 → g26)
// =========================

const games = [
    { id: "g1",  name: "1v1space" },
    { id: "g2",  name: "100ng" },
    { id: "g3",  name: "adrenalinechallenge" },
    { id: "g4",  name: "among-us" },
    { id: "g5",  name: "awesometanks2" },
    { id: "g6",  name: "cookie-clicker" },
    { id: "g7",  name: "crossyroad" },
    { id: "g8",  name: "cubefield" },
    { id: "g9",  name: "death-run-3d" },
    { id: "g10", name: "DogeMiner" },
    { id: "g11", name: "geodash" },
    { id: "g12", name: "minecraft-classic" },
    { id: "g13", name: "paperio2" },
    { id: "g14", name: "plants-vs-zombies-1" },
    { id: "g15", name: "precision-client" },
    { id: "g16", name: "retro-bowl" },
    { id: "g17", name: "run-3" },
    { id: "g18", name: "runner" },
    { id: "g19", name: "sandboxels" },
    { id: "g20", name: "slitherio" },
    { id: "g21", name: "slope" },
    { id: "g22", name: "snowbattle" },
    { id: "g23", name: "soccer-skills" },
    { id: "g24", name: "stickwar" },
    { id: "g25", name: "subway-surfers-ny" },
    { id: "g26", name: "thebattle" }
];

// =========================
// SIDEBAR LIST (text only)
// =========================

const sidebar = document.querySelector(".side-menu ul");

games.forEach(game => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="play.html?game=${game.id}">${game.name}</a>`;
    sidebar.appendChild(li);
});

// =========================
// GAME GRID (text-only boxes)
// =========================

const grid = document.getElementById("game-grid");

games.forEach(game => {
    const div = document.createElement("div");
    div.className = "game-card";
    div.innerHTML = `
        <a href="play.html?game=${game.id}">
            <p>${game.name}</p>
        </a>
    `;
    grid.appendChild(div);
});

// =========================
// SEARCH BAR
// =========================

document.getElementById("
