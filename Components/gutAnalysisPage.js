const computed = require('../Components/computed')

const pagination = `      <!-- p5 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="titleBoxUpper bg-black w-100"></div>
          <div class="titleBox bg-black w-100">
            <h3 class="title-page-text text-center fw-bold text-white w-100">腸道健康分析</h3>
          </div>
          <div class="titleBoxBottom bg-black w-100"></div>
        </div>

        <footer>
          <div class="page-number">5</div>
        </footer>
      </page>`

const summary = (data) => {
  // NOTE gutSummary API
  const shannon = indexStatus(parseInt(data.indices.shannon))
  const goodBad = indexStatus(parseInt(data.indices.goodBad))
  const glucose = indexStatus(parseInt(data.indices.glucose))
  const oil = indexStatus(parseInt(data.indices.oil))
  const immuneIndex = indexStatus(parseInt(data.indices.immuneindex))
  const giFunction = indexStatus(parseInt(data.indices.gifunction))

  const brain = bodyFunctionStatus(parseInt(data.bodyFunction.cvd.score))
  const cardiovascular = bodyFunctionStatus(parseInt(data.bodyFunction.PDAD.score))
  const lung = bodyFunctionStatus(parseInt(data.bodyFunction.lung.score))
  const liver = bodyFunctionStatus(parseInt(data.bodyFunction.nafld.score))
  const kidney = bodyFunctionStatus(parseInt(data.bodyFunction.ckd.score))
  const gastric = bodyFunctionStatus(parseInt(data.bodyFunction.gastitis.score))
  const colitis = bodyFunctionStatus(parseInt(data.bodyFunction.colitis.score))
  const immune = bodyFunctionStatus(parseInt(data.bodyFunction.immune.score))
  const obesity = bodyFunctionStatus(parseInt(data.bodyFunction.obesity.score))
  const metabolism = bodyFunctionStatus(parseInt(data.bodyFunction.metabolism.score))

  const htmlTemplate = `<!-- p6 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column h-100 summary">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.1 腸道分析總覽</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <p class="summary-text mb-4">親愛的客戶您好:<br />在您這次的腸道菌相檢測，結果總覽為:</p>

            <div class="d-flex justify-content-between">
              <div class="col-5 text-center d-flex flex-column">
                <div class="summary-left">
                  <h3 class="summary-title my-2">六大核心指數</h3>
                  <ul class="summary-list pt-2 d-flex flex-column">
                    <li class="list-item">微生態多樣性：${shannon}</li>
                    <li class="list-item">好壞菌叢指數：${goodBad}</li>
                    <li class="list-item">減糖健康指數：${glucose}</li>
                    <li class="list-item">減糖健康指數：${oil}</li>
                    <li class="list-item">免疫平衡指數：${immuneIndex}</li>
                    <li class="list-item">腸道功能指數：${giFunction}</li>
                  </ul>

                  <ul class="summaryScore-container w-100">
                    <li class="list-item d-flex w-100 justify-content-center">
                      <div class="commit text-end col-4">1-30分</div>
                      <div class="colorBox col-4 ml-2 text-center">偏低</div>
                    </li>
                    <li class="list-item d-flex w-100 justify-content-center">
                      <div class="commit text-end col-4">31-80分</div>
                      <div class="colorBox col-4 ml-2 text-center">正常</div>
                    </li>
                    <li class="list-item d-flex w-100 justify-content-center">
                      <div class="commit text-end col-4">81-100分</div>
                      <div class="colorBox col-4 ml-2 text-center">優良</div>
                    </li>
                  </ul>
                </div>

                <div class="summaryNoti-contaienr">
                  <p class="text-start mt-4"><span class="fw-bold">溫馨小提醒:</span><br /></p>
                  <p class="text-indent">
                    近年研究發現腸道菌群與疾病密切相關。服用中天生物科技的『腸生態精準調理』，可調整腸道菌群，有益腸道健康。
                  </p>
                  <img src="./assets/images/6.png" alt="" class="summaryNoti-img" />
                </div>
              </div>

              <div class="col-6 text-center summary-right">
                <h3 class="summary-title my-2">身體功能評估</h3>
                <ul class="summary-list pt-2 d-flex flex-column align-items-center">
                  <li class="list-item d-flex">
                    <div class="col-8">腦功能健康風險：</div>
                    <div class="col-4 text-start">${brain}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">心血管功能健康風險：</div>
                    <div class="col-4 text-start">${cardiovascular}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">肺功能健康風險：</div>
                    <div class="col-4 text-start">${lung}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">肝功能健康風險：</div>
                    <div class="col-4 text-start">${liver}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">腎功能健康風險：</div>
                    <div class="col-4 text-start">${kidney}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">胃功能健康風險：</div>
                    <div class="col-4 text-start">${gastric}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">腸功能健康風險：</div>
                    <div class="col-4 text-start">${colitis}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">免疫功能健康風險：</div>
                    <div class="col-4 text-start">${immune}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">肥胖健康風險：</div>
                    <div class="col-4 text-start">${obesity}</div>
                  </li>
                  <li class="list-item d-flex">
                    <div class="col-8">代謝功能健康風險：</div>
                    <div class="col-4 text-start">${metabolism}</div>
                  </li>
                </ul>

                <ul class="summaryScore-container w-100 ml-2">
                  <li class="list-item d-flex w-100 justify-content-center">
                    <div class="commit text-end col-4">1-3分</div>
                    <div class="colorBox col-4 ml-2 text-center">高度風險</div>
                  </li>
                  <li class="list-item d-flex w-100 justify-content-center">
                    <div class="commit text-end col-4">4-7分</div>
                    <div class="colorBox col-4 ml-2 text-center">中度風險</div>
                  </li>
                  <li class="list-item d-flex w-100 justify-content-center">
                    <div class="commit text-end col-4">8-10分</div>
                    <div class="colorBox col-4 ml-2 text-center">低度風險</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">6</div>
        </footer>
      </page>`

  return htmlTemplate
}

