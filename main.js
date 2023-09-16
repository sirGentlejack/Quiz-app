console.log('Quiz application!');

var questions = [{
  question: "what does it mean to indemnify?",
  choices: ["baby", "infact", "kit", "pay"],
  correctAnswer: 3
}, {
  question: "I am ___ to school",
  choices: ["go", "goes", "going", "gone"],
  correctAnswer: 2
}, {
  question: "I will ____ there tomoro",
  choices: ["goes", "be", "kit", "pay"],
  correctAnswer: 1
}, {
  question: "where did ____meet her",
  choices: ["john", "infact", "him", "pay"],
  correctAnswer: 0
}, {
  question: "i ____ a car",
  choices: ["fool", "flex", "bought", "pay"],
  correctAnswer: 2
}, {
  question: "YOLO, you___ ____ once",
  choices: ["only live", "infact only", "kit cat", "pay live"],
  correctAnswer: 0
}, {
  question: "phillip is a big ___",
  choices: ["seed", "down", "kat", "boy"],
  correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;
var correctAnswers = 0;

$(document).ready(function() {
  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();
  $(this).find(".nextButton").on("click", function() {
      if (!quizOver) {
        value = $("input[type='radio']:checked").val();
        if (value == undefined) {
          $(document).find(".quizMessage").text("please select an answer");
          
        $(document).find(".quizMessage").show();

      } else {
        $(document).find(".quizMessage").hide();
        if (value == questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
        } else {
          displayScore();
          $(document).find(".nextButton").text("playAgain");
          quizOver = true;
        }
      }
      }else {
        quizOver = false;
        $(document).find(".nextButton").text("Next Question");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
      }
  
  });
});


var question = questions[currentQuestion].question;
var questionClass = $(document).find(".quizContainer > .question");
var choiceList = $(document).find(".quizContainer > .choiceList");
var numChoices = questions[currentQuestion].choices.length;

// set the questionClass text to the current question
$(questionClass).text(question);

// remove all current <li> elements (if any)
$(choiceList).find("li").remove();

var choice;
for (i = 0; i < numChoices; i++) {
  choice = questions[currentQuestion].choices[i];
  $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
}

function resetQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  hideScore();
}

function displayScore() {
  $(document).find(".quizContainer > .result").text("you scored:" + correctAnswers + " out of:" + questions.length);
  $(document).find(".quizContainer > .result").show();
}

function hideScore() {
  $(document).find(".result").hide();
}

if (currentQuestion === questions.length) {
  displayScore();
  // Other code for when the quiz is over
}


// to display the currnt question
function displayCurrentQuestion() {
  var question = questions[currentQuestion].question;
  var questionClass = $(document).find(".quizContainer > .question");
  var choiceList = $(document).find(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  // Set the questionClass text to the current question
  $(questionClass).text(question);

  // Remove all current <li> elements (if any)
  $(choiceList).find("li").remove();

  var choice;
  for (var i = 0; i < numChoices; i++) {
    choice = questions[currentQuestion].choices[i];
    $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
  }
}