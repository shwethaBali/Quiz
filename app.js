function populate() {
    if(quiz.isEnded()){
        showScores();
    }else{
        //showQuestion
        var element = document.getElementById("question");
        // console.log(element);
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choice;
        // console.log(choices);
        for( var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick =function () {
        quiz.guess(guess);
        populate();
    }
};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    // console.log(currentQuestionNumber);
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of" + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    var element =document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Which one is not an OOP language?", ["Java","C#","C++","C"],"C"),
    new Question("Which language is used for styling web pages?", ["HTML","CSS","PHP","XML"],"CSS"),
    new Question("There are ____ main components of OOP", ["1","6","3","5"],"6"),
    new Question("Which language is used for web apps?", ["PHP","PYTHON","JavaScript","All"],"All"),
    new Question("MVC is a _____", ["Language","Library","Framework","All"],"Framework")
];
var quiz = new Quiz(questions);
populate();