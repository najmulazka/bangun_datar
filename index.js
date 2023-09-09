// Najmul Azka inputan prompt bangun datar
async function main() {
    try {
        let bangun1 = new Bangun();

        let repeat = true;
        do {
            let menu = Number(
                window.prompt(`Pilih proses hitung
                1. Luas persegi
                2. Luas persegi panjang
                3. Luas segi tiga
                4. luas lingkaran
                5. keliling persegi
                6. keliling persegi panjang
                7. keliling segi tiga
                8. keliling lingkaran`)
            );

            let result;
            switch (menu) {
                case 1:
                    let sisi = window.prompt('Masukan panjang sisi');
                    result = bangun1.luasPersegi(sisi);
                    console.log(result);
                    break;

                default:
                    alert('Menu tidak tersedia');
                    break;
            }

            repeat = confirm('Proses Hitung lagi?');
        } while (repeat);
    } catch (err) {
        alert(err);
    }
}

main();
