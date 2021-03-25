const PageLayout = require('./pagelayout.js')
const List = require('./list.js')
const rootUrl = require('../util/rooturl.js')

// INDEX WITH ALL IMAGES
function Index(files) {
  const content = `
    <h1><a href="${rootUrl}">PRINTS</a></h1>
    ${List(files)}
  `
  return PageLayout(content)
}

module.exports = Index;
