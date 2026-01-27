//görev: 6 gelinceye kadar zar at

function zarAt() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(zarAt());

let zar = zarAt();

while (zar != 6) {
    console.log(zar);
    zar = zarAt();
}

console.log("ZAR 6 GELDİ!");