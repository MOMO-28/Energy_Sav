const texts = [
  "About_Us",
  "私たちについて",
  "Group（１）",
  "Enjoy the smooth animation!"
];

const typingElement = document.getElementById('typing');
const typingSpeed = 100; // ms per character typing
const erasingSpeed = 50; // ms per character erasing
const delayBetween = 1500; // ms delay between phrases

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

// Start typing effect
setTimeout(type, delayBetween);
