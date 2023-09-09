class Bangun {
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
