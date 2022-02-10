const fs = require('fs')
const moment = require('moment')
const headerHTML = require('./Components/headerPage')
const footerHTML = require('./Components/footerPage')
const previewInfo = require('./Components/previewInfo')
const gut = require('./Components/gutAnalysisPage')
const core = require('./Components/coreIndex')
const bloodTest = require('./Components/bloodTest')
const bodyFunction = require('./Components/bodyFunction')
const appendix = require('./Components/appendix')
const computed = require('./Components/computed')
const date = moment().format('YYYY-MM-DD HH:mm:ss')

try {
  const data = JSON.parse(fs.readFileSync('./json/All.json'))
  const dynamicText = JSON.parse(fs.readFileSync('./json/dynamicText.json'))
  const { newPages } = computed.getNewPages(data, dynamicText)

  let template =
    headerHTML +
    previewInfo.previewText +
    previewInfo.customerInfo(data) +
    previewInfo.categoryText +
    gut.pagination +
    gut.summary(data) +
    gut.healthGuides(data, dynamicText) +
    gut.biomeDistribution(data, dynamicText, newPages) +
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
    bodyFunction.PDAD(data.bodyFunction.PDAD, 22 + newPages) +
    bodyFunction.cvd(data.bodyFunction.cvd, 23 + newPages) +
    bodyFunction.lung(data.bodyFunction.lung, 24 + newPages) +
    bodyFunction.nafld(data.bodyFunction.nafld, 25 + newPages) +
    bodyFunction.ckd(data.bodyFunction.ckd, 26 + newPages) +
    bodyFunction.gastitis(data.bodyFunction.gastitis, 27 + newPages) +
    bodyFunction.colitis(data.bodyFunction.colitis, 28 + newPages) +
    bodyFunction.immune(data.bodyFunction.immune, 29 + newPages) +
    bodyFunction.obesity(data.bodyFunction.obesity, 30 + newPages) +
    bodyFunction.metabolism(data.bodyFunction.metabolism, 31 + newPages) +
    appendix.pagination(32 + newPages) +
    appendix.gutBiome(33 + newPages) +
    appendix.howToGutBiome(34 + newPages) +
    appendix.bloodTestMeaning(35 + newPages) +
    appendix.reference(36 + newPages) +
    appendix.freeDuty(37 + newPages) +
    footerHTML

  fs.writeFileSync('./report.html', template)

  console.log(`[${date}] OK! Template File converted to ./report.html!`)
} catch (err) {
  console.error(err)
}
