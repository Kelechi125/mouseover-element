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
    return("rgba(Math.round(Math.random() * 250) + "," + 
                Math.round(Math.random() * 250) + "," + 
                Math.round(Math.random() * 250) + "," + 
                Math.ceiling(Math.random() * 10)/ 10)")
}