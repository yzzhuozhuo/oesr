const campusDateService = require('../service/campusDate')

exports.addCampusDate = async function (req, res) {
  try {
    const data = await campusDateService.addCampusDate(req.body)
    res.send({
      code: '200', data
    })
  } catch (error) {
    console.error(error)
  }
}

exports.getCampusDate = async function (req, res) {
  try {
    const data = await campusDateService.getCampusDate()
    res.send({
      code: '200', data
    })
  } catch (error) {
    console.error(error)
  }
}

exports.getCampusDateById = async function (req, res) {
  const { id } = req.query
  try {
    const data = await campusDateService.getCampusDateById(id)
    res.send({
      code: '200', data
    })
  } catch (error) {
    console.error(error)
  }
}
