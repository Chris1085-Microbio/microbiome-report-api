const jsdom = require('jsdom');
const dom = new jsdom.JSDOM('');
require('jquery')(dom.window);
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const puppeteer = require('puppeteer');

const args = process.argv;
const inputName = args[2];
const date = moment().format('YYYY-MM-DD HH:mm:ss');
const curYear = moment().year();
const dir = `./reports/${curYear}/pdf`;

function ensureOutputDirExists() {
  fs.mkdirSync(dir, { recursive: true });
}

function toSampleBaseName(value) {
  if (!value) return '';
  const base = path.basename(value);
  return base.endsWith('.json') ? base.slice(0, -'.json'.length) : base;
}

if (typeof inputName === 'undefined') {
  console.log(`[${date}] ERR! Samplename not existed. exit.`);
  process.exit(1);
}

ensureOutputDirExists();

const samplename = toSampleBaseName(inputName);
const outputPdfPath = `${dir}/${samplename}.pdf`;

if (fs.existsSync(outputPdfPath)) {
  console.log(`[${date}] ${outputPdfPath} exists. Skip html2pdf process.`);
  process.exit(0);
}

html2pdf();

async function html2pdf() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1
    });

    await page.goto('http://127.0.0.1:3000/', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    await page.emulateMediaType('print');

    await page.pdf({
      path: outputPdfPath,
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    console.log(`[${date}] OK! ${samplename} html2pdf successed! See PDF file in ${outputPdfPath}`);
  } catch (error) {
    console.log(`[${date}] ERR! Cannot connect localhost. Check server status.`);
    console.log(error);
  }

  await browser.close();
}
