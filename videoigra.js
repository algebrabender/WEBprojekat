
import { Studio } from "./studio.js"

export class VideoIgra {
    constructor(naziv, datumIzdavanja, brojDiskova, tip, studio, kapacitetMax, i, j) {
        this.naziv = naziv;
        this.datumIzdavanja = datumIzdavanja;
        this.brojDiskova = brojDiskova;
        this.tip = tip;
        this.kapacitet = 0;
        this.studio = studio;
        this.kapacitetMax = kapacitetMax;
        this.x = i;
        this.y = j;
        this.miniKontejner = null;
    }

    bojaPolja() {
        if (!this.tip)
            return "coral";
        else
            return this.tip;
    }

    crtanjeVideoIgre(host) {
        this.miniKontejner = document.createElement("div");
        this.miniKontejner.className = "videoIgra";
        this.miniKontejner.innerHTML = "Moguce dodati: " + (this.kapacitetMax - this.kapacitet) + " igara";
        this.miniKontejner.style.backgroundColor = this.bojaPolja();
        host.appendChild(this.miniKontejner);
    }
}