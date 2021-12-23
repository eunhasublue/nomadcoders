const images = ["img01.jpg", "img02.jpg", "img03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement : body에 html tag를 생성시키는 함수
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild : body에 html 태그를 추가하는 함수
document.body.appendChild(bgImage);
