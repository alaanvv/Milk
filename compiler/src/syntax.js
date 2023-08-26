class Syntax {
  static set = v => /\w = .*?$/.test(v)
  static varName = v => /^(?![0-9]).+$/.test(v)
  static num = v => /[0-9]+/.test(v)
}

module.exports = Syntax