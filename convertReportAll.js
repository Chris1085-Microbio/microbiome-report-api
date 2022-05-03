const fs = require('fs');
const moment = require('moment');
const headerHTML = require('./Components/headerPage');
const footerHTML = require('./Components/footerPage');
const previewInfo = require('./Components/previewInfo');
const gut = require('./Components/gutAnalysisPage');
const core = require('./Components/coreIndex');
const bloodTest = require('./Components/bloodTest');
const bodyFunction = require('./Components/bodyFunction');
const appendix = require('./Components/appendix');
const computed = require('./Components/computed');
const process = require('process');
const args = process.argv;
const samplename = args[2];
const jsonFile = args[2];
const date = moment().format('YYYY-MM-DD HH:mm:ss');
const curYear = moment().year();

try {
  const data = JSON.parse(fs.readFileSync(`${jsonFile}`));
  const dynamicText = JSON.parse(fs.readFileSync('./json/dynamicText.json'));
  const { newPages } = computed.getNewPages(data, dynamicText);

  let template =
    headerHTML +
    previewInfo.previewText +
    previewInfo.customerInfo(data, jsonFile) +
    previewInfo.categoryText +
    gut.pagination +
    gut.summary(data) +
    gut.healthGuides(data, dynamicText) +
    gut.biomeDistribution(data, dynamicText, 8 + newPages) +
    gut.healthIndex(data, dynamicText, 9 + newPages) +
    gut.fattyAcidSynthesis(data, dynamicText, 10 + newPages) +
    gut.enterotyping(data, dynamicText, 11 + newPages) +
    gut.biomeSummary(data, 12 + newPages) +
    core.pagination(13 + newPages) +
    core.summary(data, dynamicText, 14 + newPages) +
    core.index1(data, dynamicText, 15 + newPages) +
    core.index2(data, dynamicText, 16 + newPages) +
    core.index3(data, dynamicText, 17 + newPages) +
    bloodTest.pagination(18 + newPages) +
    bloodTest.table1(19 + newPages) +
    bloodTest.table2(20 + newPages) +
    bodyFunction.pagination(21 + newPages) +
    bodyFunction.PDAD(data.PDAD, 22 + newPages) +
    bodyFunction.cvd(data.HeartVessel, 23 + newPages) +
    bodyFunction.lung(data.Lung, 24 + newPages) +
    bodyFunction.nafld(data.Liver, 25 + newPages) +
    bodyFunction.ckd(data.Kidney, 26 + newPages) +
    bodyFunction.gastitis(data.Stomach, 27 + newPages) +
    bodyFunction.colitis(data.Intestine, 28 + newPages) +
    bodyFunction.immune(data.Immune, 29 + newPages) +
    bodyFunction.obesity(data.Obesity, 30 + newPages) +
    bodyFunction.metabolism(data.Metabolism, 31 + newPages) +
    appendix.pagination(32 + newPages) +
    appendix.gutBiome(33 + newPages) +
    appendix.howToGutBiome(34 + newPages) +
    appendix.bloodTestMeaning(35 + newPages) +
    appendix.reference(36 + newPages) +
    appendix.freeDuty(37 + newPages) +
    footerHTML;

  fs.writeFileSync('./report.html', template);
  // fs.writeFileSync(`./reports/${curYear}/html/${samplename}.html`, template)

  console.log(`[${date}] OK! Template File converted to ./report.html!`);
} catch (err) {
  console.error(err);
}
