const computed = require('../Components/computed');

const pagination = `      <!-- p5 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/3分隔頁.jpg" alt="" />
  </div>

  <div class="divider-title-v2">腸道健康分析</div>
</page>`;

const summary = (data) => {
  const shannon = indexStatus(parseInt(data.indices.GutBiomeIndex ?? data.indices.shannon));
  const goodBad = indexStatus(parseInt(data.indices.GoodBadIndex ?? data.indices.GoodBad));
  const glucose = indexStatus(parseInt(data.indices.GlucoseIndex));
  const oil = indexStatus(parseInt(data.indices.OilIndex));
  const immuneIndex = indexStatus(parseInt(data.indices.ImmuneIndex));
  const giFunction = indexStatus(parseInt(data.indices.GutFunctionIndex ?? data.indices.GutFunction));

  const brain = bodyFunctionStatus(parseInt(data.PDAD.score));
  const cardiovascular = bodyFunctionStatus(parseInt(data.HeartVessel.score));
  const lung = bodyFunctionStatus(parseInt(data.Lung.score));
  const liver = bodyFunctionStatus(parseInt(data.Liver.score));
  const kidney = bodyFunctionStatus(parseInt(data.Kidney.score));
  const gastric = bodyFunctionStatus(parseInt(data.Stomach.score));
  const colitis = bodyFunctionStatus(parseInt(data.Intestine.score));
  const immune = bodyFunctionStatus(parseInt(data.Immune.score));
  const obesity = bodyFunctionStatus(parseInt(data.Obesity.score));
  const metabolism = bodyFunctionStatus(parseInt(data.Metabolism.score));

  const htmlTemplate = `<!-- p6 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 p6-tab">腸道健康分析</div>

  <div class="p6-content">
    <div class="p6-header">
      <span class="page-breadcrumb">1.1 腸道分析總覽</span>
    </div>

    <div class="p6-body">
      <p class="p6-greeting">親愛的客戶您好：<br />在您這次的腸道菌相檢測，結果總覽為：</p>

      <div class="p6-grid">
        <!-- 六大核心指數 -->
        <div class="p6-section">
          <div class="p6-section-label">六大核心指數</div>
          <ul class="p6-result-list">
            <li>微生態多樣性：${shannon}</li>
            <li>好壞菌叢指數：${goodBad}</li>
            <li>減糖健康指數：${glucose}</li>
            <li>油切健康指數：${oil}</li>
            <li>免疫平衡指數：${immuneIndex}</li>
            <li>腸道功能指數：${giFunction}</li>
          </ul>
          <div class="p6-legend">
            <div class="p6-legend-item p6-legend-item--low"><span>1-30分</span><span>偏低</span></div>
            <div class="p6-legend-item p6-legend-item--normal"><span>31-80分</span><span>正常</span></div>
            <div class="p6-legend-item p6-legend-item--good"><span>81-100分</span><span>優良</span></div>
          </div>
        </div>

        <!-- 身體功能評估 -->
        <div class="p6-section">
          <div class="p6-section-label">身體功能評估</div>
          <ul class="p6-result-list">
            <li>腦功能健康：${brain}</li>
            <li>心血管功能健康：${cardiovascular}</li>
            <li>肺功能健康：${lung}</li>
            <li>肝功能健康：${liver}</li>
            <li>腎功能健康：${kidney}</li>
            <li>胃功能健康：${gastric}</li>
            <li>腸功能健康：${colitis}</li>
            <li>免疫功能健康：${immune}</li>
            <li>肥胖健康：${obesity}</li>
            <li>代謝功能健康：${metabolism}</li>
          </ul>
          <div class="p6-legend">
            <div class="p6-legend-item p6-legend-item--low"><span>1-3分</span><span>高度風險</span></div>
            <div class="p6-legend-item p6-legend-item--normal"><span>4-7分</span><span>中度風險</span></div>
            <div class="p6-legend-item p6-legend-item--good"><span>8-10分</span><span>低度風險</span></div>
          </div>
        </div>
      </div>

      <div class="p6-noti">
        <span class="fw-bold">溫馨小提醒：</span>
        近年研究發現腸道菌群與疾病密切相關。服用中天生物科技的『腸生態精準調理』，可調整腸道菌群，有益腸道健康。
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">6</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const healthGuides = (data, dynamicText) => {
  // 計算在指引頁上需要填入的資料及是否有新增頁數
  const { newPages, indicesText, bodyFunctionText, productDescription } = computed.getNewPages(data, dynamicText);
  let htmlTemplate = '';
  console.log('指引總頁數：', newPages + 1);

  // 假如沒有新增頁數
  if (newPages == 0) {
    htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
            <p class="fw-bold text-indent">
              在您這次的腸道菌相檢測結果，首先在六大核心指數中，<span class="text-gold"
                >${indicesText}
              </span>
            </p>
            <p class="fw-bold text-indent">
              其次，在身體功能評估方面<span class="text-gold"
                >${bodyFunctionText}
              </span>
            </p>
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${productDescription}</span
              >使您的身體常保青春活力。
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;
  } else {
    // 假如有新增頁數
    // 先取出字串第一段第一個字與不需要顯色的文字敘述拼成第一行
    let tempSlice = '在您這次的腸道菌相檢測結果，首先在六大核心指數中，' + indicesText.slice(0, 1);
    // 取出後面文字並以27字數為一行算行數
    let firstArr = indicesText.slice(1).match(/.{1,27}/g);
    // 把第一行插入至firstArr
    firstArr.unshift(tempSlice);

    // 先取出字串第二段14個字與不需要顯色的文字敘述拼成第一行
    tempSlice = '其次，在身體功能評估方面，' + bodyFunctionText.slice(0, 14);
    // 取出後面文字並以27字數為一行算行數
    let secondArr = bodyFunctionText.slice(14).match(/.{1,27}/g);
    // 把第一行插入至secondArr
    secondArr.unshift(tempSlice);

    let productDescriptionMod =
      '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的' +
      productDescription +
      '使您的身體常保青春活力。';

    // 取出文字並以26字數為第一行
    tempSlice = productDescriptionMod.slice(0, 26);
    // 取出後面文字並以27字數為一行算行數
    let thirdArr = productDescriptionMod.slice(26).match(/.{1,27}/g);
    // 把第一行插入至thirdArr
    thirdArr.unshift(tempSlice);

    // 將25行以前以後分為page1Arr及page2Arr
    let page1Arr = secondArr.concat(thirdArr).slice(0, 26 - firstArr.length);
    let page2Arr = firstArr.concat(secondArr).concat(thirdArr).slice(26);
    let page1Part2 = '';
    let page1Part3 = '';
    let page2Part2 = '';
    let page2Part3 = '';

    // 假如第二頁文字是卡在第二段時
    if (firstArr.length + secondArr.length > 25 && secondArr.length <= 29) {
      // 計算page1Part2
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1);
      // console.log(page1Arr)
      // 計算page2Part2
      page2Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1);

      // 計算page2Part3
      page2Part3 = productDescription;

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">8</div>
  </footer>
</page>
      `;
    } else if (firstArr.length + secondArr.length > 25 && secondArr.length > 29 && secondArr.length <= 33) {
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1);
      // console.log(page1Arr)
      // 計算page2Part2
      page2Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1);

      // 計算page2Part3
      page2Part3 = productDescription;

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
            <p class="fw-bold">
              <span class="text-gold"
                >${page2Part2}
              </span>
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">8</div>
  </footer>
