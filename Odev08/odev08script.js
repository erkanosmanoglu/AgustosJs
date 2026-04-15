const img = document.getElementById("picture");
const canvas = document.getElementById("canvas");

let photos = [
    "animal.jpg", 
    "city.jpg", 
    "flower.jpg", 
    "lake.jpg", 
    "mountain.jpg"
];

let i = 0;

function showPhotos(show = 0) {
    i+= show;
    img.src = "img/" + photos.at(i % 5);
}

showPhotos();