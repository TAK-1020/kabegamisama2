
let audio = document.getElementById("bellSound");
let torii = document.getElementById("torii");
let god = document.getElementById("god");

function handleMotion(event) {
    let acc = event.accelerationIncludingGravity;
    let total = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);

    if (total > 25) { // 振ったと判定
        playBell();
    }
}

function playBell() {
    audio.currentTime = 0;
    audio.play();
    torii.style.display = "none";
    god.style.display = "block";
}

// 初回タップで再生許可とモーション取得
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
        audio.play().catch(() => {
            // iOSの制限で最初の再生失敗を無視
        });
    } catch (e) {
        console.error(e);
    }
}, { once: true });
