let tbl = document.getElementById('tbl');
let no =1;

class Gempa {
    constructor(lokasi, skala){
        this.lokasi = lokasi;
        this.skala = skala;

    }

    dampakGempa(){
        if(this.skala <= 2) return this.dampak = "B ajah, masih aman";
        if(this.skala <= 4) return this.dampak = "Boleh juga nih, udah was was";
        if(this.skala <= 6) return this.dampak = "Ketar ketir, panik mode on";
        return this.dampak = "roboh" ;
    }

    infoGempa(){
        tbl.innerHTML += `
        <tr>
            <td>${no++}</td>
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td>${this.dampakGempa()}</td>
        </tr>
        
        
    `}
}

const g1 = new Gempa("Aceh", 2.3);
g1.infoGempa();
const g2 = new Gempa("Lampung", 4.5);
g2.infoGempa();
const g3 = new Gempa("Bengkulu", 1.6);
g3.infoGempa();
const g4 = new Gempa("Bali", 3.6);
g4.infoGempa();
const g5 = new Gempa("Jatim", 4.9);
g5.infoGempa();
const g6 = new Gempa("Jateng", 5.8);
g6.infoGempa();
const g7 = new Gempa("Banten", 7.1);
g7.infoGempa();
const g8 = new Gempa("Sumatera Barat", 5.2);
g8.infoGempa();
const g9 = new Gempa("Sumatera Utara", 8.1);
g9.infoGempa();
const g10 = new Gempa("Nusa Tenggara Barat", 6.4);
g10.infoGempa();