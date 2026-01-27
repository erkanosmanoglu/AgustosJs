// 1 MİLYONDAN BAŞLAYARAK SAYILARI ARTTIRARAK YAZDIR
// 79'UN KATINI BULUNCA SON KEZ BU SAYIYI YAZDIR VE DUR

let i = 1000000;

while (true) {
    console.log(i);

    if (i % 79 == 0)
        break;

    i++;
}

