
export class Katalog {
    constructor (nazivProd, n, m, kapacitetPolja) {
        this.nazivProd = nazivProd;
        this.n = n;
        this.m = m;
        this.kapacitetPolja = kapacitetPolja;
        this.kontejner = null;
    }

    crtajKatalog(host) {
        if (!host)
            throw new Error ("Ne postoji roditeljski element");
    
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);

        const naslov = document.createElement("h2");
        naslov.innerHTML = this.nazivProd + "katalog";
    }
}