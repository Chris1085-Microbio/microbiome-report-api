const fs = require('fs');

const getNewPages = (data, dynamicText) => {
  let newPages = 0;
  let indicesText = '';
  let bodyFunctionText = '';
  const pageLine = 25;
  const firstLineLen = 26;
  const lineTextLen = 27;
  const initIndexLen = 25;
  const initBodyLen = 12;
  let flag = 0;
  let tempName;
  let tempScore = 100;

  Object.keys(data.indices).forEach((index) => {
    if (parseInt(data.indices[index]) < 31) {
      flag = 1;
      indicesText += dynamicText.indices[index];
    }

    if (parseInt(data.indices[index]) < tempScore) {
      tempName = index;
      tempScore = data.indices[index];
    }
  });

  indicesText = flag == 0 ? dynamicText.indices.stable : indicesText;
  flag = 0;
  indicesText = indicesText.slice(0, -1) + '。';

  const { Immune, Metabolism, PDAD, Lung, Intestine, Liver, Obesity, Stomach, HeartVessel, Kidney } = data;
  const bodyFunction = { Immune, Metabolism, PDAD, Lung, Intestine, Liver, Obesity, Stomach, HeartVessel, Kidney };

  Object.keys(bodyFunction).forEach((index) => {
    if (parseInt(bodyFunction[index].score) < 30) {
      flag = 1;
      bodyFunctionText += dynamicText.bodyFunction[index];
    }
  });

  bodyFunctionText = flag == 0 ? dynamicText.bodyFunction.stable : bodyFunctionText;
  bodyFunctionText = bodyFunctionText.slice(0, -1) + '。';

  const thirdPartInsertText = dynamicText.productDescription[dynamicText.textType[tempName]];

  const lines =
    Math.ceil((indicesText.length + initIndexLen - firstLineLen) / lineTextLen) +
    Math.ceil((bodyFunctionText.length + initBodyLen - firstLineLen) / lineTextLen) +
    Math.ceil((thirdPartInsertText.length - firstLineLen) / lineTextLen) +
    3;

  newPages = Math.ceil(lines / pageLine) - 1;

  const productDescription = thirdPartInsertText;

  return { newPages, indicesText, bodyFunctionText, productDescription };
};

module.exports = { getNewPages };
