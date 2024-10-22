const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const body_parser = require("body-parser");
app.use(body_parser.json());

let korisnici = require('./korisnici.js')

app.get("/", (req, res) =>
  res.send("Dobrodošli na server za Shrekove korisnik!")
);

app.get("/korisnici", (req, res) => res.json(korisnici));

app.post("/korisnici", (req, res) => {
  const korisnik = req.body;
  for (let i = 0; i < korisnici.length; i++) {
    let postojeci = korisnici[i];
    if (postojeci.korisnicko_ime == korisnik.korisnicko_ime && postojeci.lozinka == korisnik.lozinka) {
      return res.status(200).json({ poruka: "Prijava je uspješna!", korisnik: korisnik });
    }
  }
  res.status(400).json({ poruka: "Ne postoji taj korisnik!" });
});

app.listen(4000, () => console.log("Server sluša port 4000!"));

