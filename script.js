/* --- OLD GAME SYSTEM (KEEPING YOUR ORIGINAL PLAY.HTML WORKING) --- */

const oldGames = {
  "1v1space": "1v1space",
  "100ng": "100ng",
  "2048": "2048",
  "adrenalinechallenge": "adrenalinechallenge",
  "among-us": "among-us",
  "awesometanks2": "awesometanks2",
  "basketball-stars": "basketball-stars",
  "cookie-clicker": "cookie-clicker",
  "crossyroad": "crossyroad",
  "cubefield": "cubefield",
  "death-run-3d": "death-run-3d",
  "DogeMiner": "DogeMiner",
  "geodash": "geodash",
  "minecraft-classic": "minecraft-classic",
  "paperio2": "paperio2",
  "plants-vs-zombies-1": "plants-vs-zombies-1",
  "precision-client": "precision-client",
  "retro-bowl": "retro-bowl",
  "rooftop-snipers": "rooftop-snipers",
  "run-3": "run-3",
  "runner": "runner",
  "sandboxels": "sandboxels",
  "slitherio": "slitherio",
  "slope": "slope",
  "snowbattle": "snowbattle",
  "soccer-skills": "soccer-skills",
  "stickwar": "stickwar",
  "subway-surfers-ny": "subway-surfers-ny",
  "thebattle": "thebattle"
};

const oldTitles = {
  "1v1space": "1v1 Space",
  "100ng": "100ng",
  "2048": "2048",
  "adrenalinechallenge": "Adrenaline Challenge",
  "among-us": "Among Us",
  "awesometanks2": "Awesome Tanks 2",
  "basketball-stars": "Basketball Stars",
  "cookie-clicker": "Cookie Clicker",
  "crossyroad": "Crossy Road",
  "cubefield": "Cubefield",
  "death-run-3d": "Death Run 3D",
  "DogeMiner": "Doge Miner",
  "geodash": "GeoDash",
  "minecraft-classic": "Minecraft Classic",
  "paperio2": "Paper.io 2",
  "plants-vs-zombies-1": "Plants vs Zombies 1",
  "precision-client": "Precision Client",
  "retro-bowl": "Retro Bowl",
  "rooftop-snipers": "Rooftop Snipers",
  "run-3": "Run 3",
  "runner": "Runner",
  "sandboxels": "Sandboxels",
  "slitherio": "Slither.io",
  "slope": "Slope",
  "snowbattle": "Snow Battle",
  "soccer-skills": "Soccer Skills",
  "stickwar": "Stick War",
  "subway-surfers-ny": "Subway Surfers NY",
  "thebattle": "The Battle"
};

/* --- NEW SIDEBAR + ICON SYSTEM --- */

const newGames = [
    { name: "GunSpin", folder: "gunspin", icon: "gunspin.png" },
    { name: "Sushi Party", folder: "sushi-party", icon: "sushi-party.png" },
    { name: "Stickman Battle", folder: "stickman-battle", icon: "stickman-battle.png" },
    { name: "Draw Climber", folder: "draw-climber", icon: "draw-climber.png" },
    { name: "Spiral Roll", folder: "spiral-roll", icon: "spiral-roll.png" },
    { name: "Blumgi Merge", folder: "blumgi-merge", icon: "blumgi-merge.png" },
    { name: "Blocky Blast Puzzle", folder: "blocky-blast", icon: "blocky-blast.png" },
    { name: "Fruits of Fury", folder: "fruits-of-fury", icon: "fruits-of-fury.png" },
    { name: "Brain Test", folder: "brain-test", icon: "brain-test.png" },
    { name: "CombiMon", folder: "combimon", icon: "combimon.png" },
    { name: "Escape Road 3", folder: "escape-road", icon: "escape-road.png" },
    { name: "Ragdoll Drop", folder: "ragdoll-drop", icon: "ragdoll-drop.png" }
];

/* --- SIDEBAR GENERATION --- */

const sideMenu = document.querySelector(".side-menu ul");

newGames.forEach(game => {
    const li = document.createElement("li");

    li.innerHTML = `
        <img src="icons/${game.icon}" class="sidebar-icon">
        <span>${game.name}</span>
    `;

    li.onclick = () => {
        window.location.href = `play.html?game=${game.folder}`;
    };

    sideMenu.appendChild(li);
});

/* --- GAME GRID GENERATION --- */

const grid = document.getElementById("game-grid");

if (grid) {
    newGames.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="icons/${game.icon}" class="sidebar-icon">
            <div>${game.name}</div>
        `;

        card.onclick = () => {
            window.location.href = `play.html?game=${game.folder}`;
        };

        grid.appendChild(card);
    });
}

/* --- SEARCH SYSTEM --- */

const search = document.getElementById("search");

if (search) {
    search.addEventListener("input", () => {
        const term = search.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            const name = card.innerText.toLowerCase();
            card.style.display = name.includes(term) ? "block" : "none";
        });
    });
}
