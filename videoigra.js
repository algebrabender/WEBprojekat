export class VideoIgra {
    constructor(naziv, datumIzdavanja, brojDiskova, tip, studio, i, j) {
        this.naziv = naziv;
        this.datumIzdavanja = datumIzdavanja;
        this.brojDiskova = brojDiskova;
        this.tip = tip;
        this.kolicinaNaStanju = 0;
        this.studio = studio;
        this.x = i;
        this.y = j;
        this.miniKontejner = null;
    }

    bojaPolja() {
        if (!this.tip)
            return "#726a95";
        else
            return this.tip;
    }

    crtanjeVideoIgre(host) {
        this.miniKontejner = document.createElement("div");
        this.miniKontejner.className = "videoIgra";
        this.miniKontejner.innerHTML = "Slobodno mesto u katalogu";
        this.miniKontejner.style.backgroundColor = this.bojaPolja();
        host.appendChild(this.miniKontejner);
    }

    updatePolja() {
        this.miniKontejner.innerHTML = this.naziv + ", by " + this.studio.ime
        + "<br />"  + this.brojDiskova 
        + " CD(s) <br />Na stanju: " + this.kolicinaNaStanju 
        + "<br />Datum izadavanja: " + this.datumIzdavanja;
    }

    updateVideoIgre(naziv, kolicina, tip, x, y, datum, brojDiskova, stud) {
        this.naziv = naziv;
        this.tip = tip;
        this.kolicinaNaStanju = kolicina;
        this.x = x;
        this.y = y;
        this.datumIzdavanja = datum;
        this.brojDiskova = brojDiskova;
        this.studio = stud;

        if (naziv == "")
        {
            this.miniKontejner.innerHTML = "Slobodno mesto u katalogu";
        }
        else
        {
            this.updatePolja();
        }

        this.miniKontejner.style.backgroundColor = this.bojaPolja();
    }

    updateKolicine(novaKolicina) {
        this.kolicinaNaStanju = novaKolicina;

        this.updatePolja();
    }
}