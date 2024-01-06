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