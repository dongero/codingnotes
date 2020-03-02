var context, rectangle, loop;

var

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

rectangle = {

  height:20,
  width:20,
  x:0,
  y:72, //Center of the canvas

};
  loop = function() {
    var randomNum1 = (Math.random()*100);
    var randomNum2 = (Math.random())*100;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()/40).toString(16);
    rectangle.x +=randomNum1;
    rectangle.y +=randomNum2;

    context.fillStyle = "#000000"; //this resets image! paint brushy thing
    context.fillRect(0, 0, 320, 180); //x, y, widght, height
    context.fillStyle = "#" + randomColor; // hex for red
    //context.beginPath(); //without this it can create streaks!
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

    context.fill();



    if (rectangle.x > 320) {// if rectangle goes past right boundary
   
       rectangle.x = -rectangle.width;

    }
    
    if (rectangle.y > 180) {// if rectangle goes past right boundary
   
       rectangle.y = -rectangle.height;

    }

    window.requestAnimationFrame(loop);
  };

  window.requestAnimationFrame(loop);