// Lav en vaiabel, der refererer til body
const body = document.querySelector("body");

// Lav en vaiabel, der refererer til ".mode"
const mode = document.querySelector(".mode");

// 1. Lav en funktion, der hedder darkMode
function darkMode() {
  body.classList.toggle("dark");
}

// 2. Toggle en klasse, der hedder "dark" vha. classList
// eller
// 1. Lav en funktion, der hedder darkMode
// 2. Ændr teksten på toggle-knappen og tilføj eller fjern klassen "dark" vha. en if/else sætning

// Lav et klik-event på toggle, der sætter funktionen darkMode i gang
mode.addEventListener("click", darkMode);
