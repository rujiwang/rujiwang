const audioElement = document.getElementById("background-audio");

document.addEventListener("mousemove", function () {
  audioElement.play();
});

document.addEventListener("click", function () {
  audioElement.play();
});
