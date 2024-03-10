// const ball = new Ball(100,100, 4);
const balls = []
for (let index = 0; index < 20; index++) {

    balls.push(new Ball(4))
}
console.log(canvas);

function animate()
{
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.draw();
        ball.move();
        ball.hit(balls)
    });

    // for (let index = 0; index < balls.length; index++) {
    //     for (let index2 = 0; index2 < balls.length; index2++) {
    //         if (index != index2 && balls[index].hit(balls[index2]))
    //             balls[index].bounce(balls[index2]); 
    //     }
    // }
}

animate();