const question = document.getElementsByClassName('question-text');
const choices = Array.from(document.getElementsByClassName('answer'));


module.exports = {
  /*let currentQuestion = {};
  let acceptingAnswers = true;
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
      answer: 1
    },
    {
      question: "How many super bowl wins does the Minnesota Vikings have?",
      choice1: "1",
      choice2: "3",
      choice3: "0",
      choice4: "5",
      answer: 3
    }
  ];*/

  startGame: () => {
    let currentQuestion = {};
    let questionCounter = 0;
    let score = 0;
    let acceptingAnswers = true;
    availableQuestions = [... questions];
    console.log(availableQuestions);
    getNewQuestion();
  },

  getNewQuestion: () => {
    let questionCounter = 0;
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
  }
}
