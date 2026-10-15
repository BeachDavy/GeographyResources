// =========================
// GAME LIST (g1 → g100)
// =========================

const games = [
    { id: "g1",  name: "Space Dodge" },
    { id: "g2",  name: "100ng" },
    { id: "g3",  name: "adrenalinechallenge" },
    { id: "g4",  name: "among-us" },
    { id: "g5",  name: "awesometanks2" },
    { id: "g6",  name: "cookie-clicker" },
    { id: "g7",  name: "crossyroad" },
    { id: "g8",  name: "cubefield" },
    { id: "g9",  name: "Dash Run 3D" },
    { id: "g10", name: "DogeMiner" },
    { id: "g11", name: "geodash" },
    { id: "g12", name: "minecraft-classic" },
    { id: "g13", name: "paperio2" },
    { id: "g14", name: "Garden Defense" },
    { id: "g15", name: "precision-client" },
    { id: "g16", name: "retro-bowl" },
    { id: "g17", name: "run-3" },
    { id: "g18", name: "runner" },
    { id: "g19", name: "sandboxels" },
    { id: "g20", name: "slitherio" },
    { id: "g21", name: "slope" },
    { id: "g22", name: "Snowball Arena" },
    { id: "g23", name: "soccer-skills" },
    { id: "g24", name: "Stick Tactics" },
    { id: "g25", name: "subway-surfers-ny" },
    { id: "g26", name: "The Clash" },
    { id: "g27", name: "2048" },
    { id: "g28", name: "Ascii Space" },
    { id: "g29", name: "Asteroids" },
    { id: "g30", name: "Backcountry" },
    { id: "g31", name: "Black Hole Square" },
    { id: "g32", name: "Bounce Back" },
    { id: "g33", name: "Breaklock" },
    { id: "g34", name: "Breakout" },
    { id: "g35", name: "Captain Callisto" },
    { id: "g36", name: "Chess" },
    { id: "g37", name: "Chrome Incident" },
    { id: "g38", name: "Chrome Dino" },
    { id: "g39", name: "Connect 3" },
    { id: "g40", name: "Counter Clicker" },
    { id: "g41", name: "Doodle Jump" },
    { id: "g42", name: "Drift" },
    { id: "g43", name: "Drift Hunters" },
    { id: "g44", name: "Drive Mad" },
    { id: "g45", name: "Edge Not Found" },
    { id: "g46", name: "Rogue Glitch" },
    { id: "g47", name: "Flappy 2048" },
    { id: "g48", name: "Flappy Bird" },
    { id: "g49", name: "Flappy Plane" },
    { id: "g50", name: "Flight Simulator" },
    { id: "g51", name: "Google Snake" },
    { id: "g52", name: "Hextris" },
    { id: "g53", name: "Konnekt" },
    { id: "g54", name: "Lets Surf" },
    { id: "g55", name: "Little Alchemy" },
    { id: "g56", name: "Ninja vs Shadow Corp" },
    { id: "g57", name: "OVO 2" },
    { id: "g58", name: "Pack a Bunchas" },
    { id: "g59", name: "Pac-Man" },
    { id: "g60", name: "Particle Clicker" },
    { id: "g61", name: "Push Back" },
    { id: "g62", name: "Q1K3" },
    { id: "g63", name: "Radius Rush" },
    { id: "g64", name: "Retro Haunt" },
    { id: "g65", name: "Roadblocks" },
    { id: "g66", name: "Shuttle Deck" },
    { id: "g67", name: "Sleeping Beauty" },
    { id: "g68", name: "Snake" },
    { id: "g69", name: "Soccer Random" },
    { id: "g70", name: "Solitaire" },
    { id: "g71", name: "Space Garden" },
    { id: "g72", name: "Space Huggers" },
    { id: "g73", name: "Space Defenders" },
    { id: "g74", name: "Stack" },
    { id: "g75", name: "Stickman Hook" },
    { id: "g76", name: "Stickman Boost" },
    { id: "g77", name: "Stickman Climb" },
    { id: "g78", name: "Stickman Golf" },
    { id: "g79", name: "Stickman Hook 2" },
    { id: "g80", name: "Subway Surfers" },
    { id: "g81", name: "Tetris" },
    { id: "g82", name: "Maze of Space Goblins" },
    { id: "g83", name: "Tiny Fishing" },
    { id: "g84", name: "Tower Master" },
    { id: "g85", name: "Trimps" },
    { id: "g86", name: "Time Blaster 2" },
    { id: "g87", name: "Time Blaster 3" },
    { id: "g88", name: "We Become What We Behold" },
    { id: "g89", name: "World's Hardest Game 2" },
    { id: "g90", name: "XX142B2EXE" },
    { id: "g91", name: "Survival Royale" },
    { id: "g92", name: "Basket Random" },
    { id: "g93", name: "Basketbros.io" },
    { id: "g94", name: "Boxing Random" },
    { id: "g95", name: "Merge Round Racers" },
    { id: "g96", name: "Eggy Car" },
    { id: "g97", name: "Grindcraft" },
    { id: "g98", name: "Space Company" },
    { id: "g99", name: "Basketball Stars" },
    { id: "g100", name: "Moto X3M" },
    { id: "g101", name: "Bad Time Simulator (Undertale)" }
];

// =========================
// SIDEBAR LIST
// =========================

const sidebar = document.querySelector(".side-menu ul");

games.forEach(game => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="play.html?game=${game.id}">${game.name}</a>`;
    sidebar.appendChild(li);
});

// =========================
// GAME GRID
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

document.getElementById("search").addEventListener("input", function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll(".game-card").forEach(card => {
        const name = card.querySelector("p").innerText.toLowerCase();
        card.style.display = name.includes(term) ? "" : "none";
    });
});
