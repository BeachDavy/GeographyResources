// =========================
// GAME LIST (g1 → g102)
// Each game may have a `logo` pointing to a bundled image (splash / icon /
// title screen) inside its own folder. Games with a logo are sorted to the
// top of the grid; games without one keep their text-only card below.
// =========================

const games = [
    { id: "g1",  name: "Space Dodge",   logo: "g1/splash.png" },
    { id: "g2",  name: "100ng",          logo: "g2/100ng-logo.png" },
    { id: "g3",  name: "adrenalinechallenge", logo: "g3/adrenalinechallenge.jpg" },
    { id: "g4",  name: "among-us" },
    { id: "g5",  name: "awesometanks2",  logo: "g5/awesometanks2.jpg" },
    { id: "g6",  name: "cookie-clicker", logo: "g6/img/icon.png" },
    { id: "g7",  name: "crossyroad",    logo: "g7/crossyroad.png" },
    { id: "g8",  name: "cubefield",      logo: "g8/assets/splash.png" },
    { id: "g9",  name: "Dash Run 3D" },
    { id: "g10", name: "DogeMiner",      logo: "g10/img/dogeminer_300x300.png" },
    { id: "g11", name: "geodash",        logo: "g11/geoscratchicon.png" },
    { id: "g12", name: "minecraft-classic", logo: "g12/pack.png" },
    { id: "g13", name: "paperio2",       logo: "g13/images/logo.png" },
    { id: "g14", name: "Garden Defense", logo: "g14/image_proxy.png" },
    { id: "g15", name: "precision-client", logo: "g15/logo.png" },
    { id: "g16", name: "retro-bowl",     logo: "g16/img/splash.png" },
    { id: "g17", name: "run-3",          logo: "g17/image_proxy.jpg" },
    { id: "g18", name: "runner",         logo: "g18/loading3860.png" },
    { id: "g19", name: "sandboxels",     logo: "g19/icons/apple-touch-icon.png" },
    { id: "g20", name: "slitherio" },
    { id: "g21", name: "slope",          logo: "g21/slope4.jpeg" },
    { id: "g22", name: "Snowball Arena", logo: "g22/img/logo.png" },
    { id: "g23", name: "soccer-skills",  logo: "g23/splash.png" },
    { id: "g24", name: "Stick Tactics",  logo: "g24/stickwar.jpg" },
    { id: "g25", name: "subway-surfers-ny", logo: "g25/NewYorkIcon.png" },
    { id: "g26", name: "The Clash",      logo: "g26/thebattle.png" },
    { id: "g27", name: "2048",           logo: "g27/meta/apple-touch-icon.png" },
    { id: "g28", name: "Ascii Space" },
    { id: "g29", name: "Asteroids" },
    { id: "g30", name: "Backcountry" },
    { id: "g31", name: "Black Hole Square", logo: "g31/icon.png" },
    { id: "g32", name: "Bounce Back",    logo: "g32/screenshot.png" },
    { id: "g33", name: "Breaklock",      logo: "g33/assets/intro.svg" },
    { id: "g34", name: "Breakout" },
    { id: "g35", name: "Captain Callisto" },
    { id: "g36", name: "Chess" },
    { id: "g37", name: "Chrome Incident" },
    { id: "g38", name: "Chrome Dino" },
    { id: "g39", name: "Connect 3" },
    { id: "g40", name: "Counter Clicker" },
    { id: "g41", name: "Doodle Jump" },
    { id: "g42", name: "Drift" },
    { id: "g43", name: "Drift Hunters",  logo: "g43/logo.png" },
    { id: "g44", name: "Drive Mad",       logo: "g44/logo.jpg" },
    { id: "g45", name: "Edge Not Found" },
    { id: "g46", name: "Rogue Glitch" },
    { id: "g47", name: "Flappy 2048",    logo: "g47/meta/apple-touch-icon.png" },
    { id: "g48", name: "Flappy Bird",     logo: "g48/logo.png" },
    { id: "g49", name: "Flappy Plane",   logo: "g49/assets/splash.png" },
    { id: "g50", name: "Flight Simulator", logo: "g50/images/title.png" },
    { id: "g51", name: "Google Snake" },
    { id: "g52", name: "Hextris" },
    { id: "g53", name: "Konnekt" },
    { id: "g54", name: "Lets Surf" },
    { id: "g55", name: "Little Alchemy", logo: "g55/favicons/9051-img-192-alpha.png" },
    { id: "g56", name: "Ninja vs Shadow Corp" },
    { id: "g57", name: "OVO 2",          logo: "g57/icons/icon-512.png" },
    { id: "g58", name: "Pack a Bunchas" },
    { id: "g59", name: "Pac-Man",        logo: "g59/favicon.png" },
    { id: "g60", name: "Particle Clicker", logo: "g60/assets/favicon.png" },
    { id: "g61", name: "Push Back" },
    { id: "g62", name: "Q1K3" },
    { id: "g63", name: "Radius Rush" },
    { id: "g64", name: "Retro Haunt" },
    { id: "g65", name: "Roadblocks" },
    { id: "g66", name: "Shuttle Deck" },
    { id: "g67", name: "Sleeping Beauty", logo: "g67/sleeping-beauty.png" },
    { id: "g68", name: "Snake" },
    { id: "g69", name: "Soccer Random" },
    { id: "g70", name: "Solitaire",      logo: "g70/screen-shot.png" },
    { id: "g71", name: "Space Garden" },
    { id: "g72", name: "Space Huggers" },
    { id: "g73", name: "Space Defenders" },
    { id: "g74", name: "Stack",          logo: "g74/stack.png" },
    { id: "g75", name: "Stickman Hook",  logo: "g75/unnamed.jpg" },
    { id: "g76", name: "Stickman Boost", logo: "g76/icon-256.png" },
    { id: "g77", name: "Stickman Climb" },
    { id: "g78", name: "Stickman Golf",  logo: "g78/branding/logo.png" },
    { id: "g79", name: "Stickman Hook 2", logo: "g79/unnamed.jpg" },
    { id: "g80", name: "Subway Surfers" },
    { id: "g81", name: "Tetris",         logo: "g81/media/background/logo.png" },
    { id: "g82", name: "Maze of Space Goblins" },
    { id: "g83", name: "Tiny Fishing",   logo: "g83/tiny-fishing.png" },
    { id: "g84", name: "Tower Master",   logo: "g84/assets/main-index-title.png" },
    { id: "g85", name: "Trimps" },
    { id: "g86", name: "Time Blaster 2", logo: "g86/ts2.jpg" },
    { id: "g87", name: "Time Blaster 3", logo: "g87/logo.png" },
    { id: "g88", name: "We Become What We Behold" },
    { id: "g89", name: "World's Hardest Game 2", logo: "g89/the-worlds-hardest-game-2.jpg" },
    { id: "g90", name: "XX142B2EXE" },
    { id: "g91", name: "Survival Royale", logo: "g91/zomb.png" },
    { id: "g92", name: "Basket Random" },
    { id: "g93", name: "Basketbros.io",  logo: "g93/assets/favicon.png" },
    { id: "g94", name: "Boxing Random",  logo: "g94/512x384.jpg" },
    { id: "g95", name: "Merge Round Racers", logo: "g95/splash.png" },
    { id: "g96", name: "Eggy Car",       logo: "g96/logo.png" },
    { id: "g97", name: "Grindcraft",     logo: "g97/assets/preloader/preloaderLogo.png" },
    { id: "g98", name: "Space Company" },
    { id: "g99", name: "Basketball Stars", logo: "g99/assets/atlases/x1/preloader.png" },
    { id: "g100", name: "Moto X3M",      logo: "g100/splash.jpg" },
    { id: "g101", name: "Bad Time Simulator (Undertale)", logo: "g101/icon-256.png" },
    { id: "g102", name: "Fun Time Simulator (Deltarune)" },
    { id: "g103", name: "1v1.lol" },
    { id: "g104", name: "Friday Night Funkin" },
    { id: "g105", name: "Five Nights at Freddy's" },
    { id: "g106", name: "Tunnel Rush" },
    { id: "g107", name: "Fireboy & Watergirl" },
    { id: "g108", name: "Rooftop Snipers 2" },
    { id: "g109", name: "Getaway Shootout" },
    { id: "g110", name: "Madalin Stunt Cars 2" },
    { id: "g111", name: "Idle Breakout" },
    { id: "g112", name: "Vex 5" },
    { id: "g113", name: "Earn to Die" },
    { id: "g114", name: "Age of War" },
    { id: "g115", name: "Cluster Rush" },
    { id: "g116", name: "Temple of Boom" },
    { id: "g117", name: "Hole.io" },
    { id: "g118", name: "Backrooms" },
    { id: "g119", name: "Red Ball 4" },
    { id: "g120", name: "Plants vs Zombies" },
    { id: "g121", name: "Bloons TD" },
    { id: "g122", name: "Bitlife" },
    { id: "g123", name: "Wordle" },
    { id: "g124", name: "Capybara Clicker" },
    { id: "g125", name: "Angry Birds" },
    { id: "g126", name: "Gunspin" },
    { id: "g127", name: "Happy Wheels" },
    { id: "g128", name: "Cut the Rope" },
    { id: "g129", name: "SuperHot" }
];

// Games that have a logo are shown first (keeping their original order),
// followed by the ones without a logo.
games.sort((a, b) => {
    const aHas = a.logo ? 0 : 1;
    const bHas = b.logo ? 0 : 1;
    return aHas - bHas;
});

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
    const logoHtml = game.logo
        ? `<img class="game-logo" src="${game.logo}" alt="${game.name}" onerror="this.style.display='none'">`
        : "";
    div.innerHTML = `
        <a href="play.html?game=${game.id}">
            ${logoHtml}
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
