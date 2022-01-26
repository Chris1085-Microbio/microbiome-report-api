const fs = require('fs')

const getNewPages = (data, dynamicText) => {
  let newPages = 0
  let indicesText = ''
  let bodyFunctionText = ''
  const pageLine = 25
  const firstLineLen = 26
  const lineTextLen = 27
  const initIndexLen = 25
  const initBodyLen = 12
  let flag = 0

  Object.keys(data.indices).forEach((index) => {
    if (parseInt(data.indices[index]) < 31) {
      flag = 1
      indicesText += dynamicText.indices[index]
    }
  })

  indicesText = flag == 0 ? dynamicText.indices.stable : indicesText
  flag = 0
  indicesText = indicesText.slice(0, -1) + '。'

  Object.keys(data.bodyFunction).forEach((index) => {
    if (parseInt(data.bodyFunction[index].score) < 30) {
      flag = 1
      bodyFunctionText += dynamicText.bodyFunction[index]
    }
  })

  bodyFunctionText = flag == 0 ? dynamicText.bodyFunction.stable : bodyFunctionText
  bodyFunctionText = bodyFunctionText.slice(0, -1) + '。'

  // TODO 這邊要置換dynamicText.productDescription.BL.length字數限制，第三段文字字數
  const lines =
    Math.ceil((indicesText.length + initIndexLen - firstLineLen) / lineTextLen) +
    Math.ceil((bodyFunctionText.length + initBodyLen - firstLineLen) / lineTextLen) +
    Math.ceil((dynamicText.productDescription.BL.length - firstLineLen) / lineTextLen) +
    3

  newPages = Math.ceil(lines / pageLine) - 1

  const productDescription = dynamicText.productDescription.BL

  return { newPages, indicesText, bodyFunctionText, productDescription }
}

module.exports = { getNewPages }
