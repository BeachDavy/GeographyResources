// Games that match your real folders
const games = [
  { name: "1v1 Space", folder: "1v1space" },
  { name: "100ng", folder: "100ng" },
  { name: "Doge Miner", folder: "DogeMiner" },
  { name: "Adrenaline Challenge", folder: "adrenalinechallenge" },
  { name: "Among Us", folder: "among-us" },
  { name: "Awesome Tanks 2", folder: "awesometanks2" },
  { name: "Cookie Clicker", folder: "cookie-clicker" },
  { name: "Crossy Road", folder: "crossyroad" },
  { name: "Cubefield", folder: "cubefield" },
  { name: "Death Run 3D", folder: "death-run-3d" },
  { name: "GeoDash", folder: "geodash" },
  { name: "Minecraft Classic", folder: "minecraft-classic" },
  { name: "Paper.io 2", folder: "paperio2" },
  { name: "Plants vs Zombies 1", folder: "plants-vs-zombies-1" },
  { name: "Precision Client", folder: "precision-client" },
  { name: "Retro Bowl", folder: "retro-bowl" },
  { name: "Run 3", folder: "run-3" },
  { name: "Runner", folder: "runner" },
  { name: "Sandboxels", folder: "sandboxels" },
  { name: "Slither.io", folder: "slitherio" },
  { name: "Slope", folder: "slope" },
  { name: "Snow Battle", folder: "snowbattle" },
  { name: "Soccer Skills", folder: "soccer-skills" },
  { name: "Stick War", folder: "stickwar" },
  { name: "Subway Surfers NY", folder: "subway-surfers-ny" },
  { name: "The Battle", folder: "thebattle" }
];

// SIDEBAR
const sideMenu = document.querySelector(".side-menu ul");
if (sideMenu) {
  games.forEach(game => {
    const li = document.createElement("li");
    li.textContent = game.name;
    li.onclick = () => {
      window.location.href = `play.html?game=${game.folder}`;
    };
    sideMenu.appendChild(li);
  });
}

// GAME GRID
const grid = document.getElementById("game-grid");
if (grid) {
  games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = game.name;
    card.onclick = () => {
      window.location.href = `play.html?game=${game.folder}`;
    };
    grid.appendChild(card);
  });
}

// SEARCH
const search = document.getElementById("search");
if (search) {
  search.addEventListener("input", () => {
    const term = search.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
      const name = card.textContent.toLowerCase();
      card.style.display = name.includes(term) ? "block" : "none";
    });
  });
}
