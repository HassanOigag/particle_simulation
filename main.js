const ball = new Ball(100,100, 10, getColor(205, 140, 14, 1));

console.log(canvas);

function animate()
{
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.move();
}

animate();