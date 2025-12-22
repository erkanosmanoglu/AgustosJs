// bir fonksiyonu function keyword'u ile tanımladığında fonksiyonun tanımlandığı scope içinde herhangi bir noktada (yani fonksiyonun üstünde dahi) çağırılabilir

//üstünde çalışır
saatiYazdir();

function saatiYazdir() {
    console.log(new Date().toLocaleTimeString("tr"));
}

//eğer değişkende saklanıyorsa sadece tanımlandıktan sonra çağrılabilir
yaz();

const yaz = function(metin) {
    console.log(metin);
}