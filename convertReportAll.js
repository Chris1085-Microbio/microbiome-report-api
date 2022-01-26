const fs = require('fs')
const headerHTML = require('./Components/headerPage')
const footerHTML = require('./Components/footerPage')
const previewInfo = require('./Components/previewInfo')
const gut = require('./Components/gutAnalysisPage')
const core = require('./Components/coreIndex')
const appendix = require('./Components/appendix')
const computed = require('./Components/computed')

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
    appendix.pagination(32 + newPages) +
    appendix.gutBiome(33 + newPages) +
    appendix.howToGutBiome(34 + newPages) +
    appendix.bloodTestMeaning(35 + newPages) +
    appendix.reference(36 + newPages) +
    appendix.freeDuty(37 + newPages) +
    footerHTML

  fs.writeFileSync('./report.html', template)
} catch (err) {
  console.error(err)
}
