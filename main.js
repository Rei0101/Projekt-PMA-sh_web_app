const params = new URLSearchParams(window.location.search);
const korisnik = params.get('korisnik');

document.getElementById("profil").innerHTML = "Pozdrav,<br>" + korisnik;

document.querySelector("button").addEventListener("click", () => {window.location.href = "index.html"});