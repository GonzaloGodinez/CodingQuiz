var questionElement = document.getElementById("questions");
var startButton = document.getElementById("start-btn");
var AdoneScore = document.getElementById("AdoneScore")
var CorrectScore = document.getElementById("CorrectScore")
var Quiz = document.querySelectorAll(".Quiz")
var QuizIndex = 0;
var app = document.querySelector(".app")
var ADone = document.querySelector(".Adone")
var time = document.getElementById("time")
var timeleft = 75
var clockid = 0
var CorrectScores = 0
var IncorrectScore = 0
// Define 5 questions array
var questions = [{
    title: "Q1",
    choices: ["c1", "c2", "c3", "c4"],
    answer: "c2"
}, {
    title: "Q2",
    choices: ["c1", "c2", "c3", "c4"],
    answer: "c2"
}, {
    title: "Q3",
    choices: ["c1", "c2", "c3", "c4"],
    answer: "c3"
}, {
    title: "Q4",
    choices: ["c1", "c2", "c3", "c4"],
    answer: "c3"
}, {
    title: "Q5",
    choices: ["c1", "c2", "c3", "c4"],
    answer: "c1"
}
]
// Call function to perform questions routine on running clock!
function startQuiz() {
    app.style.display = "none"
    Quiz[QuizIndex].style.display = "block"
    clockid = setInterval(startclock, 1000)
}
function startclock() {
    time.textContent = timeleft--
}
startButton.addEventListener("click", startQuiz)
// Add scores 
function startAlldone() {
    var initials = document.querySelector("#initials").value
    console.log("initials", initials)
    // console.log("value", .value)
    document.querySelector(".ADone").classList.add("hide")
    document.querySelector(".Scores").classList.remove("hide")
    // add scores
    setInterval.display = "square"
}
// create another function to keep the score from users
// function startclock() {
// time.textContent = timeleft-- 
// } I am missing play again loop!

AdoneScore.addEventListener("click", startAlldone)
// Tally correct answers
function CorrectAnswer(event) {
    console.log(event.target.value)
    if (event.target.value === questions[QuizIndex].answer) {
        console.log("CorrectAnswer")
        CorrectScores += 1;
        console.log("CorrectScores", CorrectScores)
    } else {
        console.log("wrong answer")
        IncorrectScore += 1;
        console.log("IncorrectScore", IncorrectScore)
    }
    if (timeleft <= 1){
        console.log("play Again")
        startQuiz()
    }
    Quiz[QuizIndex].style.display = "none";
    QuizIndex++
    if (QuizIndex >= questions.length) {
        // var CorrectScore = document.querySelector("#CorrectScore").value
        document.querySelector(".ADone").classList.remove("hide")
        return
    } else {
        Quiz[QuizIndex].style.display = "block";
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", CorrectScore);
