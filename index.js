
var readLineSync = require("readline-sync");

var userName = readLineSync.question("Enter your name \n");

console.log("Welcome "+ userName + "! to game: DO YO KNOW Shashank? \n");

var score=0;

function play(qn , ans)
{
  var userAns = readLineSync.question(qn+"\n");

  if(userAns === ans)
  score++;

  console.log("-----------");

}


var arr= [
{
  question:"My favorite color is\na. Black \nb. Orange",
  answer:"a"
},
{
question:"I am a : \na.Beach Person \nb.Mountain Person",
answer:"b"
}, 

{
  question:"I love \na.Cricket \nb.Badminton",
  answer:"a"
},

{
  question:"I am a \na.Tea person \nb.Coffee Person",
  answer:"b"
},
{
  question:"My fav Dish\na.Panner \nb.Chole Bhature",
  answer:"b"
}];


for(var i = 0 ; i<arr.length ; i++ )
{
  play(arr[i].question, arr[i].answer);
}

console.log("YAY! You scored: "+score);





