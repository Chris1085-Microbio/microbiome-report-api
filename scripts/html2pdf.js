const jsdom = require('jsdom')
const dom = new jsdom.JSDOM('')
const $ = require('jquery')(dom.window)
const fs = require('fs')
const moment = require('moment')
const puppeteer = require('puppeteer')
const process = require('process')
const args = process.argv
const samplename = args[2]
const date = moment().format('YYYY-MM-DD HH:mm:ss')
const curYear = moment().year()
const dir = `./reports/${curYear}/pdf` // directory to check if exists

// check if file exists
if (typeof args[2] === 'undefined') {
  console.log(`[${date}] ERR! Samplename not existed. exit.`)
  exit
} else if (fs.existsSync(`${dir}/example_${samplename}.pdf`)) {
  console.log(`[${date}] example_${samplename}.pdf exists. Skip html2pdf process.`)
  exit
} else {
  html2pdf()
}

async function html2pdf() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  try {
    await page.goto('http://127.0.0.1:5500/report.html', {
      waitUntil: 'networkidle2'
    })

    await page.pdf({
      path: `${dir}/${samplename}.pdf`,
      format: 'a4',
      printBackground: true,
      preferCSSPageSize: true
    })

    console.log(`[${date}] OK! ${samplename} html2pdf successed! See PDF file in ${dir}/${samplename}.pdf`)
  } catch (error) {
    console.log(`[${date}]` + ' ERR! Cannot connect localhost. Check Apache and Internet status.')
    console.log(error)
  }

  await browser.close()
}
