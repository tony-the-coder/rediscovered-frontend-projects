var i = 0;
var text="Anthony";
var speed=200;

function writingName(){
  if (i < text.length) {
   document.getElementById('typed').innerHTML += text.charAt(i);
    i++;
     setTimeout(writingName, speed);
}
}

window.onload = writingName;


// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("name-written").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// window.onload = typeWriter;