// kullanıcı adını alıp o kişiyi kullanıcı adıyla selamlayan fonksiyon yaz ancak kullanıcı adı 4 harften kısaysa selamlama öncesinde fonksiyonu uyarı mesajı vererek terk et
function selamla(kullaniciAdi) {
    if (kullaniciAdi.length < 4) {
        console.log("Kullanıcı adı en az 4 karakter olmalıdır!");
        return; //fonksiyondan çık

    }

    console.log("Merhaba " + kullaniciAdi);
}

selamla("Erkan");
selamla("Ali");