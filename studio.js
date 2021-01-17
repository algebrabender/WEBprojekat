export class Studio {
    constructor (ime, sediste, brojIgara, godinaOsnivanja) {
        this.ime = ime;
        this.sediste = sediste;
        this.brojIgara = brojIgara;
        this.godinaOsnivanja = godinaOsnivanja; 
        this.brojIgaraUKatalogu = 0;
    }

    updateStudio()
    {
        this.brojIgaraUKatalogu++;
    }
}