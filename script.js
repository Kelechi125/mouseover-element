const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let tx = window.innerWidth;
let ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

let mousex = 0;
let mousey = 0;

addEventListener("mouseover", event => {
    mousex = event.clientX;
    mousey = event.clientY;
})


const grav = 0.99;

c.lineWidth = 5;
let randomColor = () => {
    return `rgba(${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)}, ${Math.ceil(Math.random() * 10) / 10})`;
}

/*function createBall () {
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startRadius = this.radius;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() / 5;
    this.update = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
    };
    
}*/

//class to create circles
class createBall {
    constructor (/*x, y, dx, dy, radius*/) {
        this.x = Math.random() * (tx - this.radius * 2) + this.radius;
        this.y = Math.random() * (ty - this.radius);
        this.dx = Math.round((Math.random() * 0.5) * 10);
        this.dy = Math.random() * 2;
        this.radius = Math.random() * 20 + 14;
        this.startRadius = this.radius;
        this.color = randomColor();
    }
//method for drawing the circles
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
        //c.closePath();
    }
}

//initializes the circles
/*let circles = [];
for (let i = 0; i < 5; i++) {
    circles.push(new createBall());
}*/

const circles = Array.from({ length: 50 }, () => new createBall());

function animate () {
    if (tx !== window.innerWidth || ty !== window.innerHeight) {
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    for (const circle of circles) {
        circle.update();
        circle.y += circle.dy;
        circle.x += circle.dx;

        if (circle.y + circle.radius >= ty) {
            circle.dy = -circle.dy * grav;
        } else {
            circle.dy += circle.vel;
        }

        if (circle.x + circle.radius > tx || circle.x - circle.radius < 0) {
            circle.dx = -circle.dx;
        }

        if (mousex > circle.x - 20 &&
            mousex < circle.x + 20 &&
            mousey > circle.y - 50 &&
            mousey < circle.y + 50 &&
            circle.radius < 70) {
                circle.radius += 5
            } else {
                if (circle.radius > circle.startRadius) {
                    circle.radius += -5;
                }
            }
            // for loop ends
    }
    //animation ends
}

animate();

setInterval(() => {
    bal.push(new createBall());
    bal.shift();
}, 400);