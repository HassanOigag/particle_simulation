function rotate(xspeed, yspeed, angle) {
    const rotatedVelocities = {
        x: xspeed * Math.cos(angle) - yspeed * Math.sin(angle),
        y: xspeed * Math.sin(angle) + yspeed * Math.cos(angle)
    };

    return rotatedVelocities;
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

class Ball{
    constructor(radius)
    {
        this.x = getRandomIntInclusive(radius, canvas.width - radius);
        this.y = getRandomIntInclusive(radius, canvas.height - radius);
        this.radius = radius;
        this.xspeed = getRandomIntInclusive(-1, 1);
        this.yspeed = getRandomIntInclusive(-1, 1);
        this.opacity = Math.random() + 0.1;
        this.hitWall = false;
        this.red = 255;
        this.green = 255;
        this.blue = 255;
        this.increment = 0.01;
        this.mass = 1;
    }
    draw()
    {
        // ctx.fill(this.color);
        ctx.fillStyle = getColor(this.red, this.green, this.blue, this.opacity)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    move()
    {
        // console.log(this.opacity)
        if (this.opacity >= 1 || this.opacity <= 0.1)
            this.increment *= -1;
        this.opacity += this.increment;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
            this.xspeed *= -1;
        else if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
            this.yspeed *= -1;
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    
    hit(balls)
    {   
        balls.forEach(ball => {
            let maxDist = 150;
            let dist = distance(this.x, this.y, ball.x, ball.y);
            if (this != ball && dist < maxDist)
            {
                let opc = map(dist, 0, maxDist,1, 0);
                line(this.x, this.y, ball.x, ball.y, opc);
            }

            if (this != ball && distance(this.x, this.y, ball.x, ball.y) < 2 * this.radius)
                this.bounce(ball);
        });
    }

    bounce(obj) {
        const xVelocityDiff = this.xspeed- obj.xspeed;
        const yVelocityDiff = this.yspeed - obj.yspeed;
    
        const xDist = obj.x - this.x;
        const yDist = obj.y - this.y;
    
        // Prevent accidental overlap of thiss
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    
            // Grab angle between the two colliding thiss
            const angle = -Math.atan2(obj.y - this.y, obj.x - this.x);
    
            // Store mass in var for better readability in collision equation
            const m1 = this.mass;
            const m2 = obj.mass;
    
            // Velocity before equation
            const u1 = rotate(this.xspeed, this.yspeed, angle);
            const u2 = rotate(obj.xspeed, obj.yspeed, angle);
    
            // Velocity after 1d collision equation
            const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
            const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
    
            // Final velocity after rotating axis back to original location
            const vFinal1 = rotate(v1.x, v1.y, -angle);
            const vFinal2 = rotate(v2.x, v2.y, -angle);
    
            // Swap this velocities for realistic bounce effect
            this.xspeed = vFinal1.x;
            this.yspeed = vFinal1.y;
    
            obj.xspeed = vFinal2.x;
            obj.yspeed = vFinal2.y;
        }
    }
    
}