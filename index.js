var readlineSync = require("readline-sync");
var score = 0

var highScore = [
  {
    name: "divya",
    score: 10
  },
  {
    name: "gayathri",
    score: 10
  }
]

var questions = [
  {
    question: "Where do I live? ",
    answer: "Chennai"
  },
  {
    question: "Which is my birth month? ",
    answer: "June"
  },
  {
    question: "What is my age? ",
    answer: "20"
  },
  {
    question: "Which bachelor's degree did I pursue? ",
    answer: "B.sc Mathematics"
  },
  {
    question: "What is my favourite color? ",
    answer: "black"
  },
  {
    question: "What pet do I have at home? ",
    answer: "cat"
  },
  {
    question: "What is my favourite sport? ",
    answer: "badminton"
  },
  {
    question: "Who is my favourite athlete? ",
    answer: "saina nehwal"
  },
  {
    question: "Do I have a sibbling? ",
    answer: "yes"
  },
  {
    question: "Who told me about neog camp? ",
    answer: "My brother"
  }
]

var userName = readlineSync.question("What is your name?  ")
console.log("Hello " + userName + ", Let us see how much you know me!!")

function play(question, answer) {
  var givenAnswer = readlineSync.question(question);
  if (givenAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you're right!");
    score = score + 1;
  } else { console.log("you're wrong! The right answer is " + answer) }
  console.log("your current score is " + score);
  console.log("--------------------------")
}
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! You have SCORED: ", score);
console.log("")

console.log("Check out the high scores ");
for (var i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + "-" + highScore[i].score + " points")

}
console.log(" If you have bet the highscore ping me with the screenshot");