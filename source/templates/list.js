const getName = require('../util/getname.js')
const rootUrl = require('../util/rooturl.js')

// UNORDERED LIST OF IMAGES
function List(files) {
  return `
    <ul>
      ${files.map(Item).join('')}
    </ul>
  `
}

// UNORDERED LIST ITEM
function Item(file) {
  let folderName = getName(file)
  return `
    <li>
      <a href="${rootUrl}p/${folderName}">
        <img src="${rootUrl}media/thumb_${file}" alt="${folderName}" />
        ${folderName}
      </a>
    </li>
  `
}

module.exports = List;
