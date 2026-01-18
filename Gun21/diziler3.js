//non-mutating mehtods
//dizide değişiklik yapmaz

let c = console.log;

//concat: dizileri birleştir
let dizi1 = [1, 2, 3];
let dizi2 = ["a", "b", "c"];
let dizi3 = dizi1.concat(dizi2);

c(dizi1);
c(dizi2);
c(dizi3);

//slice: diziden dilim al
let gida = ["yağ", "sütlaç", "nutella", "baklava", "balık"];
let tatlilar = gida.slice(1, 4);
c(gida);
c(tatlilar);

//map: tüm öğeleri belirli bir fonksiyona tabi tutarak değiştirir ve yeni diziye koyar
function buyut(metin) {
    return metin.toUpperCase();
}

let dizi4 = tatlilar.map(buyut);
c(dizi4);

let dizi5 = gida.map(s => s.length);
c(gida);
c(dizi5);

//sayıların karelerinin dizisi
c(dizi1);
let kareleri = dizi1.map(x => x*x);
c(kareleri);

let sehirler = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];

//8 harfli şehirler
let dizi6 = sehirler.filter(s => s.length == 8);
c(dizi6);

//t ile başlayanlar
let dizi7 = sehirler.filter(x => x.startsWith("T"));
c(dizi7);

//a ile bitenler+
let dizi8 = sehirler.filter(x => x.endsWith("a"));
c(dizi8);

//içinde ğ bulunan şehirler
let dizi9 = sehirler.filter(x => x.includes("ğ"));
c(dizi9);

//sırasıyla içinde k ve i harfi yan yana olan şehirler
let dizi10 = sehirler.filter(x => x.includes("ki"));
c(dizi10);


//içinde en az 2 tane a harfi bulunan şehirler  --->  Regex yöntemi  https://www.w3schools.com/js/js_regexp.asp
let dizi11 = sehirler.filter(x => /a.*a/i.test(x));
c(dizi11);