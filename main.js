x = 0;
y = 0;
draw_rec = "";
draw_circle = "";

var SpeechRecognition =  window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition(); 


function start() {
    document.getElementById ("status").innerHTML = "The System is listening Please speak";
    recoginition.start();
}


recognition.onresult = function(event) {
console.log(event);

var content = event.results[0][0].transcript;


document.getElementById ("status").innerHTML = "The speech has been recoginition as: " + content;


if (content == "circle")
{
x.math.floor(math.random() * 900);
y.math.floor(math.random() * 600);
document.getElementById ("status").innerHTML = "Started Drawing Circle";
draw_circle = "set";
}


if (content == "rectangle")
{
x.math.floor(math.random() * 900);
y.math.floor(math.random() * 600);
document.getElementById ("status").innerHTML = "Started Drawing Rectangle";
draw_circle = "set";
}



}
