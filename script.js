
let played = false;
window.addEventListener("devicemotion", function(event) {
  if (played) return;
  const acc = event.accelerationIncludingGravity;
  if (acc && Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z) > 30) {
    played = true;
    document.getElementById("bellSound").play();
    const suzu = document.getElementById("suzu");
    suzu.style.display = "none";

    const torii = document.getElementById("torii");
    torii.style.display = "block";
    setTimeout(() => {
      torii.classList.add("show");
    }, 100); // 軽く遅延させてスムーズに

    setTimeout(() => {
      const god = document.getElementById("god");
      torii.style.display = "none";
      god.style.display = "block";
      setTimeout(() => {
        god.classList.add("show");
      }, 100);
    }, 2500);
  }
});
