const fs = require('fs')
const path = require('path')

fs.readFile(
  path.join(__dirname, './contact.json'), 
  'utf8', 
  (err, data) => console.log(data || err)
)
