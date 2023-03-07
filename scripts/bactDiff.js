const fs = require('fs');
const process = require('process');
const { log } = require('console');
const args = process.argv;
const indexName = args[2];

testFolder = './compared/';
let goodAbnormal = [];
let goodChanged = [];

let badAbnormal = [];
let badChanged = [];

fs.readdirSync(testFolder).forEach((file) => {
  if (/^GI\d+-\d+-avg/.test(file)) {
    afterFile = file.replace(/avg/i, 'V1');

    const compare1Data = JSON.parse(fs.readFileSync(`${testFolder}${file}`));
    const compare2Data = JSON.parse(fs.readFileSync(`${testFolder}${afterFile}`));
    const compare1Bact = compare1Data[indexName];
    const compare2Bact = compare2Data[indexName];

    // ab2normal;
    compare1Bact.good.forEach((item1) => {
      compare2Bact.good.forEach((item2) => {
        if (item1.name === item2.name) {
          if (item1.status === '偏低') {
            goodAbnormal[item2.name] = (goodAbnormal[item2.name] || 0) + 1;

            if (item2.status === '一般' || item2.status === '偏高') {
              goodChanged[item2.name] = (goodChanged[item2.name] || 0) + 1;
            }
          }
        }
      });
    });

    compare1Bact.bad.forEach((item1) => {
      compare2Bact.bad.forEach((item2) => {
        if (item1.name === item2.name) {
          if (item1.status === '偏高') {
            badAbnormal[item2.name] = (badAbnormal[item2.name] || 0) + 1;

            if (item2.status === '一般' || item2.status === '偏低') {
              badChanged[item2.name] = (badChanged[item2.name] || 0) + 1;
            }
          }
        }
      });
    });

    // normal2ab
    compare1Bact.good.forEach((item1) => {
      compare2Bact.good.forEach((item2) => {
        if (item1.name === item2.name) {
          if (item1.status === '一般' || item1.status === '偏高') {
            goodAbnormal[item2.name] = (goodAbnormal[item2.name] || 0) + 1;

            if (item2.status === '偏低') {
              goodChanged[item2.name] = (goodChanged[item2.name] || 0) + 1;
            }
          }
        }
      });
    });

    compare1Bact.bad.forEach((item1) => {
      compare2Bact.bad.forEach((item2) => {
        if (item1.name === item2.name) {
          if (item1.status === '一般' || item1.status === '偏低') {
            badAbnormal[item2.name] = (badAbnormal[item2.name] || 0) + 1;

            if (item2.status === '偏高') {
              badChanged[item2.name] = (badChanged[item2.name] || 0) + 1;
            }
          }
        }
      });
    });
  }
});
console.log('Good abNormal > normal: ', goodAbnormal, goodChanged);
console.log('Bad abNormal > normal: ', badAbnormal, badChanged);

// if (/[A-Za-z]+Index/.test(indexName)) {
//   console.log(indexName);
// } else {
// }
