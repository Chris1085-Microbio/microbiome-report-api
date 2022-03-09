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
  const goodBad = indexStatus(parseInt(data.indices.GoodBad))
  const glucose = indexStatus(parseInt(data.indices.GlucoseIndex))
  const oil = indexStatus(parseInt(data.indices.OilIndex))
  const immuneIndex = indexStatus(parseInt(data.indices.ImmuneIndex))
  const giFunction = indexStatus(parseInt(data.indices.GutFunction))

  const brain = bodyFunctionStatus(parseInt(data.PDAD.score))
  const cardiovascular = bodyFunctionStatus(parseInt(data.HeartVessel.score))
  const lung = bodyFunctionStatus(parseInt(data.Lung.score))
  const liver = bodyFunctionStatus(parseInt(data.Liver.score))
  const kidney = bodyFunctionStatus(parseInt(data.Kidney.score))
  const gastric = bodyFunctionStatus(parseInt(data.Stomach.score))
  const colitis = bodyFunctionStatus(parseInt(data.Intestine.score))
  const immune = bodyFunctionStatus(parseInt(data.Immune.score))
  const obesity = bodyFunctionStatus(parseInt(data.Obesity.score))
  const metabolism = bodyFunctionStatus(parseInt(data.Metabolism.score))

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
    tempSlice = '其次，在身體功能評估方面，' + bodyFunctionText.slice(0, 14)
    // 取出後面文字並以27字數為一行算行數
    let secondArr = bodyFunctionText.slice(14).match(/.{1,27}/g)
    // 把第一行插入至secondArr
    secondArr.unshift(tempSlice)

    // TODO 第三段敘述仍需要改
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
    let page1Arr = secondArr.concat(thirdArr).slice(0, 26 - firstArr.length)
    let page2Arr = firstArr.concat(secondArr).concat(thirdArr).slice(26)
    let page1Part2 = ''
    let page1Part3 = ''
    let page2Part2 = ''
    let page2Part3 = ''

    // 假如第二頁文字是卡在第二段時
    if (firstArr.length + secondArr.length > 25 && secondArr.length < 37) {
      // 計算page1Part2
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1)
      // console.log(page1Arr)
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
            <p class="fw-bold">
              <span class="text-gold"
                >${page2Part2}
              </span>
            </p>
          
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
    } else if (firstArr.length + secondArr.length > 25 && secondArr.length >= 37) {
      // console.log(firstArr.length, secondArr.length)

      // 計算page1Part2
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1)
      // console.log(page1Arr)
      // 計算page2Part2
      page2Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1)
        .join('')
        .match(/.{1,27}/g)
        .slice(0, 27)
        .join('')

      page3Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1)
        .join('')
        .match(/.{1,27}/g)
        .slice(27)
        .join('')

      // 計算page2Part3
      page3Part3 = productDescription

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
      <!-- p8 -->
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
            <p class="fw-bold">
              <span class="text-gold"
                >${page2Part2}
              </span>
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">8</div>
        </footer>
      </page>
      `

      htmlTemplate += `
      <!-- p9 -->
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
            <p class="fw-bold">
              <span class="text-gold"
                >${page3Part2}
              </span>
            </p>
          
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page3Part3}</span
              >使您的身體常保青春活力。
            </p>
          </div>
          <!-- </div> -->
        </div>

        <footer>
          <div class="page-number">9</div>
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
const biomeDistribution = (data, dynamicText, pageNum) => {
  const numGenus = data.analysisResult.NumberOfGenus
  let bactDistDescription = ''
  let bactDistTodoDescription = ''

  if (numGenus > 80) {
    bactDistDescription = dynamicText.bactDist.high.description
    bactDistTodoDescription = dynamicText.bactDist.high.todoDescription
  } else if (numGenus <= 80 && numGenus > 30) {
    bactDistDescription = dynamicText.bactDist.medium.description
    bactDistTodoDescription = dynamicText.bactDist.medium.todoDescription
  } else {
    bactDistDescription = dynamicText.bactDist.low.description
    bactDistTodoDescription = dynamicText.bactDist.low.todoDescription
  }

  // TODO 需修正分布圖檔案位置
  const htmlTemplate = `<!-- p8 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.3 菌相數量分布圖</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="mb-5 page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-chart-bar mr-1"></i>華人腸道菌相數量分布圖</h4>
            <div class="bg-8-container d-flex justify-content-center mt-4">
              <img class="bg-8" src="./assets/images/8_test.png" alt="" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>圖形說明</h4>
            <p class="mt-4 text-indent">
              中天生物科技利用次世代基因定序技術，同時結合國際微生物資料庫及中天生物科技獨有之資料庫進行驗證，建立了專屬華人的平均菌屬數量分布圖。而研究文獻均證實菌相數量和身體的免疫能力有正相關，數量越多，代表身體的免疫能力越強。<br />
              您的個人菌屬數量為<span class="text-gold">${numGenus}</span>。由資料判斷，<span class="text-gold"
                >${bactDistDescription}</span
              >您因此建議您可透過服用中天生物科技所研發的〝腸生態個人化精準調理〞，<span class="text-gold"
                >${bactDistTodoDescription}</span
              >
            </p>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const healthIndex = (data, dynamicText, pageNum) => {
  // TODO 結果分析、評估需要帶入變數
  const fb = data.analysisResult.FBRatio
  const fbResult = fb > 1 ? '偏向厚壁菌門' : '偏向擬桿菌門'
  const fbEvaluate = fb > 1 ? '有體重增加趨勢' : '體重穩定'
  let be = data.analysisResult.BERatio
  be = be >= 100 ? 100 : be

  const beResult = be <= 30 ? '<span class="text-danger">菌群數量失衡</span>' : '菌群數量平衡'
  const beEvaluate = be <= 30 ? '<span class="text-danger">腸道菌項失衡</span>' : '腸道菌相穩定'

  const htmlTemplate = `<!-- p9 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.4 健康分析指標</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="mb-5 page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>F/B比值</h4>
            <table class="fb-table text-center my-4">
              <th>檢測數值</th>
              <th>結果分析</th>
              <th>評估</th>
              <tr>
                <td>${fb}</td>
                <td>${fbResult}</td>
                <td>${fbEvaluate}</td>
              </tr>
            </table>
            <p class="comment-container ls-1 my-5 text-justify text-indent p-2">
              <span class="commentTitle">檢測說明</span>

              F/B分別指的是腸道菌群中的厚壁菌門 (F, Firmicutes) 和擬桿菌門 (B,
              Bacteroidetes)，目前研究顯示F/B比值反應身體質量指數 (BMI)，與肥胖傾向相關。
              厚壁菌門使碳水化合物代謝(carbohydrate
              metabolism)，導致脂肪堆積造成體重增加。所以調控F/B比值有助於體重控制。
            </p>

            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>B/E比值</h4>

            <table class="fb-table text-center my-4">
              <th>檢測數值</th>
              <th>結果分析</th>
              <th>評估</th>
              <tr>
                <td>${be}</td>
                <td>${beResult}</td>
                <td>${beEvaluate}</td>
              </tr>
            </table>
            <p class="comment-container ls-1 my-5 text-justify text-indent p-2">
              <span class="commentTitle">檢測說明</span>
              B/E比值是指雙歧桿菌屬（Bifidobacterium）和腸桿菌科（Enterobacteriaceae）的比值，目前研究顯示B/E比值反應腸道菌相平衡。若B/E數值大於30，表示腸道菌群處於平衡狀態；但若B/E數值小於30，表示腸道菌群處於失衡狀態，可能會造成腹瀉、過敏或代謝失調等等現象。
            </p>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const fattyAcidSynthesis = (data, dynamicText, pageNum) => {
  // TODO 結果分析、評估需要帶入變數
  const acidB = roundToTwo(data.analysisResult.TotalAcetateAbundance * 100)
  const acidB_percentile = data.analysisResult.TotalAcetatePercentile
  const acidBEvluate = acidB_percentile <= 30 ? '<span class="text-danger">合成能力偏低</span>' : '合成能力正常'

  const acidC = roundToTwo(data.analysisResult.TotalPropionateAbundance * 100)
  const acidC_percentile = data.analysisResult.TotalPropionatePercentile
  const acidCEvluate = acidC_percentile <= 30 ? '<span class="text-danger">合成能力偏低</span>' : '合成能力正常'

  const acidD = roundToTwo(data.analysisResult.TotalButyrateAbundance * 100)
  const acidD_percentile = data.analysisResult.TotalButyratePercentile
  const acidDEvluate = acidD_percentile <= 30 ? '<span class="text-danger">合成能力偏低</span>' : '合成能力正常'

  const htmlTemplate = `<!-- p10 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.5 短鏈脂肪酸合成能力</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="mb-5 page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>檢測結果</h4>
            <table class="fb-table text-center my-4">
              <th>檢測數值</th>
              <th>結果分析</th>
              <th>評估</th>
              <tr class="border-bottom border-dark">
                <td>乙酸</td>
                <td>${acidB} %</td>
                <td>${acidBEvluate}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>丙酸</td>
                <td>${acidC} %</td>
                <td>${acidCEvluate}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>丁酸</td>
                <td>${acidD} %</td>

                <td>${acidDEvluate}</td>
              </tr>
            </table>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>檢測說明</h4>
            <p class="ls-1 my-4 text-justify text-indent">
              飲食中人體無法消化分解的膳食纖維，經由腸道中的益菌發酵成為可吸收利用的短鏈脂肪酸。腸道中的短鏈脂肪酸以乙酸、丙酸、丁酸這三種為主，主要功能為提供腸道細胞能量、促進腸道細胞分化、維持腸道粘膜健康與健全益菌生長環境。目前文獻證實丁酸具有調節免疫細胞的功能，為次世代保健食品，透過增加調節性T細胞，使腸道維持健康的免疫狀態
              ; 同時丁酸具有促進腸道激素(腸泌素)釋放，達到穩定血糖的作用。
            </p>

            <div class="bg-container bg-p10-container">
              <div class="bg-ori bg-p10"></div>
              <div class="bg-mask"></div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const enterotyping = (data, dynamicText, pageNum) => {
  let type = data.analysisResult.Enterotype
  const typeText = dynamicText.Enterotype[type]
  type = type.replace('type', '腸型')

  const htmlTemplate = `<!-- p11 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.6 腸型分析</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="mb-5 page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>檢測結果</h4>
            <table class="fb-table my-4 enterotype-table">
              <th class="col-3 text-center">檢測數值</th>
              <th class="col-9 text-center">結果分析</th>
              <tr>
                <td class="text-center align-middle"><h4>${type}</h4></td>
                <td class="text-justify p-2">
                  ${typeText}
                </td>
              </tr>
            </table>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>檢測說明</h4>
            <div class="cards-container d-flex justify-content-between mt-4">
              <div class="card col-4 d-flex flex-column align-items-center">
                <h5 class="text-center my-2 fw-bold">腸型1</h5>
                <img src="./assets/images/Gut_mod-1.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title text-center w-100">擬桿菌Bacteroides</h6>
                  <p class="card-text ls-1">
                    此類人群，飲食傾向高脂肪及高蛋白攝取，腸道中富含擬桿菌，較易分解碳水化合物及蛋白質來獲取所需能量，此類人群較不易肥胖。
                  </p>
                </div>
              </div>
              <div class="card col-4 d-flex flex-column align-items-center">
                <h5 class="text-center my-2 fw-bold">腸型2</h5>
                <img src="./assets/images/Gut_mod-2.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title text-center w-100">普氏菌 Prevotella</h6>
                  <p class="card-text ls-1">
                    此類人群，飲食傾向高纖維食物攝取，腸道中富含普氏菌
                    ，導致腸道黏液分解，腸道防護力下降，較易有腸道疼痛不適的狀況。
                  </p>
                </div>
              </div>
              <div class="card col-4 d-flex flex-column align-items-center">
                <h5 class="text-center my-2 fw-bold">腸型3</h5>
                <img src="./assets/images/Gut_mod-3.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title text-center w-100">瘤胃球菌Ruminococcus</h6>
                  <p class="card-text ls-1">
                    此類腸型人群其腸道中富含瘤胃球菌，瘤胃球菌較易吸收糖分，此類腸型人群較容易增重。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const biomeSummary = (data, pageNum) => {
  const gutBiome = data.GutBiome
  const htmlTemplate = `<!-- p12 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">1.7 腸道菌相總覽</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="mb-5 page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-chart-bar mr-1"></i>您的腸道菌相結構分布：</h4>

            <div class="distribution-container d-flex my-2">
              <img src="./assets/images/12_test.png" alt="" class="col-12" />
            </div>

            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>您的腸道菌：</h4>
            <span class="tableComment d-block w-100 text-center mt-4"
              >根據對您腸道菌群的檢測，您的腸道內微生物結構分佈如下表：
            </span>
            <table class="fb-table mt-3 text-center">
              <th class="col-3 text-center">排名</th>
              <th class="col-6 text-center" colspan="2">細菌菌門</th>
              <th class="col-3 text-center">比例</th>
              <tr class="border-bottom border-dark">
                <td>1</td>
                <td>${gutBiome[0].name}</td>
                <td>厚壁菌門</td>
                <td>${gutBiome[0].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>2</td>
                <td>${gutBiome[1].name}</td>
                <td>擬桿菌門</td>
                <td>${gutBiome[1].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>3</td>
                <td>${gutBiome[2].name}</td>
                <td>變形菌門</td>
                <td>${gutBiome[2].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>4</td>
                <td>${gutBiome[3].name}</td>
                <td>疣微菌門</td>
                <td>${gutBiome[3].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>5</td>
                <td>${gutBiome[4].name}</td>
                <td>梭桿菌門</td>
                <td>${gutBiome[4].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>6</td>
                <td>${gutBiome[5].name}</td>
                <td>放線菌門</td>
                <td>${gutBiome[5].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>7</td>
                <td>${gutBiome[6].name}</td>
                <td>軟壁菌門</td>
                <td>${gutBiome[6].percentage}</td>
              </tr>
              <tr class="border-bottom border-dark">
                <td>8</td>
                <td>${gutBiome[7].name}</td>
                <td>藍藻門</td>
                <td>${gutBiome[7].percentage}</td>
              </tr>
            </table>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`

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

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2')
}

module.exports = {
  pagination,
  summary,
  healthGuides,
  biomeDistribution,
  healthIndex,
  fattyAcidSynthesis,
  enterotyping,
  biomeSummary
}
