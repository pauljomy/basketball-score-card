let guestCount = 0;
let homeCount = 0;

let home = document.getElementById("home");
let guest = document.getElementById("guest");

function plusOneHome() {
  homeCount += 1;
  home.textContent = homeCount;
}

function plusTwoHome() {
  homeCount += 2;
  home.textContent = homeCount;
}

function plusThreeHome() {
  homeCount += 3;
  home.textContent = homeCount;
}

function resetHome() {
  homeCount = 0;
  home.textContent = homeCount;
}

function plusOneGuest() {
  guestCount += 1;
  guest.textContent = guestCount;
}

function plusTwoGuest() {
  guestCount += 2;
  guest.textContent = guestCount;
}

function plusThreeGuest() {
  guestCount += 3;
  guest.textContent = guestCount;
}

function resetGuest() {
  guestCount = 0;
  guest.textContent = guestCount;
}
