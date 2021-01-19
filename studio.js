export class Studio {
    constructor (ime, sediste, brojIgara, godinaOsnivanja) {
        this.ime = ime;
        this.sediste = sediste;
        this.brojIgara = brojIgara;
        this.godinaOsnivanja = godinaOsnivanja; 
        this.brojIgaraUKatalogu = 0;
    }

    updateStudio(plusminus)
    {
        if(plusminus == 1)
            this.brojIgaraUKatalogu++;
        else
            this.brojIgaraUKatalogu--;
    }
}