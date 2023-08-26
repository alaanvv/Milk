module.exports = (command, args) => {
  return require(`./commands/${command}`)(args)
}