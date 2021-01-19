import {Katalog} from "./katalog.js"
import { Studio } from "./studio.js"

//privremeno
const stud = new Studio("Naughty Dog", "LA", 7, 1989);

fetch("https://localhost:5001/GameShop/PreuzimanjeKataloga").then(p => {
    p.json().then(data => {
        data.forEach(katalog => {
            const kat = new Katalog(katalog.gameShop, katalog.n, katalog.m);
            kat.crtanjeKataloga(document.body);

            katalog.videoIgre.forEach(igra => {
                kat.videoIgre[igra.x * kat.m + igra.y].updateVideoIgre(igra.naziv, igra.kolicinaNaStanju, "#9de5ff", igra.x, igra.y, igra.datum, igra.brojDiskova, stud);
            })
        });
    });
});

/*const katalog1 = new Katalog("GameStop", 3, 5);
katalog1.crtanjeKataloga(document.body);

const katalog2 = new Katalog("GameCentar", 7, 2);
katalog2.crtanjeKataloga(document.body);*/