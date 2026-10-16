// =========================
// SEARCH BAR (progressive enhancement)
// Game cards and sidebar are now pre-rendered in index.html so they appear
// even when JavaScript is blocked or unavailable. This script only adds the
// live search filter on top of the static cards.
// =========================

document.getElementById("search").addEventListener("input", function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll(".game-card").forEach(card => {
        const name = card.querySelector("p").innerText.toLowerCase();
        card.style.display = name.includes(term) ? "" : "none";
    });
});
