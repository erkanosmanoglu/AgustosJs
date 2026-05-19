

//document.body.style= "background: lightskyblue";
$("body").css("background-color", "lightgray");

// Saf JS Yöntem 1:
// saf js ile body'nin içine h1 ekle: Hello World!
// document.body.innerHTML = "<h1>Hello World!</h1>" + document.body.innerHTML;

// Saf JS Yöntem 2:
// const h1 = document.createElement("h1");
// h1.textContent = "Merhaba Dünya!";
// document.body.append(h1);

// JQUERY Yöntem 1:
//$("body").prepend("<h1>Merhaba Türkiye!</h1>");

// JQUERY Yöntem 2:
const baslik = $("<h1/>").text("Hoşgeldiniz!");
$("body").prepend(baslik);