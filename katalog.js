import { VideoIgra } from "./videoigra.js"
import { Studio } from "./studio.js"

export class Katalog {
    constructor (nazivProd, n, m) {
        this.gameShop = nazivProd;
        this.n = n;
        this.m = m;
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
        labela.innerHTML = "Dodavanje video igre u katalog"; 
        forma.appendChild(labela);

        labela = document.createElement("label");
        labela.innerHTML = "Naziv video igre: ";
        forma.appendChild(labela);

        let element = document.createElement("input");
        element.className = "naziv";
        forma.appendChild(element);

        labela = document.createElement("label");
        labela.innerHTML = "Broj diskova: ";
        forma.appendChild(labela);

        element = document.createElement("input");
        element.className = "brojDiskova";
        element.type = "number";
        forma.appendChild(element);

        labela = document.createElement("label");
        labela.innerHTML = "Kolicina na stanju: ";
        forma.appendChild(labela);

        element = document.createElement("input");
        element.className = "kolicina";
        element.type = "number";
        forma.appendChild(element);

        let tipoviIgre = ["akcija", "avantura", "rpg", "simulacija", "akcija-avantura"];
        let bojeTipova = ["#96bb7c", "#9de5ff", "#f4ebc1", "#e27802", "#f05454"];

        let radioButton = null;
        let opcija = null;
        let rbDiv = null;

        tipoviIgre.forEach((tip, index) => {
            rbDiv = document.createElement("div");
            rbDiv.className = "radioButtons";
            radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = this.nazivProd;
            radioButton.value = bojeTipova[index];

            opcija = document.createElement("label");
            opcija.innerHTML = tip;

            rbDiv.appendChild(radioButton);
            rbDiv.appendChild(opcija);
            forma.appendChild(rbDiv);
        })


        //podaci iz baze
        const stud = new Studio("Naughty Dog", "LA", 7, 1989);
        this.dodavanjeStudia(stud);

        const stud2 = new Studio("Santa Monica Studios", "Santa Monica", 4, 1999);
        this.dodavanjeStudia(stud2);

        let studioDiv = document.createElement("div");
        let studioSelect = document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML = "Studio: ";
        studioDiv.appendChild(labela);
        studioDiv.appendChild(studioSelect);

        let s = null;

        for (let i = 0; i < this.studios.length; i++) {
            s = document.createElement("option");
            s.innerHTML = this.studios[i].ime;
            s.value = this.studios[i].ime; 
            studioSelect.appendChild(s);
        }

        forma.appendChild(studioDiv);

        labela = document.createElement("label");
        labela.innerHTML = "Datum izdavanja: ";
        forma.appendChild(labela);

        element = document.createElement("input");
        element.className = "datum";
        element.type = "date";
        forma.appendChild(element);

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
            x.innerHTML = i+1;
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

        for (let j = 0; j < this.m; j++) {
            y = document.createElement("option");
            y.innerHTML = j+1;
            y.value = j;
            kolona.appendChild(y);
        }

        forma.appendChild(pozicijaDiv);

        const button = document.createElement("button");
        button.className = "button";
        button.innerHTML = "Dodaj video igru u katalog";
        forma.appendChild(button);

        button.onclick = (ev) => {
            const naziv = this.kontejner.querySelector(".naziv").value;
            const brDiskova = this.kontejner.querySelector(".brojDiskova").value;
            const kolicina = parseInt(this.kontejner.querySelector(".kolicina").value);
            const studioChecked = studioSelect.value;
            const datum = this.kontejner.querySelector(".datum").value;
            const tip = this.kontejner.querySelector(`input[name='${this.nazivProd}']:checked`);

            let i = parseInt(vrsta.value);
            let j = parseInt(kolona.value);

            let completlySame = this.videoIgre.find(igra => igra.naziv == naziv && (igra.x != i || igra.y != j));
            let differentType = this.videoIgre.find(igra => igra.naziv == naziv && igra.tip != tip.value && igra.x == i && igra.y == j);

            let studio = this.studios.find(st => st.ime == studioChecked);

            console.log(studio);

            if(completlySame)
                alert("Igra je vec u katalogu na poziciji (" + (completlySame.x + 1) + ", " + (completlySame.y + 1) + ")");

            else if (differentType)
            {
                alert("Menjate tip igre!!!");
                this.videoIgre[i * this.m + j].updateVideoIgre(naziv, kolicina, tip.value, i, j, datum, brDiskova, studio);
            }

            else  
                this.videoIgre[i * this.m + j].updateVideoIgre(naziv, kolicina, tip.value, i, j, datum, brDiskova, studio);
        }

        const button1 = document.createElement("button");
        button1.className = "button";
        button1.innerHTML = "Azuriraj video igru";
        forma.appendChild(button1);

        const button2 = document.createElement("button");
        button2.className = "button";
        button2.innerHTML = "Izbrisi video igru iz kataloga";
        forma.appendChild(button2);

    }

    crtanjeVideoIgre(host) {
        const kontejnerIgre = document.createElement("div");
        kontejnerIgre.className = "kontejnerIgre";
        host.appendChild(kontejnerIgre);

        let vrsta;
        let igra;

        for (let i = 0; i < this.n; i++) {
            vrsta = document.createElement("div");
            vrsta.className = "vrsta";
            kontejnerIgre.appendChild(vrsta);

            for (let j = 0; j< this.m; j++) {
                igra = new VideoIgra("", "", 0, "", "", i, j);
                this.dodavanjeVideoIgre(igra);
                igra.crtanjeVideoIgre(vrsta);
            }
        }
    }
}