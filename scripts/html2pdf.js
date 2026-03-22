const fs = require('fs');
const moment = require('moment');
const puppeteer = require('puppeteer');
const process = require('process');
const path = require('path');

const args = process.argv;
const samplename = args[2];
const sampleBaseName = samplename ? path.parse(samplename).name : '';
const date = moment().format('YYYY-MM-DD HH:mm:ss');
const curYear = moment().year();
const dir = `./reports/${curYear}/pdf`;

if (typeof samplename === 'undefined') {
  console.log(`[${date}] ERR! Samplename not existed. exit.`);
  process.exit(1);
}

if (fs.existsSync(`${dir}/${sampleBaseName}.pdf`)) {
  console.log(`[${date}] ${sampleBaseName}.pdf exists. Skip html2pdf process.`);
  process.exit(0);
}

html2pdf();

async function html2pdf() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1
    });

    await page.goto('http://127.0.0.1:3000/report.html', {
      waitUntil: ['load', 'domcontentloaded', 'networkidle0'],
      timeout: 60000
    });

    // await page.emulateMediaType('print');

    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      const images = Array.from(document.images || []);
      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          });
        })
      );
    });

    await page.pdf({
      path: `${dir}/${sampleBaseName}.pdf`,
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    console.log(`[${date}] OK! ${sampleBaseName} html2pdf success! See PDF file in ${dir}/${sampleBaseName}.pdf`);
  } catch (error) {
    console.log(`[${date}] ERR! Cannot generate PDF. Check HTTP service / assets / fonts / images.`);
    console.log(error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}
