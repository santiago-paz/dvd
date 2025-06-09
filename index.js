const logoDVD = document.getElementById('dvd_logo');
const body = document.body;
let x = 0,
    y = 0,
    dx = 1,
    dy = 1,
    angle = 0,
    hue = 0,
    scale = 1,
    scaleDir = 1;

function animate() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= window.innerWidth - logoDVD.clientWidth) {
        dx *= -1;
        randomizeHue();
    }
    if (y <= 0 || y >= window.innerHeight - logoDVD.clientHeight) {
        dy *= -1;
        randomizeHue();
    }

    angle = (angle + 2) % 360;
    hue = (hue + 1) % 360;

    if (scale >= 1.2) scaleDir = -1;
    if (scale <= 0.8) scaleDir = 1;
    scale += scaleDir * 0.01;

    logoDVD.style.left = `${x}px`;
    logoDVD.style.top = `${y}px`;
    logoDVD.style.transform = `rotate(${angle}deg) scale(${scale})`;
    logoDVD.style.filter = `hue-rotate(${hue}deg)`;
    body.style.backgroundColor = `hsl(${(hue + 180) % 360}, 50%, 10%)`;

    requestAnimationFrame(animate);
}

function randomizeHue() {
    hue = Math.random() * 360;
}

animate();
