
module.exports = {
  const thingies = (function () {
  const questions = {
    question1: {
      question: "How many super bowl wins does the Minnesota Vikings have?",
      answer: 'big fat zero because they stink',
      1: "1",
      2: "3",
      3: "big fat zero because they stink",
      4: "5"
    },
    question2: {
      question: "How many times has Aaron Rodgers been relaxed?",
      answer: 'psh, like always',
      1: "3",
      2: "psh like always",
      3: "0",
      4: "5"
    }
  };

  function getResult(currentQuestion, selection) {
    const query = questions[currentQuestion];
    const { question, answer, ...rest } = query;
    const options = Object.values(rest);

    if (options.includes(selection)) {
      const isCorrect = answer === selection ? true : false;
      return { isCorrect, question, currentQuestion, selection };
    } else {
      return { currentQuestion, selection, error: 'somethig went wrong' }
    }
  };

  return { getResult };

})();
}
