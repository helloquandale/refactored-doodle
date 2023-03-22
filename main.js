canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=65 && keyPressed<=90)||(keyPressed >=97 && keyPressed<=122))
		//write a code to check the type of key pressed
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabet key";
		console.log("alphabet key");

	}
    else if(keyPressed >=48 && keyPressed<=57){
        numberkey();
        document.getElementById("d1").innerHTML="You pressed number key";
        console.log("number key");
    }
    else if(keyPressed >=37 && keyPressed<=40){
        arrowkey();
        document.getElementById("d1").innerHTML="You pressed arrow key";
        console.log("arrow key");
    }
    else if((keyPressed >= 32 && keyPressed <= 47)||(keyPressed >= 58 && keyPressed <= 64)||(keyPressed >= 91 && keyPressed <= 96)||(keyPressed >= 123 && keyPressed <= 126)){
        specialkey();
        document.getElementById("d1").innerHTML="You pressed special key";
        console.log("Special key");
    }
    else {
        otherkey();
        document.getElementById("d1").innerHTML="You pressed Other key";
        console.log("Other key");
    }
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();//upload respective image with the message. 

}
function numberkey()
{
	img_image="numkey.png";
    add();
}
function arrowkey()
{
    img_image="ArrKey.png";
    add();
}
function specialkey()
{
	img_image="spKey.png";
    add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
