module.exports = {
  index(req, res, next){
    res.render("static/index", {questionText: "What is the answer to this question?", title: "QuizGame" });
  }
}
