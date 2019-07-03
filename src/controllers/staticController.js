module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "QuizGame"});
    res.render("static/index", {questionText: "Question" });
  }
}