const healthGuides = (data, dynamicText) => {
  // 計算在指引頁上需要填入的資料及是否有新增頁數
  const { newPages, indicesText, bodyFunctionText, productDescription } = computed.getNewPages(data, dynamicText)
  let htmlTemplate = ''

  // 假如沒有新增頁數
  if (newPages == 0) {
    htmlTemplate = `<!-- p7 -->
      <page size="A4" class="bg-p7">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center w-100">
          <div class="mt-8 w-100 zi-1">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.2 腸道健康指引</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <!-- <div class="mb-5 page-container "> -->
          <div class="healthGuide-container">
            <p class="fw-bold text-indent">
              在您這次的腸道菌相檢測結果，首先在六大核心指數中，<span class="text-gold"
                >${indicesText}
              </span>
            </p>
            <br />
            <p class="fw-bold text-indent">
              其次，在身體功能評估方面<span class="text-gold"
                >${bodyFunctionText}
              </span>
            </p>
            <br />
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${productDescription}</span
              >使您的身體常保青春活力。
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">7</div>
        </footer>
      </page>`
  } else {
    // 假如有新增頁數
    // 先取出字串第一段第一個字與不需要顯色的文字敘述拼成第一行
    let tempSlice = '在您這次的腸道菌相檢測結果，首先在六大核心指數中，' + indicesText.slice(0, 1)
    // 取出後面文字並以27字數為一行算行數
    let firstArr = indicesText.slice(1).match(/.{1,27}/g)
    // 把第一行插入至firstArr
    firstArr.unshift(tempSlice)

    // 先取出字串第二段14個字與不需要顯色的文字敘述拼成第一行
    tempSlice = '其次，在身體功能評估方面' + bodyFunctionText.slice(0, 14)
    // 取出後面文字並以27字數為一行算行數
    let secondArr = bodyFunctionText.slice(14).match(/.{1,27}/g)
    // 把第一行插入至secondArr
    secondArr.unshift(tempSlice)

    // NOTE 第三段敘述仍需要改
    let productDescriptionMod =
      '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的' +
      productDescription +
      '使您的身體常保青春活力。'

    // 取出文字並以26字數為第一行
    tempSlice = productDescriptionMod.slice(0, 26)
    // 取出後面文字並以27字數為一行算行數
    let thirdArr = productDescriptionMod.slice(26).match(/.{1,27}/g)
    // 把第一行插入至thirdArr
    thirdArr.unshift(tempSlice)

    // 將25行以前以後分為page1Arr及page2Arr
    let page1Arr = firstArr.concat(secondArr).concat(thirdArr).slice(0, 25)
    let page2Arr = firstArr.concat(secondArr).concat(thirdArr).slice(25)
    let page1Part2 = ''
    let page1Part3 = ''
    let page2Part2 = ''
    let page2Part3 = ''

    // 假如第二頁文字是卡在第二段時
    if (firstArr.length + secondArr.length > 25) {
      // 計算page1Part2
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1)
      // 計算page2Part2
      page2Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1)

      // 計算page2Part3
      page2Part3 = productDescription

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4" class="bg-p7">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center w-100">
          <div class="mt-8 w-100 zi-1">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.2 腸道健康指引</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <!-- <div class="mb-5 page-container "> -->
          <div class="healthGuide-container">
            <p class="fw-bold text-indent">
              在您這次的腸道菌相檢測結果，首先在六大核心指數中，<span class="text-gold"
                >${indicesText}
              </span>
            </p>
            <br />
            <p class="fw-bold text-indent">
              其次，在身體功能評估方面，<span class="text-gold"
                >${page1Part2}
              </span>
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">7</div>
        </footer>
      </page>`

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4" class="bg-p7">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center w-100">
          <div class="mt-8 w-100 zi-1">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.2 腸道健康指引</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <!-- <div class="mb-5 page-container "> -->
          <div class="healthGuide-container">
            <p class="fw-bold text-indent">
              其次，在身體功能評估方面<span class="text-gold"
                >${page2Part2}
              </span>
            </p>
            <br />
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page2Part3}</span
              >使您的身體常保青春活力。
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">8</div>
        </footer>
      </page>
      `
    } else if (firstArr.length + secondArr.length + thirdArr.length > 25) {
      // 假如第二頁文字是卡在第三段時
      // 計算page1Part3
      page1Part3 = page1Arr
        .join('')
        .split('近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的')
        .slice(-1)
        .join('')
        .split('關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技')
        .slice(-1)
        .join('')
        .split('所研發的')
        .slice(-1)

      // 計算page2Part3
      page2Part3 = page2Arr.join('').split('所研發的').slice(-1).join('').split('使您的身體常保青春活力。')[0]

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4" class="bg-p7">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center w-100">
          <div class="mt-8 w-100 zi-1">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.2 腸道健康指引</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <!-- <div class="mb-5 page-container "> -->
          <div class="healthGuide-container">
            <p class="fw-bold text-indent">
              在您這次的腸道菌相檢測結果，首先在六大核心指數中，<span class="text-gold"
                >${indicesText}
              </span>
            </p>
            <br />
            <p class="fw-bold text-indent">
              其次，在身體功能評估方面，<span class="text-gold"
                >${bodyFunctionText}
              </span>
            </p>
            <br />
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page1Part3}</span
              >使您的身體常保青春活力。
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">7</div>
        </footer>
      </page>`

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4" class="bg-p7">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center w-100">
          <div class="mt-8 w-100 zi-1">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.2 腸道健康指引</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <!-- <div class="mb-5 page-container "> -->
          <div class="healthGuide-container">
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page2Part3}</span
              >使您的身體常保青春活力。
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">8</div>
        </footer>
      </page>
      `
    }
  }

  return htmlTemplate
}

const indexStatus = (value) => {
  if (81 <= value && value <= 100) {
    return '優良'
  } else if (31 <= value && value <= 80) {
    return '正常'
  } else {
    return '<span class="text-danger">偏低</span>'
  }
}

const bodyFunctionStatus = (value) => {
  if (80 <= value && value <= 100) {
    return '低度風險'
  } else if (30 <= value && value <= 79) {
    return '中度風險'
  } else {
    return '<span class="text-danger">高度風險</span>'
  }
}

module.exports = { pagination, summary, healthGuides }
