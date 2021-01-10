
import { Studio } from "./studio.js"

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

    updateVideoIgre(naziv, kolicina, tip, x, y, datum, brojDiskova) {
        this.naziv = naziv;
        this.tip = tip;
        this.kolicinaNaStanju = kolicina;
        this.x = x;
        this.y = y;
        this.datumIzdavanja = datum;
        this.brojDiskova = brojDiskova;

        this.miniKontejner.innerHTML = this.naziv + ", " + this.brojDiskova + "CD(s), Na stanju: " + this.kolicinaNaStanju + "\nDatum izadavanja: " + this.datumIzdavanja;
        this.miniKontejner.style.backgroundColor = this.bojaPolja();
    }
}