</page>
      `;

      htmlTemplate += `
      <!-- p9 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page2Part3}</span
              >使您的身體常保青春活力。
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">9</div>
  </footer>
</page>
      `;
    } else if (firstArr.length + secondArr.length > 25 && secondArr.length > 33) {
      // 計算page1Part2
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1);
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
        .join('');

      page3Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1)
        .join('')
        .match(/.{1,27}/g)
        .slice(27)
        .join('');

      // 計算page2Part3
      page3Part3 = productDescription;

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;

      htmlTemplate += `
      <!-- p8 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
            <p class="fw-bold">
              <span class="text-gold"
                >${page2Part2}
              </span>
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">8</div>
  </footer>
</page>
      `;

      htmlTemplate += `
      <!-- p9 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">9</div>
  </footer>
</page>
      `;
    } else if (firstArr.length + secondArr.length == 25) {
      // 計算page1Part2
      page1Arr.pop();
      // console.log(page1Arr);
      page1Part2 = page1Arr.join('').split('其次，在身體功能評估方面，').slice(-1);
      // 計算page2Part2
      page2Part2 = page2Arr
        .join('')
        .split(
          '近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的'
        )
        .slice(0, 1);

      // 計算page2Part3
      page2Part3 = productDescription;

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">          
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page2Part3}</span
              >使您的身體常保青春活力。
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">8</div>
  </footer>
</page>
      `;
    } else if (firstArr.length + secondArr.length == 24) {
      // 假如第二頁文字是卡在第三段時
      // 計算page1Part3
      // console.log(page1Arr);

      page1Part3 = page1Arr
        .join('')
        .split('近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的')
        .slice(-1)
        .join('')
        .split('關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技')
        .slice(-1)
        .join('')
        .split('所研發的')
        .slice(-1);

      // 計算page2Part3
      page2Part3 = page2Arr.join('').split('所研發的').slice(-1).join('').split('使您的身體常保青春活力。')[0];

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
    </div>
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page2Part3}</span
              >使您的身體常保青春活力。
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">8</div>
  </footer>
