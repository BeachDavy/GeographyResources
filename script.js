const games = [
  { id: "among-us", title: "Among Us" },
  { id: "slope", title: "Slope" },
  { id: "retro-bowl", title: "Retro Bowl" },
  { id: "rooftop-snipers", title: "Rooftop Snipers" },
  { id: "soccer-skills", title: "Soccer Skills" },
  { id: "2048", title: "2048" },
  { id: "100ng", title: "100ng" },
  { id: "1v1space", title: "1v1 Space" },
  { id: "basketball-stars", title: "Basketball Stars" },
  { id: "cookie-clicker", title: "Cookie Clicker" },
  { id: "crossyroad", title: "Crossy Road" },
  { id: "cubefield", title: "Cubefield" },
  { id: "death-run-3d", title: "Death Run 3D" },
  { id: "DogeMiner", title: "Doge Miner" },
  { id: "geodash", title: "GeoDash" },
  { id: "minecraft-classic", title: "Minecraft Classic" },
  { id: "paperio2", title: "Paper.io 2" },
  { id: "plants vs zombies 1", title: "Plants vs Zombies 1" },
  { id: "precision-client", title: "Precision Client" },
  { id: "runner", title: "Runner" },
  { id: "run 3", title: "Run 3" },
  { id: "sandboxels", title: "Sandboxels" },
  { id: "slitherio", title: "Slither.io" },
  { id: "snowbattle", title: "Snow Battle" },
  { id: "stickwar", title: "Stick War" },
  { id: "subway-surfers-ny", title: "Subway Surfers NY" },
  { id: "thebattle", title: "The Battle" },
  { id: "awesometanks2", title: "Awesome Tanks 2" }
];

const grid = document.getElementById("game-grid");
const searchInput = document.getElementById("search");

function renderGames(filter = "") {
  grid.innerHTML = "";
  const q = filter.toLowerCase();

  games
    .filter(g => g.title.toLowerCase().includes(q) || g.id.toLowerCase().includes(q))
    .forEach(g => {
      const card = document.createElement("div");
      card.className = "card";
      card.onclick = () => {
        window.location.href = `play.html?game=${encodeURIComponent(g.id)}`;
      };

      const title = document.createElement("div");
      title.className = "card-title";
      title.textContent = g.title;

      const tag = document.createElement("div");
      tag.className = "card-tag";
      tag.textContent = g.id;

      card.appendChild(title);
      card.appendChild(tag);
      grid.appendChild(card);
    });
}

if (grid) {
  renderGames();

  searchInput.addEventListener("input", () => {
    renderGames(searchInput.value);
  });
}
