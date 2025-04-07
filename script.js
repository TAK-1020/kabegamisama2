let lastShakeTime = 0;
const shakeThreshold = 15;
const minShakeInterval = 1500;

const suzuSound = document.getElementById("suzu-sound");
const sceneImage = document.getElementById("scene-image");

let step = 0;

function playSuzuAndChangeScene() {
  suzuSound.currentTime = 0;
  suzuSound.play();

  step++;
  if (step === 1) {
    sceneImage.src = "images/torii_closed.png";
  } else if (step === 2) {
    sceneImage.src = "images/torii_open_god.png";
  } else {
    step = 0;
    sceneImage.src = "images/suzu.png";
  }
}

window.addEventListener("devicemotion", (event) => {
  const acc = event.accelerationIncludingGravity;
  const totalAcc = Math.sqrt(acc.x ** 2 + acc.y ** 2 + acc.z ** 2);
  const now = Date.now();
  if (totalAcc > shakeThreshold && (now - lastShakeTime > minShakeInterval)) {
    lastShakeTime = now;
    playSuzuAndChangeScene();
  }
});
