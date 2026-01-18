const o = console.log;
let adlar = ["ali", "can", "cem", "ece", "oya", "efe",];
o(adlar);

//1'den itibaren 4'e kadar (hariç) elemanları yeni dizi yap
o(adlar.slice(1, 4));

//ayraç koyarak birleştir ve string üret
o(adlar.join("/"));

//forEach elemanları tek tek eline alır ve senin istediğin işlemi yapar
adlar.forEach(ad => {
    ad = ad.toLocaleUpperCase("tr");
    console.log("Sayın " + ad);
})

//döngü versiyonu
for (let ad of adlar) {
    ad = ad[0].toLocaleUpperCase("tr") + ad.substring(1);
    console.log("Hoşgeldiniz " + ad + "!");
}

//e ile başlayan ilk elemanı (ilk eşleşen) getir
let eIleBaslayan = adlar.find(x => x.startsWith("e"));
o(eIleBaslayan);

//verilen elemanı bulursa indeksini, bulamazsa -1 döndürür
let cemIndeks = adlar.indexOf("cem");
o(cemIndeks);

let nums = [1, 3, 33, 3, 7, 21];

//aramaya sondan başlar
o(nums.indexOf(3));
o(nums.lastIndexOf(3));

//7'nin katı olan ilk bulduğu sayının indeksi
o(nums.findIndex(n => n % 7 == 0));

// dizide çift sayı var mı
let ciftVarMi = nums.some(n => n % 2 == 0);
o(ciftVarMi); //false

//en az birisi 11'in katı mı
let onBirKatiVarMı = nums.some(n => n % 11 == 0);
o(onBirKatiVarMı); //true

//tümü verilen koşulu sağlıyor mu
let hepsiPozitifMi = nums.every(n => n > 0);
o(hepsiPozitifMi); //true

let hepsiTekMi = nums.every(n => n % 2 !=0);
o(hepsiTekMi);

// dizide cemil var mı
o(adlar.includes("cemil")); //false

//dizide cem var mı
o(adlar.includes("cem")); //true

