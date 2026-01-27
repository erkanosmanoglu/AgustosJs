// 1'DEN 100'E KADAR SAYILARI YAZDIR (5'İN KATLARI HARİÇ)

// YÖNTEM 1
// for (let i = 0; i <= 100; i++) {
//     if (i % 5 != 0)
//         console.log(i);
// }

// YÖNTEM 2
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0)
        continue;
    console.log(i);
}