const ayrac = () => console.log("---");

// A. 1'DEN 10'A SAYILARI YAZDIR

for(let a = 1; a <= 10; a++) {
    console.log(a);
}
ayrac();
// B. 10'DAN 1'E SAYILARI YAZDIR

for (let b = 10; b > 0; b--) {
    console.log(b);
}
ayrac();
// C. 1'DEN 20'YE ÇİFT SAYILARI YAZDIR

for (let c = 2; c <= 20; c += 2) {
    console.log(c);
}

ayrac();
// D. 30'DAN 0'A 3'ÜN KATLARINI YAZDIR (0 hariç)

for (let d = 30; d > 0; d -= 3) {
    console.log(d);
}
