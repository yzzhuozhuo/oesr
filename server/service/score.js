let ScoreModel = require('../models/score')

exports.getScoreList = function (scoreId, themeId, studentId) {
  let findConditions = {}
  if (scoreId) {
    findConditions._id = scoreId
    return ScoreModel.findById(findConditions)
  }
  if (themeId) {
    findConditions.themeId = themeId
    return ScoreModel.find(findConditions).sort({ totalScore: -1 }).limit(6)
  }
  if (studentId) {
    findConditions.studentId = studentId
    return ScoreModel.find(findConditions).sort({ createdAt: -1 })
  }
}

exports.addScoreList = function (data) {
  let newData = data
  let themeId = data.themeId
  let studentId = data.studentId
  let findConditions = {
    themeId,
    studentId
  }
  return ScoreModel.find(findConditions).then((data) => {
    if (data) {
      return ScoreModel.findOneAndUpdate(
        findConditions, 
      {
        $set: {
          totalScore: newData.totalScore
        }
      }, {
        upsert: true,
        new: true
      })
    } else {
      return ScoreModel.insertMany(data)
    }
  })
}
