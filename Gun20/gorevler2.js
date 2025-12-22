//aldığı sayının karesini döndüren fonksiyonu yaz ve dene
function karesi(sayi) {
    let sonuc = sayi * sayi;
    return sonuc;
}

console.log ("2'nin karesi: " + karesi(2));

//o anki tarihi "4.01.2024" formatında yazdıran fonksiyon
function gun() {
    const tarih = new Date();
    return tarih.toLocaleDateString();
}

console.log (gun());



//aldığı 2 sayıdan büyük olanı döndüren fonksiyon
function buyukSayi(a,b) {
    return a > b ? a : b;
}

console.log(buyukSayi(10,11));


//aldığı stringin uzunluğunu ekrana yazdıran fonksiyon
function yaziUzunluk(metin) {
    console.log(metin.length);
}

yaziUzunluk("KodFun ile Javascript Dersleri Çok Eğlenceli");



//ekrana yazı ya da tura yazdıran fonksiyon
// function yazdir() {
//     if (Math.random() < 0.5 )
//         console.log("yazi");
//     else
//         console.log("tura");
// }

// yazdir()

function yazdir() {
    console.log(Math.random() < .5 ? "YAZI" : "TURA");
}

yazdir()


