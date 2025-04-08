
let audio = document.getElementById("bellSound");
let suzu = document.getElementById("suzu");
let torii = document.getElementById("torii");
let god = document.getElementById("god");

function handleMotion(event) {
    let acc = event.accelerationIncludingGravity;
    let total = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

    if (total > 25) {
        playBellAndShowTorii();
    }
}

function playBellAndShowTorii() {
    audio.currentTime = 0;
    audio.play();

    suzu.style.display = "none";     // 鈴を非表示
    torii.style.display = "block";   // 扉（閉）を表示
    god.style.display = "none";

    setTimeout(() => {
        torii.style.display = "none";  // 扉を消す
        god.style.display = "block";   // 神様を表示
    }, 1000);
}

document.body.addEventListener('click', async () => {
    try {
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            const response = await DeviceMotionEvent.requestPermission();
            if (response === 'granted') {
                window.addEventListener('devicemotion', handleMotion);
            } else {
                alert("モーションアクセスが拒否されました");
            }
        } else {
            window.addEventListener('devicemotion', handleMotion);
        }

        audio.play().catch(() => {});
    } catch (e) {
        console.error(e);
    }
}, { once: true });
