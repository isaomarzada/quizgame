const question = document.getElementById('question-text');
const choices = Array.from(document.getElementsByClassName('answer'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Who is the greatest football player of all time?",
    choice1: "Tom Brady",
    choice2: "Adrian Peterson",
    choice3: "Ray Lewis",
    choice4: "Peyton Manning",
    answer: 1
  },
  {
    question: "Who is the last runningback to rush for 2000 yards?",
    choice1: "Adrian Peterson",
    choice2: "Barry Sanders",
    choice3: "Emmitt Smith",
    choice4: "Joe Montana",
    answer: 2
  },
  {
    question: "How many super bowl wins does the Minnesota Vikings have?",
    choice1: "1",
    choice2: "3",
    choice3: "0",
    choice4: "5",
    answer: 4
  }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

beforeGame = () => {
  var x = document.getElementsByClassName('container');
  var y = document.getElementsByClassName('start-screen');
  x[0].style.display = "block";
  y[0].style.display = "none";
};

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [... questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number]
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    getNewQuestion();
  })
})

startGame();
