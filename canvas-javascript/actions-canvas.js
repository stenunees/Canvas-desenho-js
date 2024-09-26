const color = document.querySelector('input');
let screen = document.querySelector('canvas');

let defaultColor = 'black';
let podeDesenhar = false;
let mouseX = 0;
let mouseY = 0;

let ctx = screen.getContext('2d');
color.onchange = () => defaultColor = color.value;

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

function mouseDownEvent(e) {
    podeDesenhar = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if (podeDesenhar) {
        desenhar(e.pageX, e.pageY);
    }
}

function mouseUpEvent() {
    podeDesenhar = false;
}

function desenhar(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop; 
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function limparQuadro() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
