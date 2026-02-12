
//Soru 1
function ortalama(dizi1) {
    return dizi1.reduce((toplam, sayi) => toplam + sayi, 0) / dizi1.length;

}
let dizi1 = [10, 20, 30, 40, 50, 60];
console.log(ortalama(dizi1));

//Soru 2
let dizi2 = [23, 67, 45, 89, 12, 55, 34, 78, 91, 42, 60, 38];
let sonuc = dizi2.filter(sayi1 => sayi1 > 50);
console.log(sonuc);

//Soru 3
let dizi3 = [10, 20, 30, 40, 50];
dizi3.push(60); //https://www.w3schools.com/jsreF/jsref_push.asp
dizi3.shift();
console.log(dizi3);

//Soru 4
let dizi4 = ["elma", "armut", "kiraz", "muz", "üzüm"];
let uzunluklar = dizi4.map(y => y.length);
console.log(uzunluklar);

//Soru 5
let dizi5 = [15, 22, 8, 33, 47];
let toplam = dizi5.reduce((birikim, dizi5) => birikim + dizi5);
console.log(toplam);

//Soru 6
for (let i = 1; i <= 10; i++) {
    console.log("7 kere " + i + " = " + (7 * i));
}

//Soru 7
let sayac = 2;
let faktoriyel = 1;
while (sayac <= 5) {
    faktoriyel *= sayac++; //faktoriyel = faktoriyel * sayac;
}
console.log(faktoriyel);

//Soru 8
let dizi6= [12, 5, 8, 130, 44, 9, 17, 25, 6, 15, 20];
let sonuc2 = dizi6.filter(sayi2 => sayi2 % 2 == 0).map(sayi2 => sayi2*sayi2); //https://www.w3schools.com/Jsref/jsref_filter.asp //https://www.w3schools.com/jsreF/jsref_map.asp
console.log(sonuc2);

//Soru 9
function uceBolunenMi(sayi) {
    return sayi % 3 == 0;
}
let uceBolunenler = [];
for (let i = 1; i <= 30; i++) {
    if (uceBolunenMi(i)) {
        uceBolunenler.push(i);
    }
}
console.log(uceBolunenler);  

//Soru 10
let notlar = [45, 78, 92, 33, 67, 88, 54, 71, 39, 95];
let toplamNot = 0;
let gecenAdet = 0;
let enBuyuk = notlar[0]; //notlar.at(0);
for (const not of notlar) {
    toplamNot += not;
    if (not >= 45) {
        gecenAdet++;
    }  
    if (not > enBuyuk) {
        enBuyuk = not;
    }
}
let ortalama1 = toplamNot / notlar.length;
let kalanAdet = notlar.length - gecenAdet;
let yuzde = gecenAdet / notlar.length * 100;
console.log("notların ortalaması = " + ortalama1);
console.log("gecen = " + gecenAdet);
console.log("kalan = " + kalanAdet);
console.log("en buyuk = " + enBuyuk);
console.log("gecme oranı = %" + yuzde);
