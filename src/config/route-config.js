const staticRoutes = require("../routes/static");
const questionRoutes = require("../routes/questions");

module.exports = {
  init(app){
    app.use(staticRoutes);
    app.use(questionRoutes);
  }
}
