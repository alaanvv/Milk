const fs = require('fs')

class AssemblyCode {
  constructor() {
    this.dataArea = ['.data']
    this.textArea = ['.text']
  }

  insData(line) { this.dataArea.push(line) }
  insText(line) { this.textArea.push(line) }

  write(fileName) {
    const rawFile = `${this.dataArea.join('\n')} \n\n ${this.textArea.join('\n')}`
    
    fs.writeFileSync(`${fileName}.s`, rawFile)
  }
}

module.exports = AssemblyCode