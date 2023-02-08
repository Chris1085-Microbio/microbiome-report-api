const { log } = require('console');
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

const calBloodPages = (bloodData, sampleInfoFile, jsonFile) => {
  let bloodPages = 2;
  bloodPages = bloodData;

  const sampleData = require(`../json/${sampleInfoFile}.json`);
  const filename = jsonFile.split('/').pop().replace(/.json/, '');
  const { Sample: sampleId } = sampleData.find((item) => {
    return item.FileName === filename;
  });

  const idArray = bloodData.map((data) => {
    return data.id;
  });

  let idCounts = {};

  idArray.forEach((x) => {
    idCounts[x] = (idCounts[x] || 0) + 1;
  });

  bloodPages = idCounts[sampleId] < 24 ? 1 : 2;

  return { bloodPages };
};

const calcBloodTemplate = (jsonFilename, bloodData) => {
  let bloodTemplate = ``;

  bloodDataFiltered = bloodData.filter((data) => {
    return data.id === jsonFilename;
  });

  // console.log(bloodDataFiltered);

  let title = '';
  let tempTitle = 'tempTitle';
  let itemCounts = {};

  bloodDataFiltered.forEach((x) => {
    itemCounts[x.riskItem] = (itemCounts[x.riskItem] || 0) + 1;
  });

  let sameItemCount = 0;
  bloodDataFiltered.forEach((data) => {
    const warning = data.warnings.toUpperCase();
    let isDanger = '';

    if (tempTitle === data.riskItem) {
      title = '';
      sameItemCount += 1;
    } else {
      title = data.riskItem;
      tempTitle = data.riskItem;
      sameItemCount = 1;
    }

    if (warning === 'Y') {
      isDanger = 'text-danger';
    }

    if (sameItemCount === 1) {
      bloodTemplate += `
        <tr>
          <td rowspan="${itemCounts[title]}" class="text-center">${title}</td>
          <td>${data.checkitem}</td>
          <td class="text-center ${isDanger}">${data.result}</td>
          <td class="text-center">${data.reference}</td>
          <td class="text-center">${data.unit}</td>
        </tr>
    `;
    } else {
      bloodTemplate += `
        <tr>
          <td>${data.checkitem}</td>
          <td class="text-center ${isDanger}">${data.result}</td>
          <td class="text-center">${data.reference}</td>
          <td class="text-center">${data.unit}</td>
        </tr>
    `;
    }
  });
  return { bloodTemplate };
};

module.exports = { getNewPages, calBloodPages, calcBloodTemplate };
