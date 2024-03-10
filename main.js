// const ball = new Ball(100,100, 4);
// canvas.addEventListener("click", ()=>{
//     let newBall = new Ball(mouse.x, mouse.y);
//     balls.push(newBall);
// });

balls = [];
for (let index = 0; index < ballsCount; index++)
    balls.push(new Ball());

function animate()
{
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.draw();
        ball.move();
        ball.hit(balls)
    });
}

animate();