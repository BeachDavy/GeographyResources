// =========================
// GAME LIST (g1 → g100)
// =========================

const games = [
    { id: "g1",  name: "Space Dodge",          cat: "Arcade",    thumb: "g1/splash.png" },
    { id: "g2",  name: "100ng",                 cat: "Puzzle",    thumb: "g2/100ng.jpg" },
    { id: "g3",  name: "adrenalinechallenge",   cat: "Action",    thumb: "g3/adrenalinechallenge.jpg" },
    { id: "g4",  name: "among-us",              cat: "Strategy" },
    { id: "g5",  name: "awesometanks2",          cat: "Action",    thumb: "g5/awesometanks2.jpg" },
    { id: "g6",  name: "cookie-clicker",         cat: "Clicker",   thumb: "g6/img/icon.png" },
    { id: "g7",  name: "crossyroad",            cat: "Arcade",    thumb: "g7/crossyroad.png" },
    { id: "g8",  name: "cubefield",             cat: "Arcade",    thumb: "g8/assets/splash.png" },
    { id: "g9",  name: "Dash Run 3D",           cat: "Racing",    thumb: "g9/img/death.png" },
    { id: "g10", name: "DogeMiner",            cat: "Clicker",   thumb: "g10/img/dogeminer_300x300.png" },
    { id: "g11", name: "geodash",              cat: "Action",    thumb: "g11/geoscratchicon.png" },
    { id: "g12", name: "minecraft-classic",     cat: "Strategy",  thumb: "g12/pack.png" },
    { id: "g13", name: "paperio2",             cat: ".io Games", thumb: "g13/images/icon192.png" },
    { id: "g14", name: "Garden Defense",        cat: "Strategy",  thumb: "g14/image_proxy.png" },
    { id: "g15", name: "precision-client",      cat: "Action",    thumb: "g15/logo.png" },
    { id: "g16", name: "retro-bowl",           cat: "Sports",    thumb: "g16/img/icon.jpg" },
    { id: "g17", name: "run-3",                cat: "Racing",    thumb: "g17/image_proxy.jpg" },
    { id: "g18", name: "runner",               cat: "Racing" },
    { id: "g19", name: "sandboxels",           cat: "Strategy",  thumb: "g19/sandboxels.jpg" },
    { id: "g20", name: "slitherio",             cat: ".io Games", thumb: "g20/7EDEF379-07A2-4604-B552-C0A3DB2D70BE.jpeg" },
    { id: "g21", name: "slope",                cat: "Racing",    thumb: "g21/slope4.jpeg" },
    { id: "g22", name: "Snowball Arena",       cat: "Action",    thumb: "g22/img/logo.png" },
    { id: "g23", name: "soccer-skills",        cat: "Sports",    thumb: "g23/splash.png" },
    { id: "g24", name: "Stick Tactics",        cat: "Strategy",  thumb: "g24/stickwar.jpg" },
    { id: "g25", name: "subway-surfers-ny",    cat: "Racing",    thumb: "g25/NewYorkIcon.png" },
    { id: "g26", name: "The Clash",            cat: "Action",    thumb: "g26/thebattle.png" },
    { id: "g27", name: "2048",                 cat: "Puzzle",    thumb: "g27/meta/apple-touch-icon.png" },
    { id: "g28", name: "Ascii Space",          cat: "Arcade" },
    { id: "g29", name: "Asteroids",            cat: "Arcade" },
    { id: "g30", name: "Backcountry",          cat: "Action" },
    { id: "g31", name: "Black Hole Square",    cat: "Puzzle" },
    { id: "g32", name: "Bounce Back",           cat: "Arcade" },
    { id: "g33", name: "Breaklock",            cat: "Puzzle",    thumb: "g33/assets/icons/ios-180x180.png" },
    { id: "g34", name: "Breakout",             cat: "Arcade" },
    { id: "g35", name: "Captain Callisto",     cat: "Action" },
    { id: "g36", name: "Chess",                cat: "Strategy" },
    { id: "g37", name: "Chrome Incident",      cat: "Racing" },
    { id: "g38", name: "Chrome Dino",           cat: "Arcade" },
    { id: "g39", name: "Connect 3",            cat: "Puzzle" },
    { id: "g40", name: "Counter Clicker",      cat: "Clicker" },
    { id: "g41", name: "Doodle Jump",          cat: "Arcade" },
    { id: "g42", name: "Drift",                cat: "Racing" },
    { id: "g43", name: "Drift Hunters",         cat: "Racing",    thumb: "g43/logo.png" },
    { id: "g44", name: "Drive Mad",            cat: "Racing",    thumb: "g44/webapp/cover.jpg" },
    { id: "g45", name: "Edge Not Found",       cat: "Action" },
    { id: "g46", name: "Rogue Glitch",         cat: "Action" },
    { id: "g47", name: "Flappy 2048",          cat: "Arcade" },
    { id: "g48", name: "Flappy Bird",          cat: "Arcade",    thumb: "g48/logo.png" },
    { id: "g49", name: "Flappy Plane",         cat: "Arcade",    thumb: "g49/assets/splash.png" },
    { id: "g50", name: "Flight Simulator",     cat: "Strategy",  thumb: "g50/images/title.png" },
    { id: "g51", name: "Google Snake",         cat: "Arcade" },
    { id: "g52", name: "Hextris",              cat: "Puzzle",    thumb: "g52/images/android.png" },
    { id: "g53", name: "Konnekt",             cat: "Puzzle" },
    { id: "g54", name: "Lets Surf",            cat: "Arcade" },
    { id: "g55", name: "Little Alchemy",       cat: "Puzzle",    thumb: "g55/images/loading-screen-logo.png" },
    { id: "g56", name: "Ninja vs Shadow Corp", cat: "Action" },
    { id: "g57", name: "OVO 2",               cat: "Action",    thumb: "g57/icons/icon-512.png" },
    { id: "g58", name: "Pack a Bunchas",       cat: "Puzzle" },
    { id: "g59", name: "Pac-Man",              cat: "Arcade" },
    { id: "g60", name: "Particle Clicker",     cat: "Clicker" },
    { id: "g61", name: "Push Back",            cat: "Puzzle" },
    { id: "g62", name: "Q1K3",                 cat: "Action" },
    { id: "g63", name: "Radius Rush",          cat: "Racing" },
    { id: "g64", name: "Retro Haunt",          cat: "Action" },
    { id: "g65", name: "Roadblocks",           cat: "Racing" },
    { id: "g66", name: "Shuttle Deck",         cat: "Action" },
    { id: "g67", name: "Sleeping Beauty",      cat: "Puzzle",    thumb: "g67/sleeping-beauty.png" },
    { id: "g68", name: "Snake",                cat: "Arcade" },
    { id: "g69", name: "Soccer Random",        cat: "Sports" },
    { id: "g70", name: "Solitaire",            cat: "Puzzle",    thumb: "g70/screen-shot.png" },
    { id: "g71", name: "Space Garden",         cat: "Strategy" },
    { id: "g72", name: "Space Huggers",        cat: "Action" },
    { id: "g73", name: "Space Defenders",      cat: "Action" },
    { id: "g74", name: "Stack",                cat: "Puzzle",    thumb: "g74/stack.png" },
    { id: "g75", name: "Stickman Hook",        cat: "Action",    thumb: "g75/unnamed.jpg" },
    { id: "g76", name: "Stickman Boost",       cat: "Action",    thumb: "g76/icon-256.png" },
    { id: "g77", name: "Stickman Climb",       cat: "Action" },
    { id: "g78", name: "Stickman Golf",        cat: "Sports",    thumb: "g78/branding/splash1.png" },
    { id: "g79", name: "Stickman Hook 2",      cat: "Action",    thumb: "g79/unnamed.jpg" },
    { id: "g80", name: "Subway Surfers",       cat: "Racing" },
    { id: "g81", name: "Tetris",               cat: "Puzzle" },
    { id: "g82", name: "Maze of Space Goblins", cat: "Puzzle" },
    { id: "g83", name: "Tiny Fishing",         cat: "Arcade",    thumb: "g83/thumb.png" },
    { id: "g84", name: "Tower Master",         cat: "Puzzle" },
    { id: "g85", name: "Trimps",               cat: "Clicker" },
    { id: "g86", name: "Time Blaster 2",       cat: "Action",    thumb: "g86/ts2.jpg" },
    { id: "g87", name: "Time Blaster 3",       cat: "Action",    thumb: "g87/logo.png" },
    { id: "g88", name: "We Become What We Behold", cat: "Puzzle" },
    { id: "g89", name: "World's Hardest Game 2", cat: "Puzzle",  thumb: "g89/the-worlds-hardest-game-2.jpg" },
    { id: "g90", name: "XX142B2EXE",           cat: "Action" },
    { id: "g91", name: "Survival Royale",      cat: "Action",    thumb: "g91/zomb.png" },
    { id: "g92", name: "Basket Random",        cat: "Sports" },
    { id: "g93", name: "Basketbros.io",        cat: "Sports" },
    { id: "g94", name: "Boxing Random",        cat: "Sports",    thumb: "g94/512x384.jpg" },
    { id: "g95", name: "Merge Round Racers",   cat: "Racing",    thumb: "g95/splash.png" },
    { id: "g96", name: "Eggy Car",             cat: "Racing",    thumb: "g96/logo.png" },
    { id: "g97", name: "Grindcraft",           cat: "Clicker" },
    { id: "g98", name: "Space Company",        cat: "Strategy" },
    { id: "g99", name: "Basketball Stars",     cat: "Sports" },
    { id: "g100", name: "Moto X3M",            cat: "Racing",    thumb: "g100/splash.jpg" }
];

