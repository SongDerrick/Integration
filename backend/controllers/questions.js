
const questions = require('../data/data.json')

exports.getQuestionData = (req, res, next) => {
    console.log(questions)
    res.send(questions)
} // Function 1 : GET Question Data API
