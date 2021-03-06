const question = document.getElementById('question-text');
const choices = Array.from(document.getElementsByClassName('answer'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
var x = document.getElementsByClassName('container');
var y = document.getElementsByClassName('start-screen');
var timer = document.getElementById('hud');
var endText = document.getElementById('end-text');
var end = document.getElementById('end');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch('questions.json')
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    console.log(loadedQuestions.results);
    questions = loadedQuestions.results.map( loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
      answerChoices.splice(formattedQuestion.answer - 1, 0,
      loadedQuestion.correct_answer);

      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });

      return formattedQuestion;
    })
    startGame();
  })
  .catch(err => {
    console.log('There has been an error!');
  });

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

mainMenu = () => {
  y[0].style.display = "block";
  end.style.display = "none";
  scoreText.innerText = "0";
  questionCounterText.innerText = `1/${MAX_QUESTIONS}`;
  startGame();
};

beforeGame = () => {
  setTimeout (() => {
    x[0].style.display = "block";
    timer.style.display = "block";
    y[0].style.display = "none";
  }, 100);
};

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [... questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    end.style.display = 'block';
    x[0].style.display = 'none';
    y[0].style.display = 'none';
    timer.style.display = 'none';

    if (scoreText.innerText >= '70') {
      endText.innerText = 'You Passed! Your score was ' + scoreText.innerText + '%';
    }
    else {
      endText.innerText = 'You Failed. Your score was ' + scoreText.innerText + '%';
    }

  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`
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

    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    if (classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout (() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
})

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}
