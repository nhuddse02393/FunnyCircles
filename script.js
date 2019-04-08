function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = getRandomColor();
    this.speedX = 3;
    this.speedY = 3;

    this.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.draw = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let color = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
};

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle() {
    let radius = Math.floor(Math.random() * 80);
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    return circle;
}

let circles = new Array();
for(let i = 0; i<20; i++){
    circles[i] = createCircle();
}

function moveCircles() {
    for (let i = 0; i<circles.length; i++) {
        circles[i].move();
        circles[i].draw();
    }
}

setInterval("moveCircles()",100);

