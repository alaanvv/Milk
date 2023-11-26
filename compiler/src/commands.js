module.exports = (command, asm, ctx) => {
  return require(`./commands/${command}`)(asm, ctx)
}