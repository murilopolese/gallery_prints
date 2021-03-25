function isFile(f) {
  return f.toLowerCase().indexOf('.jpg') !== -1
      || f.toLowerCase().indexOf('.png') !== -1
}

module.exports = isFile
