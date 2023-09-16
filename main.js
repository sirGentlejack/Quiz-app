console.log('Quiz application!');
var questions = [{
  question: "what does it mean to indemnify?",
  choices: ["baby","infact","kit","pay"],
  correctAnswer: 3
}, {
  question: "I am ___ to school",
  choices: ["go","goes","going","gone"],
  correctAnswer: 2
}, {
  question: "I will ____ there tomoro",
  choices: ["goes","be","kit","pay"],
  correctAnswer: 1
}, {
  question: "where did ____meet her",
  choices: ["john","infact","him","pay"],
  correctAnswer: 0
}, {
  question: "i ____ a car",
  choices: ["fool","flex","bought","pay"],
  correctAnswer: 2
}, {
  question: "YOLO, you___ ____ once",
  choices: ["only live","infact only","kit cat","pay live"],
  correctAnswer: 0
}, {
  question: "phillip is a big ___",
  choices: ["seed","down","kat","boy"],
  correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function (){
  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();
  $(this).find(".nextButton").on("click", function () {
    if(!quizOver) {
      value = $("input[type='radio']:checked").val();
      if(value == undefined) {
        $(document).find(".quizMessage").text("please select an answer");
        $(document).find(".quizMessage").Show();
      } else {
        $(document).find(".quizMessage").hide();
        if (value == question[currentQuestion].correctAnswer){
          correctAnswers++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length){
          displayCurrentQuestion();
        }else{
          displayScore();
          $(document).find(".neztButton").text("playAgain");
          quizOver = true;
        }
      }
    }else{}
  })
})
