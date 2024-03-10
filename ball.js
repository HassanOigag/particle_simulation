class Ball{
    constructor(x, y, radius, color)
    {
        this.x = getRandomIntInclusive(radius, canvas.width - radius);
        this.y = getRandomIntInclusive(radius, canvas.height - radius);
        this.radius = radius;
        this.color = color;
        this.xspeed = 5;
        this.yspeed = 5;
        this.hitWall = false;
    }

    draw()
    {
        // ctx.fill(this.color);
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    move()
    {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
        {
            this.xspeed *= -1;
            this.hitWall = true;
        }
        else if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
        {
            this.yspeed *= -1;
            this.hitWall = true;
        }else
            this.hitWall = false;
        
        if (this.hitWall)
        {
            canvas.style.backgroundColor = this.color;
            const red = getRandomIntInclusive(0, 255);
            const green = getRandomIntInclusive(0, 255);
            const blue = getRandomIntInclusive(0, 255);
            this.color = getColor(red, green, blue, 1);
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
}