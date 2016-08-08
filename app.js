document.write('The current version of js is' + process.version)

var fs = require('fs')

var contents = fs.readFileSync('app.js')
alert(contents)
