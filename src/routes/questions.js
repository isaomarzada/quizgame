const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");

router.get("/questions", topicController.startGame);
router.get("/questions", topicController.getNewQuestion);