const rootUrl = require('../util/rooturl.js')

// BASE HTML TEMPLATE
function PageLayout(content) {
  return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>PRINTS</title>
        <link rel="stylesheet" href="${rootUrl}theme.css">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `
}

module.exports = PageLayout;
