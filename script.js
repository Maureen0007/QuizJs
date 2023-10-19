const questions = [
    {
        question: "Which is the largest continent in the world?",
        answers:[
            {text: "Africa", correct: false},
            {text: "Asia", correct: true},
            {text: "Europe", correct: false},
            {text: "Australia", correct: false},

        ]
    },
    {
        question: "Which of the following programming languages is not an OOP?",
        answers: [
            {text: "Ruby", correct: false},
            {text: "java", correct: false},
            {text: "C", correct: true},
            {text: "javacsript", correct: false},
        ]
    },
    {
        question: "Which of the following  is not a characteristic of an OOPL?",
        answers: [
            {text: "Polymorphism", correct: false},
            {text: "Attachment", correct: true},
            {text: "Inheritance", correct: false},
            {text: "Abstraction", correct: false},
        ]
    },
    {
        question: "Which of the following  is not a programming language?",
        answers: [
            {text: "PHP", correct: false},
            {text: "C++", correct: false},
            {text: "Ruby", correct: false},
            {text: "Bootstrap", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
});
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();