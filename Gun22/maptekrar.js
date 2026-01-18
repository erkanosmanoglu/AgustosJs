let yemekler = ["hamburger", "kokoreç", "lahmacun", "kavurma"];

//yemeklerin string uzunluklarını sırayla içeren diziyi oluştur
let uzunluklar = yemekler.map(y => y.length);
console.log(uzunluklar);

//yemeklerin ilk harfinin büyük olduğu yeni bir dizi döndür
function ilkHarfBuyut(str) {
    return str[0].toUpperCase() + str.substring(1);
}

let yemekler2 = yemekler.map(y => ilkHarfBuyut(y));
console.log(yemekler2);