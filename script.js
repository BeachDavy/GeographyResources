// Games you actually have (match folder names)
const games = [
  { name: "1v1 Space", folder: "1v1space", icon: "1v1space.png" },
  { name: "100ng", folder: "100ng", icon: "100ng.png" },
  { name: "Doge Miner", folder: "DogeMiner", icon: "DogeMiner.png" },
  { name: "Adrenaline Challenge", folder: "adrenalinechallenge", icon: "adrenalinechallenge.png" },
  { name: "Among Us", folder: "among-us", icon: "among-us.png" },
  { name: "Awesome Tanks 2", folder: "awesometanks2", icon: "awesometanks2.png" },
  { name: "Cookie Clicker", folder: "cookie-clicker", icon: "cookie-clicker.png" },
  { name: "Crossy Road", folder: "crossyroad", icon: "crossyroad.png" },
  { name: "Cubefield", folder: "cubefield", icon: "cubefield.png" },
  { name: "Death Run 3D", folder: "death-run-3d", icon: "death-run-3d.png" },
  { name: "GeoDash", folder: "geodash", icon: "geodash.png" },
  { name: "Minecraft Classic", folder: "minecraft-classic", icon: "minecraft-classic.png" },
  { name: "Paper.io 2", folder: "paperio2", icon: "paperio2.png" },
  { name: "Plants vs Zombies 1", folder: "plants-vs-zombies-1", icon: "plants-vs-zombies-1.png" },
  { name: "Precision Client", folder: "precision-client", icon: "precision-client.png" },
  { name: "Retro Bowl", folder: "retro-bowl", icon: "retro-bowl.png" },
  { name: "Run 3", folder: "run-3", icon: "run-3.png" },
  { name: "Runner", folder: "runner", icon: "runner.png" },
  { name: "Sandboxels", folder: "sandboxels", icon: "sandboxels.png" },
  { name: "Slither.io", folder: "slitherio", icon: "slitherio.png" },
  { name: "Slope", folder: "slope", icon: "slope.png" },
  { name: "Snow Battle", folder: "snowbattle", icon: "snowbattle.png" },
  { name: "Soccer Skills", folder: "soccer-skills", icon: "soccer-skills.png" },
  { name: "Stick War", folder: "stickwar", icon: "stickwar.png" },
  { name: "Subway Surfers NY", folder: "subway-surfers-ny", icon: "subway-surfers-ny.png" },
  { name: "The Battle", folder: "thebattle", icon: "thebattle.png" }
];

// SIDEBAR
const sideMenu = document.querySelector(".side-menu ul");
if (sideMenu) {
  games.forEach(game => {
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
}

// GAME GRID
const grid = document.getElementById("game-grid");
if (grid) {
  games.forEach(game => {
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

// SEARCH
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

