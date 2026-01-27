// zar 6 gelinceye kadar at

const zarAt = () => Math.floor(Math.random() * 6 + 1);



for (let zar = zarAt(); zar != 6; zar = zarAt()) {
    console.log(zar);
    
}

console.log("VE 6 GELDİ..");