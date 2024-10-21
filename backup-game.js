var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenPattern = [];
var level = 0;
var start = false;

document.addEventListener("keydown", function () {
  if (start === start) {
    document.querySelector("#level-title").textContent = "Level " + level;
    nextSequence();
    start = true;
  }
});

function nextSequence() {
  level++;
  document.querySelector("#level-title").textContent = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var soundSelector = this.id;
    var userChosenColor = this.id;
    userChosenPattern.push(userChosenColor);
    $("#" + userChosenColor)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    makeSound(soundSelector);
    checkAnswer();
  });
}

function makeSound(soundSelector) {
  switch (soundSelector) {
    case "blue":
      var blue = new Audio("./sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var blue = new Audio("./sounds/green.mp3");
      blue.play();
      break;
    case "red":
      var blue = new Audio("./sounds/red.mp3");
      blue.play();
      break;
    case "yellow":
      var blue = new Audio("./sounds/yellow.mp3");
      blue.play();
      break;
    default:
      console.log(soundSelector);
      break;
  }
}
