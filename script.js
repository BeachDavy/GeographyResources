// =========================
// RESOURCE LIST (g1 → g129)
// Each item may have a `logo` pointing to a bundled image (splash / icon /
// title screen) inside its own folder. Items with a logo are sorted to the
// top of the grid; items without one keep their text-only card below.
// =========================

const items = [
    { id: "h1",  name: "Space Dodge",   logo: "h1/splash.png" },
    { id: "h2",  name: "100ng",          logo: "h2/100ng-logo.png" },
    { id: "h3",  name: "adrenalinechallenge", logo: "h3/adrenalinechallenge.jpg" },
    { id: "h4",  name: "among-us" },
    { id: "h5",  name: "awesometanks2",  logo: "h5/awesometanks2.jpg" },
    { id: "h6",  name: "cookie-clicker", logo: "h6/img/icon.png" },
    { id: "h7",  name: "crossyroad",    logo: "h7/crossyroad.png" },
    { id: "h8",  name: "cubefield",      logo: "h8/assets/splash.png" },
    { id: "h9",  name: "Dash Run 3D" },
    { id: "h10", name: "DogeMiner",      logo: "h10/img/dogeminer_300x300.png" },
    { id: "h11", name: "geodash",        logo: "h11/geoscratchicon.png" },
    { id: "h12", name: "minecraft-classic", logo: "h12/pack.png" },
    { id: "h13", name: "paperio2",       logo: "h13/images/logo.png" },
    { id: "h14", name: "Garden Defense", logo: "h14/image_proxy.png" },
    { id: "h15", name: "precision-client", logo: "h15/logo.png" },
    { id: "h16", name: "retro-bowl",     logo: "h16/img/splash.png" },
    { id: "h17", name: "run-3",          logo: "h17/image_proxy.jpg" },
    { id: "h18", name: "runner",         logo: "h18/loading3860.png" },
    { id: "h19", name: "sandboxels",     logo: "h19/icons/apple-touch-icon.png" },
    { id: "h20", name: "slitherio" },
    { id: "h21", name: "slope",          logo: "h21/slope4.jpeg" },
    { id: "h22", name: "Snowball Arena", logo: "h22/img/logo.png" },
    { id: "h23", name: "soccer-skills",  logo: "h23/splash.png" },
    { id: "h24", name: "Stick Tactics",  logo: "h24/stickwar.jpg" },
    { id: "h25", name: "subway-surfers-ny", logo: "h25/NewYorkIcon.png" },
    { id: "h26", name: "The Clash",      logo: "h26/thebattle.png" },
    { id: "h27", name: "2048",           logo: "h27/meta/apple-touch-icon.png" },
    { id: "h28", name: "Ascii Space" },
    { id: "h29", name: "Asteroids" },
    { id: "h30", name: "Backcountry" },
    { id: "h31", name: "Black Hole Square", logo: "h31/icon.png" },
    { id: "h32", name: "Bounce Back",    logo: "h32/screenshot.png" },
    { id: "h33", name: "Breaklock",      logo: "h33/assets/intro.svg" },
    { id: "h34", name: "Breakout" },
    { id: "h35", name: "Captain Callisto" },
    { id: "h36", name: "Chess" },
    { id: "h37", name: "Chrome Incident" },
    { id: "h38", name: "Chrome Dino" },
    { id: "h39", name: "Connect 3" },
    { id: "h40", name: "Counter Clicker" },
    { id: "h41", name: "Doodle Jump" },
    { id: "h42", name: "Drift" },
    { id: "h43", name: "Drift Hunters",  logo: "h43/logo.png" },
    { id: "h44", name: "Drive Mad",       logo: "h44/logo.jpg" },
    { id: "h45", name: "Edge Not Found" },
    { id: "h46", name: "Rogue Glitch" },
    { id: "h47", name: "Flappy 2048",    logo: "h47/meta/apple-touch-icon.png" },
    { id: "h48", name: "Flappy Bird",     logo: "h48/logo.png" },
    { id: "h49", name: "Flappy Plane",   logo: "h49/assets/splash.png" },
    { id: "h50", name: "Flight Simulator", logo: "h50/images/title.png" },
    { id: "h51", name: "Google Snake" },
    { id: "h52", name: "Hextris" },
    { id: "h53", name: "Konnekt" },
    { id: "h54", name: "Lets Surf" },
    { id: "h55", name: "Little Alchemy", logo: "h55/favicons/9051-img-192-alpha.png" },
    { id: "h56", name: "Ninja vs Shadow Corp" },
    { id: "h57", name: "OVO 2",          logo: "h57/icons/icon-512.png" },
    { id: "h58", name: "Pack a Bunchas" },
    { id: "h59", name: "Pac-Man",        logo: "h59/favicon.png" },
    { id: "h60", name: "Particle Clicker", logo: "h60/assets/favicon.png" },
    { id: "h61", name: "Push Back" },
    { id: "h62", name: "Q1K3" },
    { id: "h63", name: "Radius Rush" },
    { id: "h64", name: "Retro Haunt" },
    { id: "h65", name: "Roadblocks" },
    { id: "h66", name: "Shuttle Deck" },
    { id: "h67", name: "Sleeping Beauty", logo: "h67/sleeping-beauty.png" },
    { id: "h68", name: "Snake" },
    { id: "h69", name: "Soccer Random" },
    { id: "h70", name: "Solitaire",      logo: "h70/screen-shot.png" },
    { id: "h71", name: "Space Garden" },
    { id: "h72", name: "Space Huggers" },
    { id: "h73", name: "Space Defenders" },
    { id: "h74", name: "Stack",          logo: "h74/stack.png" },
    { id: "h75", name: "Stickman Hook",  logo: "h75/unnamed.jpg" },
    { id: "h76", name: "Stickman Boost", logo: "h76/icon-256.png" },
    { id: "h77", name: "Stickman Climb" },
    { id: "h78", name: "Stickman Golf",  logo: "h78/branding/logo.png" },
    { id: "h79", name: "Stickman Hook 2", logo: "h79/unnamed.jpg" },
    { id: "h80", name: "Subway Surfers" },
    { id: "h81", name: "Tetris",         logo: "h81/media/background/logo.png" },
    { id: "h82", name: "Maze of Space Goblins" },
    { id: "h83", name: "Tiny Fishing",   logo: "h83/tiny-fishing.png" },
    { id: "h84", name: "Tower Master",   logo: "h84/assets/main-index-title.png" },
    { id: "h85", name: "Trimps" },
    { id: "h86", name: "Time Blaster 2", logo: "h86/ts2.jpg" },
    { id: "h87", name: "Time Blaster 3", logo: "h87/logo.png" },
    { id: "h88", name: "We Become What We Behold" },
    { id: "h89", name: "World's Hardest 2", logo: "h89/the-worlds-hardest-2.jpg" },
    { id: "h90", name: "XX142B2EXE" },
    { id: "h91", name: "Survival Royale", logo: "h91/zomb.png" },
    { id: "h92", name: "Basket Random" },
    { id: "h93", name: "Basketbros.io",  logo: "h93/assets/favicon.png" },
    { id: "h94", name: "Boxing Random",  logo: "h94/512x384.jpg" },
    { id: "h95", name: "Merge Round Racers", logo: "h95/splash.png" },
    { id: "h96", name: "Eggy Car",       logo: "h96/logo.png" },
    { id: "h97", name: "Grindcraft",     logo: "h97/assets/preloader/preloaderLogo.png" },
    { id: "h98", name: "Space Company" },
    { id: "h99", name: "Basketball Stars", logo: "h99/assets/atlases/x1/preloader.png" },
    { id: "h100", name: "Moto X3M",      logo: "h100/splash.jpg" },
    { id: "h101", name: "Bad Time Simulator (Undertale)", logo: "h101/icon-256.png" },
    { id: "h102", name: "Fun Time Simulator (Deltarune)" },
    { id: "h103", name: "1v1.lol" },
    { id: "h104", name: "Friday Night Funkin" },
    { id: "h105", name: "Five Nights at Freddy's" },
    { id: "h106", name: "Tunnel Rush" },
    { id: "h107", name: "Fireboy & Watergirl" },
    { id: "h108", name: "Rooftop Snipers 2" },
    { id: "h109", name: "Getaway Shootout" },
    { id: "h110", name: "Madalin Stunt Cars 2" },
    { id: "h111", name: "Idle Breakout" },
    { id: "h112", name: "Vex 5" },
    { id: "h113", name: "Earn to Die" },
    { id: "h114", name: "Age of War" },
    { id: "h115", name: "Cluster Rush" },
    { id: "h116", name: "Temple of Boom" },
    { id: "h117", name: "Hole.io" },
    { id: "h118", name: "Backrooms" },
    { id: "h119", name: "Red Ball 4" },
    { id: "h120", name: "Plants vs Zombies" },
    { id: "h121", name: "Bloons TD" },
    { id: "h122", name: "Bitlife" },
    { id: "h123", name: "Wordle" },
    { id: "h124", name: "Capybara Clicker" },
    { id: "h125", name: "Angry Birds" },
    { id: "h126", name: "Gunspin" },
    { id: "h127", name: "Happy Wheels" },
    { id: "h128", name: "Cut the Rope" },
    { id: "h129", name: "SuperHot" }
];

// Items that have a logo are shown first (keeping their original order),
// followed by the ones without a logo.
items.sort((a, b) => {
    const aHas = a.logo ? 0 : 1;
    const bHas = b.logo ? 0 : 1;
    return aHas - bHas;
});

// =========================
// SIDEBAR LIST
// =========================

const sidebar = document.querySelector(".side-menu ul");

items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="view.html?r=${item.id}">${item.name}</a>`;
    sidebar.appendChild(li);
});

// =========================
// RESOURCE GRID
// =========================

const grid = document.getElementById("res-grid");

items.forEach(item => {
    const div = document.createElement("div");
    div.className = "res-card";
    const logoHtml = item.logo
        ? `<img class="res-logo" src="${item.logo}" alt="${item.name}" onerror="this.style.display='none'">`
        : "";
    div.innerHTML = `
        <a href="view.html?r=${item.id}">
            ${logoHtml}
            <p>${item.name}</p>
        </a>
    `;
    grid.appendChild(div);
});

// =========================
// SEARCH BAR
// =========================

document.getElementById("search").addEventListener("input", function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll(".res-card").forEach(card => {
        const name = card.querySelector("p").innerText.toLowerCase();
        card.style.display = name.includes(term) ? "" : "none";
    });
});