</page>
      `;
    } else if (firstArr.length + secondArr.length + thirdArr.length > 25) {
      // 假如第二頁文字是卡在第三段時
      // 計算page1Part3
      console.log(page1Arr);

      page1Part3 = page1Arr
        .join('')
        .split('近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的')
        .slice(-1)
        .join('')
        .split('關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技')
        .slice(-1)
        .join('')
        .split('所研發的')
        .slice(-1);

      // 計算page2Part3
      page2Part3 = page2Arr.join('').split('所研發的').slice(-1).join('').split('使您的身體常保青春活力。')[0];

      // 塞入htmlTemplate
      htmlTemplate = `<!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
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
  </div>

  <footer>
    <div class="page-number">7</div>
  </footer>
</page>`;

      htmlTemplate += `
      <!-- p7 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p7-content">
    <div class="p7-header">
      <span class="page-breadcrumb">1.2 腸道健康指引</span>
    </div>

    <div class="p7-body">
            <p class="fw-bold text-indent">
              近幾年來的國際文獻均指出，腸道菌與許多疾病有著高度的關聯性，因此定期的檢測腸道菌相變化，並透過中天生物科技所研發的<span
                class="text-gold"
                >${page2Part3}</span
              >使您的身體常保青春活力。
            </p>
    </div>
  </div>

  <footer>
    <div class="page-number">8</div>
  </footer>
