const Sy = require('../syntax')

module.exports = (asm, ctx) => {
  if (!Sy.set(ctx.line)) ctx.err('syntax')

  const name = ctx.args[0]
  if (!Sy.varName(ctx.line)) ctx.err('naming')
  let value = ctx.args[2]
  if (!Sy.num(ctx.line)) ctx.err('value')
  value = `0x${value.toString(16)}`
  const data = `${name}: .word ${value}`

  asm.insData(data)
}