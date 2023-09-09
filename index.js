import { Persegi, Segitiga, PersegiPanjang, Lingkaran } from './program.js';

// Najmul Azka inputan prompt bangun datar
async function main() {
    try {
        const persegi = new Persegi();
        const segitiga = new Segitiga();
        const persegiPanjang = new PersegiPanjang();
        const lingkaran = new Lingkaran();
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
                    persegi.sisi = window.prompt('Masukan panjang sisi');
                    result = await persegi.luas();
                    alert(result);
                    break;

                case 2:
                    persegiPanjang.panjang = window.prompt('Masukan panjang sisi');
                    persegiPanjang.lebar = window.prompt('Masukan lebar sisi');
                    result = await persegiPanjang.luas();
                    alert(result);
                    break;

                case 3:
                    segitiga.alas = window.prompt('Masukan alas segitiga');
                    segitiga.tinggi = window.prompt('Masukan tinggi segitiga');
                    result = await segitiga.luas();
                    alert(result);
                    break;

                case 4:
                    lingkaran.jariJari = window.prompt('Masukan jari jari lingkaran');
                    result = await lingkaran.luas();
                    alert(result);
                    break;

                case 5:
                    persegi.sisi = window.prompt('Masukan sisi persegi');
                    result = await persegi.keliling();
                    alert(result);
                    break;

                case 6:
                    persegiPanjang.panjang = window.prompt('Masukan panjang persegi panjang');
                    persegiPanjang.lebar = window.prompt('Masukan lebar persegi panjang');
                    result = await persegiPanjang.keliling();
                    alert(result);
                    break;

                case 7:
                    segitiga.sisi = window.prompt('Masukan sisi segitiga');
                    result = await segitiga.keliling();
                    alert(result);
                    break;

                case 8:
                    lingkaran.jariJari = window.prompt('Masukan jari jari lingkaran');
                    result = await lingkaran.keliling();
                    alert(result);
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