</page>
      `;
    }
  }

  return htmlTemplate;
};
const biomeDistribution = (data, dynamicText, pageNum) => {
  const numGenus = data.analysisResult.NumberOfGenus;
  let bactDistDescription = '';
  let bactDistTodoDescription = '';

  if (numGenus > 80) {
    bactDistDescription = dynamicText.bactDist.high.description;
    bactDistTodoDescription = dynamicText.bactDist.high.todoDescription;
  } else if (numGenus <= 80 && numGenus > 30) {
    bactDistDescription = dynamicText.bactDist.medium.description;
    bactDistTodoDescription = dynamicText.bactDist.medium.todoDescription;
  } else {
    bactDistDescription = dynamicText.bactDist.low.description;
    bactDistTodoDescription = dynamicText.bactDist.low.todoDescription;
  }

  const htmlTemplate = `<!-- p8 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p8-content">
    <div class="p8-header">
      <span class="page-breadcrumb">1.3 菌相數量分布圖</span>
    </div>

    <div class="p8-body mt-3">
      <h2 class="p8-title">華人腸道菌相數量分布圖</h2>

      <div class="p8-chart">
        <img src="./assets/images_v2/8_test.png" alt="菌相數量分布圖" />
      </div>

      <h3 class="p8-subtitle">圖形說明</h3>

      <p class="p8-text text-indent">
        中天生物科技利用次世代基因定序技術，同時結合國際微生物資料庫及中天生物科技獨有之資料庫進行驗證，建立了專屬華人的平均菌屬數量分布圖。而研究文獻均證實菌相數量和身體的免疫能力有正相關，數量越多，代表身體的免疫能力越強。
      </p>

      <p class="p8-text text-indent">
        您的個人菌屬數量為<span>${numGenus}</span>。由資料判斷，<span class="text-gold">${bactDistDescription}</span>因此建議您可透過服用中天生物科技所研發的「腸生態個人化精準調理」，<span class="text-gold">${bactDistTodoDescription}</span>
      </p>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const healthIndex = (data, dynamicText, pageNum) => {
  // TODO 修改B/E Ratio
  const fb = data.analysisResult.FBRatio;
  const fbResult = fb > 1 ? '偏向厚壁菌門' : '偏向擬桿菌門';
  const fbEvaluate = fb > 1 ? '有體重增加趨勢' : '體重穩定';
  let be = data.analysisResult.BERatio;
  be = be >= 100 ? 100 : be;

  const beResult = be <= 30 ? '<span class="text-danger">菌群數量失衡</span>' : '菌群數量平衡';
  const beEvaluate = be <= 30 ? '<span class="text-danger">腸道菌相失衡</span>' : '腸道菌相穩定';

  const htmlTemplate = `<!-- p9 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p9-content">
    <div class="p9-header">
      <span class="page-breadcrumb">1.4 健康分析指標</span>
    </div>

    <div class="p9-body mt-3">
      <!-- F/B比值 -->
      <div class="p9-section">
        <h2 class="p9-title">F/B比值</h2>
        <table class="p9-table mb-2">
          <thead>
            <tr>
              <th>檢測數值</th>
              <th>結果分析</th>
              <th>評估</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${fb}</td>
              <td>${fbResult}</td>
              <td>${fbEvaluate}</td>
            </tr>
          </tbody>
        </table>
        <div class="p9-comment">
          <div class="p9-comment-title">檢測說明</div>
          <p class="text-indent">
            F/B分別指的是腸道菌群中的厚壁菌門（F, Firmicutes）和擬桿菌門（B,
            Bacteroidetes），目前研究顯示F/B比值反應身體質量指數（BMI），與肥胖傾向相關。厚壁菌門使碳水化合物代謝（carbohydrate
            metabolism），導致脂肪堆積造成體重增加。所以調控F/B比值有助於體重控制。
          </p>
        </div>
      </div>

      <!-- B/E比值 -->
      <div class="p9-section">
        <h2 class="p9-title">B/E比值</h2>
        <table class="p9-table mb-2">
          <thead>
            <tr>
              <th>檢測數值</th>
              <th>結果分析</th>
              <th>評估</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${be}</td>
              <td>${beResult}</td>
              <td>${beEvaluate}</td>
            </tr>
          </tbody>
        </table>
        <div class="p9-comment">
          <div class="p9-comment-title">檢測說明</div>
          <p class="text-indent">
            B/E比值是指雙歧桿菌屬（Bifidobacterium）和腸桿菌科（Enterobacteriaceae）的比值，目前研究顯示B/E比值反應腸道菌相平衡。若B/E數值大於30，表示腸道菌群處於平衡狀態；但若B/E數值小於30，表示腸道菌群處於失衡狀態，可能會造成腹瀉、過敏或代謝失調等現象。
          </p>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const fattyAcidSynthesis = (data, dynamicText, pageNum) => {
  const acidB = roundToTwo(data.analysisResult.TotalAcetateAbundance * 100);
  const acidB_percentile = data.analysisResult.TotalAcetatePercentile;
  const acidBEvluate = acidB_percentile <= 30 ? '<span class="text-danger">合成能力偏低</span>' : '合成能力正常';

  const acidC = roundToTwo(data.analysisResult.TotalPropionateAbundance * 100);
  const acidC_percentile = data.analysisResult.TotalPropionatePercentile;
  const acidCEvluate = acidC_percentile <= 30 ? '<span class="text-danger">合成能力偏低</span>' : '合成能力正常';

  const acidD = roundToTwo(data.analysisResult.TotalButyrateAbundance * 100);
  const acidD_percentile = data.analysisResult.TotalButyratePercentile;
  const acidDEvluate = acidD_percentile <= 30 ? '<span class="text-danger">合成能力偏低</span>' : '合成能力正常';

  const htmlTemplate = `<!-- p10 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p10-content">
    <div class="p10-header">
      <span class="page-breadcrumb">1.5 短鏈脂肪酸合成能力</span>
    </div>

    <div class="p10-body mt-3">
      <h2 class="p10-title">檢測結果</h2>

      <table class="p10-table mb-3">
        <thead>
          <tr>
            <th>檢測數值</th>
            <th>結果分析</th>
            <th>評估</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>乙酸</td>
            <td>${acidB} %</td>
            <td>${acidBEvluate}</td>
          </tr>
          <tr>
            <td>丙酸</td>
            <td>${acidC} %</td>
            <td>${acidCEvluate}</td>
          </tr>
          <tr>
            <td>丁酸</td>
            <td>${acidD} %</td>
            <td>${acidDEvluate}</td>
          </tr>
        </tbody>
      </table>

      <div class="p10-comment">
        <div class="p10-comment-title">檢測說明</div>
        <p class="text-indent">
          飲食中人體無法消化分解的膳食纖維，經由腸道中的益菌發酵成為可吸收利用的短鏈脂肪酸。腸道中的短鏈脂肪酸以乙酸、丙酸、丁酸這三種為主，主要功能為提供腸道細胞能量、促進腸道細胞分化、維持腸道粘膜健康與健全益菌生長環境。目前文獻證實丁酸具有調節免疫細胞的功能，為次世代保健食品，透過增加調節性T細胞，使腸道維持健康的免疫狀態；同時丁酸具有促進腸道激素（腸泌素）釋放，達到穩定血糖的作用。
        </p>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const enterotyping = (data, dynamicText, pageNum) => {
  let type = data.analysisResult.Enterotype;
  const typeText = dynamicText.Enterotype[type];
  type = type.replace('type', '腸型');

  const htmlTemplate = `<!-- p11 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p11-content">
    <div class="p11-header">
      <span class="page-breadcrumb">1.6 腸型分析</span>
    </div>

    <div class="p11-body mt-3">
      <h2 class="p11-title">檢測結果</h2>

      <table class="p11-table mb-3">
        <thead>
          <tr>
            <th>檢測數值</th>
            <th>結果分析</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p11-table-type">${type}</td>
            <td>${typeText}</td>
          </tr>
        </tbody>
      </table>

      <h2 class="p11-title">檢測說明</h2>

      <div class="p11-cards">
        <div class="p11-card">
          <div class="p11-card-label">腸型1</div>
          <img src="./assets/images/Gut_mod-1.png" alt="腸型1" />
          <div class="p11-card-body">
            <div class="p11-card-species">擬桿菌 Bacteroides</div>
            <p>
              此類人群，飲食中富含脂肪及蛋白質來獲取所需能量，較易分解碳水化合物及蛋白質，飲食傾向高脂肪及高蛋白攝取。
            </p>
          </div>
        </div>

        <div class="p11-card">
          <div class="p11-card-label">腸型2</div>
          <img src="./assets/images/Gut_mod-2.png" alt="腸型2" />
          <div class="p11-card-body">
            <div class="p11-card-species">普氏菌 Prevotella</div>
            <p>
              此類人群，飲食傾向高纖維食物攝取，腸道中富含普氏菌，導致腸道黏液分解，腸道防護力下降，較易有腸道疼痛不適的狀況。
            </p>
          </div>
        </div>

        <div class="p11-card">
          <div class="p11-card-label">腸型3</div>
          <img src="./assets/images/Gut_mod-3.png" alt="腸型3" />
          <div class="p11-card-body">
            <div class="p11-card-species">瘤胃球菌 Ruminococcus</div>
            <p>此類腸型人群其腸道中富含瘤胃球菌，瘤胃球菌較易吸收糖分，此類腸型人群較容易增重。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const biomeSummary = (data, pageNum) => {
  const gutBiome = data.GutBiome;
  const htmlTemplate = `<!-- p12 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">腸道健康分析</div>

  <div class="p12-content">
    <div class="p12-header">
      <span class="page-breadcrumb">1.7 腸道菌相總覽</span>
    </div>

    <div class="p12-body mt-3">
      <h2 class="p12-title">您的腸道菌相結構分布</h2>

      <div class="p12-charts">
        <img src="./assets/images_v2/12_test.png" alt="菌相結構分布圖" />
      </div>

      <h2 class="p12-title mt-3">您的腸道菌</h2>
      <p class="p12-desc">根據對您腸道菌群的檢測，您的腸道內微生物結構分佈如下表：</p>

      <table class="p12-table">
        <thead>
          <tr>
            <th>排名</th>
            <th colspan="2">細菌菌門</th>
            <th>比例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>${gutBiome[0].name}</td>
            <td>${gutBiome[0].chtName}</td>
            <td>${gutBiome[0].percentage}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>${gutBiome[1].name}</td>
            <td>${gutBiome[1].chtName}</td>
            <td>${gutBiome[1].percentage}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>${gutBiome[2].name}</td>
            <td>${gutBiome[2].chtName}</td>
            <td>${gutBiome[2].percentage}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>${gutBiome[3].name}</td>
            <td>${gutBiome[3].chtName}</td>
            <td>${gutBiome[3].percentage}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>${gutBiome[4].name}</td>
            <td>${gutBiome[4].chtName}</td>
            <td>${gutBiome[4].percentage}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>${gutBiome[5].name}</td>
            <td>${gutBiome[5].chtName}</td>
            <td>${gutBiome[5].percentage}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>${gutBiome[6].name}</td>
            <td>${gutBiome[6].chtName}</td>
            <td>${gutBiome[6].percentage}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>${gutBiome[7].name}</td>
            <td>${gutBiome[7].chtName}</td>
            <td>${gutBiome[7].percentage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const indexStatus = (value) => {
  if (81 <= value && value <= 100) {
    return '<span class="p6-status--good">優良</span>';
  } else if (31 <= value && value <= 80) {
    return '<span class="p6-status--normal">正常</span>';
  } else {
    return '<span class="p6-status--low">偏低</span>';
  }
};

const bodyFunctionStatus = (value) => {
  const score = value === 0 ? 1 : Math.ceil(value / 10);

  // 判斷要填入的資料低、中、高狀況
  if (score > 7) {
    return '<span class="p6-status--good">低度風險</span>';
  } else if (score > 3 && score < 8) {
    return '<span class="p6-status--normal">中度風險</span>';
  } else {
    return '<span class="p6-status--low">高度風險</span>';
  }
};

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
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
};
