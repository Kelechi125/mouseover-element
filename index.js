console.log("Hello World!");

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
    return "rgb(" + Math.round(Math.random() * 250) + ',' + 
                    Math.round(Math.random() * 250) + ',' + 
                    Math.round(Math.random() * 250) + ',' + 
                    Math.ceiling(Math.random() * 10) / 10 + ")"
}

const Ball = () => {
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
}

let bal = [];
for (let i = 0; i < 50; i++) {
    bal.push(new Ball());
}

let animate = () => {
    if (tx !== window.innerWidth || ty !== window.innerHeight) {
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    for (let i = 0; i < bal.length; i++) {
        bal[i].update();
        bal[i].y += bal[1].dy;
        bal[i].x += bal[1].dx;

        if (bal[i].y + bal[i].radius >= ty) {
            bal[i].dy = -bal[i].dy * grav;
        } else {
            bal[i].dy += bal[i].vel;
        }

        if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
            bal[i].dx = -bal[i].dx;
        }

        if (mousex > bal[i].x - 20 &&
            mousex < bal[i].x + 20 &&
            mousey > bal[i].y - 50 &&
            mousey < bal[i].y + 50 &&
            bal[i].radius < 70) {
                bal[i].radius += 5
            } else {
                if (bal[i].radius > bal[i].startRadius) {
                    bal[i].radius += -5;
                }
            }
            // for loop ends
    }
    //animation ends
}

animate();

setInterval(() => {
    bal.push(newBall());
    bal.splice(0, 1);
}, 400);