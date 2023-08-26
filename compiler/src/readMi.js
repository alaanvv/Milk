const fs = require('fs')

module.exports = file => {
  const program = fs.readFileSync(file, 'utf-8')
    .toLowerCase()
  const rawLines = program.split('\n')
  const lines = rawLines.map(line => {
    line = line.replace(/\/\/.*/, '')
    line = line.replace('\r', '')
    line = line.split(' ')
    return line
  })

  return lines
}