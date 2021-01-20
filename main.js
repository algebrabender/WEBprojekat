import {Katalog} from "./katalog.js"

fetch("https://localhost:5001/GameShop/PreuzimanjeKataloga").then(p => {
    p.json().then(data => {
        data.forEach(katalog => {
            const kat = new Katalog(katalog.id, katalog.naziv, katalog.n, katalog.m);
            kat.crtanjeKataloga(document.body);
        });
    });
});

/*const katalog1 = new Katalog("GameStop", 3, 5);
katalog1.crtanjeKataloga(document.body);

const katalog2 = new Katalog("GameCentar", 7, 2);
katalog2.crtanjeKataloga(document.body);*/