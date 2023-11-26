// Libs
const AssemblyCode = require('./src/genAsm')
const error = require('./src/error')
const read = require('./src/readMi')
const run = require('./src/commands')

// Setup
const asm = new AssemblyCode()
const lines = read('./code.mi')
const commands = ['set']

// ---
for (i in lines) {
  const line = lines[i]
  const lineNumber = Number(i) + 1
  const command = line[0]
  const args = line.slice(1)

  if (!commands.includes(command)) error('keyword', lineNumber, line)

  run(command, asm, {args, line: line.join(' '), err: type => error(type, lineNumber, line)})
}

asm.write('code')