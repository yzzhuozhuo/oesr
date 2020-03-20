const ResumeListModel = require('../models/resumeList')

exports.getResumeList = function (companyId, positionId, studentId, searchValue, currentPage, pageNum) {
  let skipCounts = (currentPage - 1) * pageNum
  let findConditions = {}
  if (companyId) findConditions.companyId = companyId
  if (positionId) findConditions.positionId = positionId
  if (studentId) findConditions.studentId = studentId
  if (searchValue) findConditions.positionTitle = searchValue
  if (studentId && positionId) findConditions = {studentId: studentId, positionId: positionId}
  return Promise.all([
    ResumeListModel.find(findConditions).sort({ createdAt: -1 }).skip(skipCounts).limit(pageNum),
    ResumeListModel.find(findConditions).sort({ createdAt: -1 }).count(true)
  ]).then(([data, total]) => {
    return {
      data: data,
      currentPage: currentPage,
      pageNum: pageNum,
      total
    }
  })
}

exports.addResumeList = function (data) {
  return ResumeListModel.insertMany(data)
}