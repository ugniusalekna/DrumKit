let buttonArray = document.querySelectorAll(".drum-button");
let numberOfButtons = buttonArray.length
for (let i = 0; i < numberOfButtons; i++) {
  buttonArray[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleKey);

function handleClick() {
  let indexLetter = this.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
  clickValue(indexLetter);
}

function handleKey(event) {
  indexLetter = event.key.toUpperCase();
  clickValue(indexLetter);
}

function clickValue(indexLetter) {

  switch (indexLetter) {
    case "W":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      buttonAnimation(indexLetter);
      break;
    case "A":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      buttonAnimation(indexLetter);
      break;
    case "S":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      buttonAnimation(indexLetter);
      break;
    case "D":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      buttonAnimation(indexLetter);
      break;
    case "J":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      buttonAnimation(indexLetter);
      break;
    case "K":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      buttonAnimation(indexLetter);
      break;
    case "L":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      buttonAnimation(indexLetter);
      break;
    default:
  }
}

function buttonAnimation(currentKey) {
  activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("active");
  setTimeout(function() {
    activeButton.classList.remove("active");
  }, 50);
}
