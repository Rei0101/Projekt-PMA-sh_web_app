document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let korImeUnos = document.getElementById("korisnicko-ime").value;
    let lozUnos = document.getElementById("lozinka").value;

    let korisnik = {
        korisnicko_ime: korImeUnos,
        lozinka: lozUnos
    }

    let postavke = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(korisnik)
    }

    try {
        const response = await fetch("http://localhost:4000/korisnici", postavke);
        const data = await response.json();
        document.querySelector("span h2").innerHTML = data.poruka;
        if(response.ok){
            setTimeout(() => {window.location.href = "main.html?korisnik=" + encodeURIComponent(data.korisnik.korisnicko_ime);}, 2500)
        }
    } catch (err) {
        console.log(err);
    }

    
})