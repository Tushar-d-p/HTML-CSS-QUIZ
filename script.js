var readlineSync = require("readline-sync");

var score = 0;
var questions=[
  {
    question:"What does 'a' tag stands for in html ? ",
    answer:"anchor"
  },
  {
    question:"Image is self closing tag (Yes/No) ? ",
    answer:"Yes"
  },
  {
    question:"Css stylesheet can be append in how many ways (1/2/3) ? ",
    answer:"3"
  },
  {
    question:"hr tag is self closing(Yes/No) ? ",
    answer: "Yes"
  },
  {
    question:"what is the use of 'nav' tag ? ",
    answer:"navigation"
  }
]

function play(question,answer){
  var userAns = readlineSync.question(question);

  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    score=score+2;
  }
  else {
    score=score-2;
  }
}

function game(){
for(var i = 0; i < questions.length; i++)
  {
    var currentObj = questions[i];

    play(currentObj.question,currentObj.answer);

    
  }
}

function Final(){
  if(score === 10)
{
  console.log(score);
  console.log("You Won!!!");
}
else {
  console.log(score);
  console.log("You Loose.");
}
}

game();
Final();