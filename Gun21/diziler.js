let yas = 18;
let ad = "ali";

let adlar = ["ali", "can", "cem", "ece", "oya"];

console.log(adlar);
console.log(adlar.toString());

//ilk eleman
console.log(adlar[0]);
//son eleman
console.log(adlar[4]);

//dizi uzunluğu yazdırma
console.log(adlar[adlar.length - 1]);

//olmayan elemanın türü nedir: undefined
console.log(adlar[100]);

//son elemana erişim (yöntem 2)
console.log(adlar.at(-1));

//2. indeksteki elemanı cemil yap
adlar[2] = "cemil";
console.log(adlar.toString());


//dizileri stringe dönüştürme
//aralarına seçtiğin bir ayracı koyarak öğeleri birleştirip tek bir büyük string oluşturabilirsin

//aralarına + koayarak tüm öğeleri birleştir ve tek bir string yap
let str = adlar.join("+");
console.log(str);

//stringi diziye çevirme
//stringi belirli ayraçlarına bölerek bir diziye dönüştürebiliriz
let cumle = "ali ata bak";
let kelimeler = cumle.split(" ");
console.log(kelimeler);

let sepet = "muz,elma,ayva,kivi,üzüm";
let meyveler = sepet.split(",");
console.log(meyveler);

