/* --- GAME LIST --- */

const games = [
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

/* --- GAME GRID GENERATION --- */

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
