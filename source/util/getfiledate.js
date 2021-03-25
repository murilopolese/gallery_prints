const fs = require('fs')

function getCreatedDate(file) {
  let stats = fs.statSync(file)
  return stats.birthtime
}

module.exports = getCreatedDate
