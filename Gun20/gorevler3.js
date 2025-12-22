//aldığı iki sayının ortalamasını döndüren fonksiyonu anonim olarak oluşturup bir değişkende sakla ve test et

// const ortalama = function(sayi1, sayi2) {
//     return (sayi1 + sayi2) / 2;
// };
// let orta = ortalama(100,200);
// console.log(orta);


const ortalama = (a, b) => (a + b) /2;

console.log(ortalama(3, 4));

//girilen sayının küpünü hesaplayan fonksiyonu anonim bir arrow function olarak tanımla ve test et

const kupu = num => Math.pow(num, 3);

console.log(kupu(3));

//kupu fonksiyonunun anonim olmayan klasik versiyonunu yaz
function kup(sayi) {
    return Math.pow(sayi, 3);
}

console.log(kup(10));