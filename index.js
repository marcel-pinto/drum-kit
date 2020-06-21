var validButtons = {
  w() {
    return new Audio("sounds/tom-1.mp3");
  },
  a() {
    return new Audio("sounds/tom-2.mp3");
  },
  s() {
    return new Audio("sounds/tom-3.mp3");
  },
  d() {
    return new Audio("sounds/tom-4.mp3");
  },
  j() {
    return new Audio("sounds/snare.mp3");
  },
  k() {
    return new Audio("sounds/crash.mp3");
  },
  l() {
    return new Audio("sounds/kick-bass.mp3");
  }
};
function buttonAnimation(key) {
  if (validButtons[key]) {
    console.log(key);
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed")
    }, 100);
  }
}

function playTheKey(key) {
  var buttonPressed = validButtons[key];
  if (buttonPressed) {
    var button = buttonPressed();
    button.play();
  }
}

function handleClick() {
  //this.style.color = 'white';
  var key = this.innerText;
  playTheKey(key);
  buttonAnimation(key);
}

function handleKeyboard(event) {
  var key = event.key;
  playTheKey(key);
  buttonAnimation(key);
}

function setKeyDrums() {
  var keyButtons = document.querySelectorAll(".set button");
  for (var i = 0; i < keyButtons.length; i++) {
    keyButtons[i].addEventListener("click", handleClick);
  }
  document.addEventListener("keydown", handleKeyboard);
}

setKeyDrums();
