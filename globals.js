const canvas = document.querySelector(".myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let ballsCount = 40;
let balls = [];
let mouse = {x: 0, y: 0};

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getColor(r, g, b, a)
{
    return "rgb(" + r + "," + g + "," + b + "," + a + ")";
}

function distance(x, y, x2, y2)
{
    const deltaX = x2 - x;
    const deltaY = y2 - y;
    const deltaXSquare = Math.pow(deltaX, 2);
    const deltaYSquare = Math.pow(deltaY, 2);
    return Math.sqrt(deltaXSquare + deltaYSquare);
}

function map(value, start, end, newStart, newEnd) {
    return newStart + (newEnd - newStart) * ((value - start) / (end - start));
}
const line =  (x, y, x1, y1, opacity) =>
{
    this.opacity = opacity;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = "rgb(225,255,255,"+ this.opacity +")";
    ctx.stroke();
}

function rotate(xspeed, yspeed, angle) {
    const rotatedVelocities = {
        x: xspeed * Math.cos(angle) - yspeed * Math.sin(angle),
        y: xspeed * Math.sin(angle) + yspeed * Math.cos(angle)
    };

    return rotatedVelocities;
}

canvas.addEventListener("mousemove", (event) =>{
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(balls.length)
});

// canvas.addEventListener("click", () => {
//     let newBall = new Ball(mouse.x, mouse.y);
//     balls.push(newBall);
// });

window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
