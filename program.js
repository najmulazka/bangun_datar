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
}
