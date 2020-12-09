
export class VideoIgra {
    constructor(naziv, datumIzdavanja, brojDiskova, tip) {
        this.naziv = naziv;
        this.datumIzdavanja = datumIzdavanja;
        this.brojDiskova = brojDiskova;
        this.tip = tip;
        this.miniKontejner = null;
    }

    bojaPolja() {
        if (!this.tip)
            return "coral";
        else
            return this.tip;
    }
}