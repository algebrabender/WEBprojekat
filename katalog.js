
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
    
        const naslov = document.createElement("h2");
        naslov.innerHTML = this.nazivProd + " katalog";
        host.appendChild(naslov);

        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);      

        this.crtajFormu(this.kontejner);
    }

    crtajFormu(host) {
        const forma = document.createElement("div");
        forma.className = "forma";
        host.appendChild(forma);

        var labela = document.createElement("h4");
        labela.innerHTML = "Unos video igre u katalog"; 
        forma.appendChild(labela);

        labela = document.createElement("label");
        labela.innerHTML = "Naziv video igre: ";
        forma.appendChild(labela);

        let element = document.createElement("input");
        element.className = "naziv";
        forma.appendChild(element);

        labela = document.createElement("label");
        labela.innerHTML = "Kolicina: ";
        forma.appendChild(labela);

        element = document.createElement("input");
        element.className = "kolicina";
        element.type = "number";
        forma.appendChild(element);
    }
}