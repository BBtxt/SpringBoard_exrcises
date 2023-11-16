const body = document.querySelector('body');
addEventListener('mousemove', function(e) {
    const y = e.pageY;
    const x = e.pageX;
    console.log(`x: ${x}, y: ${y}`);
    const r = Math.round(x * 255 / window.innerWidth);
    const b = Math.round(y * 255 / window.innerHeight);
    body.style.backgroundColor = `rgb(${r}, 0, ${b})`;
})