const PageLayout = require('./pagelayout.js')
const List = require('./list.js')
const Index = require('./index.js')
const getName = require('../util/getname.js')
const rootUrl = require('../util/rooturl.js')

// SINGLE IMAGE WITH NAVIGATION
function Single(file, files) {
  const i = files.indexOf(file)
  const nextFile = files[(i+1) % files.length]
  const prevFile = files[(files.length + (i-1)) % files.length]
  const content = `
    <div class="navigation">
      <a href="${rootUrl}p/${getName(prevFile)}"><</a>
      <div class="single-display">
        <a href="${rootUrl}media/${file}" target="_blank">
          <img src="${rootUrl}media/${file}" alt="${getName(file)}" />
        </a>
      </div>
      <a href="${rootUrl}p/${getName(nextFile)}">></a>
    </div>
    <h2>${file}</h2>
    ${Index(files)}
  `
  return PageLayout(content)
}

module.exports = Single;
