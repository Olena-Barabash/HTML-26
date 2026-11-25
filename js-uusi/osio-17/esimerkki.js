class Henkilo {
    constructor(nimi, posti, palkka) {
        this.nimi = nimi;
        this.posti = posti;
        this.palkka = palkka;
    }

    laskePalkka() {
        this.palkka = 1.5 * this.palkka;
    }

    naytaPalkka() {
        return this.palkka;
    }
}

class Kehittaja extends Henkilo {
    constructor(nimi, posti, palkka) {
        super(nimi, posti, palkka);
    }

    laskePalkka() {
        super.palkka = super.naytaPalkka() + this.palkka * 2;
        return this.palkka;
    }

    naytaPalkka() {
        return this.laskePalkka();
    }
}

const  kehittaja = new Kehittaja("Nimi", "....", 1000);
console.log(kehittaja.naytaPalkka());