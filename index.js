console.log("Hello World!");

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const tx = window.innerWidth;
const ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

let mousex = 0;
let mousey = 0;

mousex.addEventListener("mousemove", (event) => {
    mousex = event.clientX;
})
mousey.addEventListener("mouseover", (event) => {
    mousex = event.clientY;
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