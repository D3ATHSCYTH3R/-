var mouseevent="";
var X,Y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color= "black";
width= 2.5;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(){
    width= document.getElementById("width");
    color= document.getElementById("color");
mouseevent="mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(){
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    Xnow=e.clientX-canvas.offsetLeft;
    Ynow=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("last position of x ="+X+"last position of y ="+Y);
    ctx.moveTo(X,Y);

    console.log("current position of x ="+Xnow+"current position of y"+Ynow);
    ctx.lineTo(Xnow, Ynow);
    ctx.stroke();
    }
    X=Xnow;
    Y=Ynow;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(){
    width= document.getElementById("width");
    color= document.getElementById("color");
mouseevent="touchstart";
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(){
    Xnow=e.touches[0].clientX-canvas.offsetLeft;
    Ynow=e.touches[0].clientY-canvas.offsetTop;
    if(mouseevent=="mousestart"){
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("last position of x ="+X+"last position of y ="+Y);
    ctx.moveTo(X,Y);

    console.log("current position of x ="+Xnow+"current position of y"+Ynow);
    ctx.lineTo(Xnow, Ynow);
    ctx.stroke();
    }
    X=Xnow;
    Y=Ynow;
}