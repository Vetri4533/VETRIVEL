const text = "Welcome to My Typing Effect!";
const typedTextSpan = document.getElementById("typed-text");

let index = 0;

function typeChar() {
  if (index < text.length) {
    typedTextSpan.textContent += text.charAt(index);
    index++;
    setTimeout(typeChar, 100); // speed in ms
  }
}

window.onload = typeChar;
