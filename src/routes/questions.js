const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questionsController");

router.get("/questions", questionsController.startGame);
router.get("/questions", questionsController.getNewQuestion);
