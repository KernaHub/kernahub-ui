let ascii = document.querySelector('.ascii').textContent;
let asciiLetters = ascii.split('');
let displayLetters = document.querySelector("#text");

function animate() {
  asciiLetters.length > 0 ? displayLetters.innerHTML += asciiLetters.shift() : clearTimeout(moveType);
  let moveType = setTimeout(animate, 5);
};

animate();

