module.exports = (type, lineNumber, lineText) => {
  if (Array.isArray(lineText)) lineText = lineText.join(' ')

  const message = `${type.toUpperCase()} ERROR AT LINE ${lineNumber}\n\n${lineText}`
  throw message
}