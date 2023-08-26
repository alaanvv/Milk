const Sy = require('../syntax')

module.exports = args => {
  const plain = args.join(' ')
  if (!Sy.set(plain)) throw 'syntax'

  const name = args[0]
  if (!Sy.varName(plain)) throw 'naming'
  let value = args[2]
  if (!Sy.num(plain)) throw 'value'
  value = `0x${value.toString(16)}`

  const data = `${name}: .word ${value}`

  return { data }
}