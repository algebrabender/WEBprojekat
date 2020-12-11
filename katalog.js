import { VideoIgra } from "./videoigra.js"
import { Studio } from "./studio.js"

export class Katalog {
    constructor (nazivProd, n, m, kapacitetPolja) {
        this.nazivProd = nazivProd;
        this.n = n;
        this.m = m;
        this.kapacitetPolja = kapacitetPolja;
        this.kontejner = null;
        this.videoIgre = [];
        this.studios = [];
    }

    dodavanjeVideoIgre(igra) {
        this.videoIgre.push(igra);
    }

    dodavanjeStudia(studio) {
        this.studios.push(studio);
    }

    crtanjeKataloga(host) {
        if (!host)
            throw new Error ("Ne postoji roditeljski element");
    
        const naslov = document.createElement("h2");
        naslov.innerHTML = this.nazivProd + " katalog";
        host.appendChild(naslov);

        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);      

        this.crtanjeForme(this.kontejner);
        this.crtanjeVideoIgre(this.kontejner);
    }

    crtanjeForme(host) {
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

        let tipoviIgre = ["akcija", "avantura", "rpg", "simulacija", "akcija-avantura"];
        let bojeTipova = ["red", "blue", "green", "orange", "purple"];

        let radioButton = null;
        let opcija = null;
        let rbDiv = null;

        tipoviIgre.forEach((tip, index) => {
            rbDiv = document.createElement("div");
            radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = this.nazivProd;
            radioButton.value = tipoviIgre[index];

            opcija = document.createElement("label");
            opcija.innerHTML = tip;

            rbDiv.appendChild(radioButton);
            rbDiv.appendChild(opcija);
            forma.appendChild(rbDiv);
        })

        labela = document.createElement("label");
        labela.innerHTML = "Izaberite poziciju video igre u katalogu";
        forma.appendChild(labela);

        let pozicijaDiv = document.createElement("div");
        let vrsta = document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML = "Vrsta(X): ";
        pozicijaDiv.appendChild(labela);
        pozicijaDiv.appendChild(vrsta);

        let x = null;

        for (let i = 0; i < this.n; i++) {
            x = document.createElement("option");
            x.innerHTML = i;
            x.value = i;
            vrsta.appendChild(x);
        }

        forma.appendChild(pozicijaDiv);

        pozicijaDiv = document.createElement("div");
        let kolona = document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML = "Kolona(Y): ";
        pozicijaDiv.appendChild(labela);
        pozicijaDiv.appendChild(kolona);

        let y = null;

        for (let i = 0; i < this.m; i++) {
            y = document.createElement("option");
            y.innerHTML = i;
            y.value = i;
            kolona.appendChild(y);
        }

        forma.appendChild(pozicijaDiv);


    }

    crtanjeVideoIgre(host) {
        const kontejnerIgre = document.createElement("div");
        kontejnerIgre.className = "kontejnerIgre";
        host.appendChild(kontejnerIgre);

        let red;
        let igra;

        for (let i = 0; i < this.n; i++) {
            red = document.createElement("div");
            red.className = "red";
            kontejnerIgre.appendChild(red);

            for (let j = 0; j< this.m; j++) {
                igra = new VideoIgra("The Last Of Us", "19.6.2020", 2, "", "", this.kapacitetPolja, i, j);
                this.dodavanjeVideoIgre(igra);
                igra.crtanjeVideoIgre(red);
            }
        }
    }
}