// Category display order
const categoryOrder = ["Action", "Arcade", "Puzzle", "Racing", "Sports", "Strategy", ".io Games", "Clicker"];

// Category icons (emoji)
const categoryIcons = {
    "Action": "⚔️",
    "Arcade": "🕹️",
    "Puzzle": "🧩",
    "Racing": "🏎️",
    "Sports": "⚽",
    "Strategy": "♟️",
    ".io Games": "🌐",
    "Clicker": "👆"
};

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
// CATEGORIZED GAME GRID
// =========================

const grid = document.getElementById("game-grid");

function buildCard(game) {
    const div = document.createElement("div");
    div.className = "game-card";
    div.dataset.name = game.name.toLowerCase();

    const thumbHtml = game.thumb
        ? `<img src="${game.thumb}" alt="${game.name}" class="game-thumb" loading="lazy">`
        : `<div class="game-thumb-placeholder">${game.name.charAt(0).toUpperCase()}</div>`;

    div.innerHTML = `
        <a href="play.html?game=${game.id}">
            ${thumbHtml}
            <p>${game.name}</p>
        </a>
    `;
    return div;
}

function renderGrid(filter) {
    grid.innerHTML = "";

    categoryOrder.forEach(cat => {
        const catGames = games.filter(g => g.cat === cat && g.name.toLowerCase().includes(filter));
        if (catGames.length === 0) return;

        const section = document.createElement("div");
        section.className = "category-section";

        const heading = document.createElement("h3");
        heading.className = "category-heading";
        heading.innerHTML = `<span class="cat-icon">${categoryIcons[cat]}</span> ${cat}`;
        section.appendChild(heading);

        const catGrid = document.createElement("div");
        catGrid.className = "category-grid";
        catGames.forEach(game => catGrid.appendChild(buildCard(game)));
        section.appendChild(catGrid);

        grid.appendChild(section);
    });
}

renderGrid("");

// =========================
// SEARCH BAR
// =========================

document.getElementById("search").addEventListener("input", function () {
    const term = this.value.toLowerCase().trim();
    renderGrid(term);
});
