const readlineSync = require("readline-sync");

var chalk = require("chalk"), log = console.log;

var boldName = chalk.bold.greenBright;

var welcomeColor = chalk.italic.yellowBright.bgBlack;

var questionAsked = chalk.bgYellowBright.black;
var scoreNumber = chalk.dim;

var highestScorer = chalk.underline.bold.cyanBright;
let userName = readlineSync.question(questionAsked("What's your Name? "));

log(welcomeColor("Welcome " + boldName(userName) + " to the quiz Do you know Dr. Stone? "))
log(welcomeColor("---Let see do you know or not ---"));
log(welcomeColor("---------------------------------"));
log(welcomeColor("There are Two level - "));
log(welcomeColor("get at least 4 points in level 1 to qualify for next"));
log("---------------------------------");
log("---------------------------------");

let score = 0;
function play(question, answer, option) {
  let currentQuestion = readlineSync.keyInSelect(option, question);

  if (option[currentQuestion] === answer) {
    //option[currentQuestion] = as i am providing it with function.
    log("Correct");
    log(" ");
    score += 1;
  } else {
    log("wrong");
    log(" ");
  }
}


let questions = [
  questionOne = {
    question: "what is the name of protagonist ? ", answer: "senku", option: ["senku", "taiju"]

  },
  questionTwo = {
    question: "What was so different about Senku that helped him to wake up? ", answer: "unknown", option: ["unknown", " burning calories via thinking"]
  },
  questionThree = {
    question: "What present did Senku make for Kinrou in hopes he could buy in his favors ?  ", answer: "golden spearhead", option: ["golden spearhead", "glasses"]
  },
  questionFour = {
    question: " When did Senku realise that the Earth's axis has shifted? ", answer: "nothern star", option: ["nothern star", "wrong calculation"]
  },
  questionFive = {
    question: "Where did they find iron ores?  ", answer: "river", option: ["river", "chrome's storage"]
  },
  questionSix = {
    question: "They used silver spearhead to watch out for what? ", answer: "sulfuric acid", option: ["boric acid", "sulfuric acid"]
  },
  questionSeven = {
    question: "Where was Astronaut's recording made up of?  ", answer: "glass", option: ["glass", "vinyl record"]
  },
  questionEight = {
    question: "Why Senku couldn't correctly pinpoint the city location with his device?  ", answer: "earth's axis", option: ["earth's axis", "wrong calculation"]
  }

]

//  for (let i = 0 ; i < questions.length; i++){
//    let askingQ = questions[i];
//    play(askingQ.question, askingQ.answer, askingQ.option);
//  }


//different answer - 
 if(readlineSync.keyInYN("Do you wanna start? press y ")) {

  for (let i =0 ; i < questions.length ;i++) {
    let askingQ = questions[i];
    if (i <= 4 )  {
     play(questionAsked(askingQ.question), askingQ.answer,askingQ.option);
       
    }
     else if (i > 4 || i < questions.length) { if (score >= 4 ) {
if (i < 6){
   log(highestScorer("you have qualified for level 2"));
 log("-------------")
 log("-------------")
}
play(questionAsked(askingQ.question), askingQ.answer,askingQ.option);
}
      else {
 var stars = "";
 for (let j = 0; j < i; j++) {
  log(highestScorer("*-*\t".repeat(j)));}
  log(highestScorer("Try luck next time for level 2"));
 }
}
else {
 log(highestScorer("Your Final point is " + score));

}
 
  } } else {
    log(highestScorer("Okay ! but do try me in freetime"));
  }

log(scoreNumber("Your Final point is " + score));


// adding the highest scorer on board.


log("---------");
var highestScore = {
  name: "Anjel",
  score: 5
}
if (score >= 6) {
  log(highestScorer("You have beaten the highest score"));
  log(highestScorer("For naming your name here SEND me the SCREENSHOT"));

} else {
  log(highestScorer("The highest score is " + highestScore.score + " by " + highestScore.name));
}
//to give the option via line recreate.