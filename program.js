export class Bangun {
    // Najmul Azka -> feature luas persegi
    luasPersegi(sisi) {
        return new Promise((resolve, reject) => {
            if (typeof sisi !== 'number') sisi = Number(sisi);
            if (isNaN(sisi)) return reject('value sisi salah');

            let luasPersegi = sisi * sisi;
            console.log(`sisi = ${sisi}`);
            return resolve(`luas persegi dengan sisi ${sisi} = ${luasPersegi}`);
        });
    }

    luasPersegiPanjang(panjang, lebar) {
        return new Promise((resolve, reject) => {
            if (typeof panjang !== 'number') panjang = Number(panjang);
            if (isNaN(panjang)) return reject('value panjang salah');
            if (typeof lebar !== 'number') lebar = Number(lebar);
            if (isNaN(lebar)) return reject('value lebar salah');

            let luasPersegiPanjang = panjang * lebar;
            console.log(`panjang = ${panjang}`);
            console.log(`lebar = ${lebar}`);
            return resolve(`luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} = ${luasPersegiPanjang}`);
        });
    }
}

/*
    Karena bangun datar pasti mempunyai luas dan keliling,
    maka kita buat abstract class BangunDatar yang berisi
    method luas dan keliling yang harus diimplementasikan
*/
// Abstract Class
class BangunDatar {
    constructor(name) {
        if (this.constructor === BangunDatar) throw new Error('BangunBase tidak boleh diinstansiasi');
        this.name = name;
    }

    luas() {
        throw new Error('method luas harus diimplementasikan');
    }

    keliling() {
        throw new Error('method keliling harus diimplementasikan');
    }
}

// Inheritance
export class Segitiga extends BangunDatar {
    constructor(alas, tinggi, sisi) {
        super('Segitiga');
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisi = sisi;
    }
    // Override
    luas() {
        return new Promise((resolve, reject) => {
            if (typeof this.alas !== 'number') this.alas = Number(this.alas);
            if (isNaN(this.alas)) return reject('value alas salah');
            if (typeof this.tinggi !== 'number') this.tinggi = Number(this.tinggi);
            if (isNaN(this.tinggi)) return reject('value tinggi salah');

            let luasSegitiga = (this.alas * this.tinggi) / 2;
            console.log(`alas = ${this.alas}`);
            console.log(`tinggi = ${this.tinggi}`);
            return resolve(`luas segitiga dengan alas ${this.alas} dan tinggi ${this.tinggi} = ${luasSegitiga}`);
        });
    }

    // override
    keliling() {
        return new Promise((resolve, reject) => {
            if (typeof this.sisi !== 'number') this.sisi = Number(this.sisi);
            if (isNaN(this.sisi)) return reject('value sisi salah');

            let kelilingSegitiga = this.sisi * 3;
            console.log(`sisi = ${this.sisi}`);
            return resolve(`keliling segitiga dengan sisi ${this.sisi} = ${kelilingSegitiga}`);
        });
    }
}

export class Persegi extends BangunDatar {
    constructor(sisi) {
        super('Persegi');
        this.sisi = sisi;
    }

    luas() {
        return new Promise((resolve, reject) => {
            if (typeof this.sisi !== 'number') this.sisi = Number(this.sisi);
            if (isNaN(this.sisi)) return reject('value sisi salah');

            let luasPersegi = this.sisi * this.sisi;
            console.log(`sisi = ${this.sisi}`);
            return resolve(`luas persegi dengan sisi ${this.sisi} = ${luasPersegi}`);
        });
    }

    keliling() {
        return new Promise((resolve, reject) => {
            if (typeof this.sisi !== 'number') this.sisi = Number(this.sisi);
            if (isNaN(this.sisi)) return reject('value sisi salah');

            let kelilingPersegi = this.sisi * 4;
            console.log(`sisi = ${this.sisi}`);
            return resolve(`keliling persegi dengan sisi ${this.sisi} = ${kelilingPersegi}`);
        });
    }
}

export class PersegiPanjang extends BangunDatar {
    constructor(panjang, lebar) {
        super('Persegi Panjang');
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        return new Promise((resolve, reject) => {
            if (typeof this.panjang !== 'number') this.panjang = Number(this.panjang);
            if (isNaN(this.panjang)) return reject('value panjang salah');
            if (typeof this.lebar !== 'number') this.lebar = Number(this.lebar);
            if (isNaN(this.lebar)) return reject('value lebar salah');

            let luasPersegiPanjang = this.panjang * this.lebar;
            console.log(`panjang = ${this.panjang}`);
            console.log(`lebar = ${this.lebar}`);
            return resolve(`luas persegi panjang dengan panjang ${this.panjang} dan lebar ${this.lebar} = ${luasPersegiPanjang}`);
        });
    }

    keliling() {
        return new Promise((resolve, reject) => {
            if (typeof this.panjang !== 'number') this.panjang = Number(this.panjang);
            if (isNaN(this.panjang)) return reject('value panjang salah');
            if (typeof this.lebar !== 'number') this.lebar = Number(this.lebar);
            if (isNaN(this.lebar)) return reject('value lebar salah');

            let kelilingPersegiPanjang = 2 * (this.panjang + this.lebar);
            console.log(`panjang = ${this.panjang}`);
            console.log(`lebar = ${this.lebar}`);
            return resolve(`keliling persegi panjang dengan panjang ${this.panjang} dan lebar ${this.lebar} = ${kelilingPersegiPanjang}`);
        });
    }
}

export class Lingkaran extends BangunDatar {
    constructor(jariJari) {
        super('Lingkaran');
        this.jariJari = jariJari;
    }

    luas() {
        return new Promise((resolve, reject) => {
            if (typeof this.jariJari !== 'number') this.jariJari = Number(this.jariJari);
            if (isNaN(this.jariJari)) return reject('Value jari jari salah');

            let luasLingkaran = 3.14 * (this.jariJari * this.jariJari);
            console.log(`Jari jari = ${this.jariJari}`);
            return resolve(`Luas lingkaran dengan jari jari ${this.jariJari} = ${luasLingkaran}`);
        });
    }

    keliling() {
        return new Promise((resolve, reject) => {
            if (typeof this.jariJari !== 'number') this.jariJari = Number(this.jariJari);
            if (isNaN(this.jariJari)) return reject('Value jari jari salah');

            let kelilingLingkaran = 2 * 3.14 * this.jariJari;
            console.log(`Jari jari = ${this.jariJari}`);
            return resolve(`Keliling lingkaran dengan jari jari ${this.jariJari} = ${kelilingLingkaran}`);
        });
    }
}
