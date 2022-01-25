const fs = require('fs')

const getNewPages = (data, dynamicText) => {
  let newPages = 0
  let indicesText = ''
  let bodyFunctionText = ''
  const pageLine = 20
  const lineTextLen = 26
  const staticIndexLen = 25
  const staticBodyLen = 12

  Object.keys(data.indices).forEach((index) => {
    if (parseInt(data.indices[index]) <= 31) {
      indicesText += dynamicText.indices[index]
    }
  })

  Object.keys(data.bodyFunction).forEach((index) => {
    if (parseInt(data.bodyFunction[index].score) < 31) {
      bodyFunctionText += dynamicText.bodyFunction[index]
    }
  })

  const lines =
    Math.ceil((indicesText.length + staticIndexLen) / lineTextLen) +
    Math.ceil((bodyFunctionText.length + staticBodyLen) / lineTextLen)

  newPages = Math.ceil(lines / pageLine) - 1

  return { newPages, indicesText, bodyFunctionText }
}

module.exports = { getNewPages }
