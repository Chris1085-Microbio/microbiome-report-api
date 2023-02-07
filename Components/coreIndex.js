const pagination = (newPages) => {
  const htmlTemplate = `<!-- p13 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="titleBoxUpper bg-gold w-100"></div>
          <div class="titleBox bg-gold w-100">
            <h3 class="title-page-text text-center fw-bold w-100">六大核心指數</h3>
          </div>
          <div class="titleBoxBottom bg-gold w-100"></div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;

  return htmlTemplate;
};

const summary = (data, dynamicText, newPages) => {
  let tempText = '';
  Object.keys(data.indices).forEach((index) => {
    if (parseInt(data.indices[index]) < 31) {
      tempText += dynamicText.indicesDescription[index];
    }
  });

  tempText = tempText == '' ? dynamicText.indicesDescription.stable : tempText;

  const htmlTemplate = `<!-- p14 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-2">
              <h2 class="page-title">2. 六大核心指數</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="image-container d-flex justify-content-center w-100 sixcore">
              <img src="./assets/images/SixCoreIndex.png" alt="" class="bg-p14" />
            </div>

            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>結果說明</h4>
            <p class="text-indent mt-4">
              中天生物科技利用腸道菌相變化建立六大核心指數。根據您的檢測結果，<span class="text-gold"
                >${tempText}</span
              >
            </p>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;

  return htmlTemplate;
};

const index1 = (data, dynamicText, newPages) => {
  const shannon = getBtnTemplate(data.indices, 'GutBiomeIndex');
  const goodbad = getBtnTemplate(data.indices, 'GoodBadIndex');

  // TODO 需要置換圖檔
  const htmlTemplate = `<!-- p15 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">指數說明</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <h4 class="py-1 px-2 pageSubtitle">微生態多樣性</h4>
            <div class="d-flex justify-content-between mt-4">
              ${shannon}
              <div class="bg-p15-1-container">
                <img src="./assets/images/15_1_1.png" alt="" class="indexImg" />
              </div>
            </div>
            <div class="indexComment-container d-flex justify-content-between mb-4 p-2">
              <div class="indexComment-title-container p-1">
                <span class="indexComment-title">說明</span>
              </div>
              <p class="text-indent mt-4">
                微生態多樣性包括微生物豐富度及均勻度。豐富度代表腸道菌的種類數目，均勻度則代表各個菌種的數量差異。微生態多樣性是代表腸道健康的關鍵指標。透過運動、增加纖維食物攝取，可提高腸道菌群的多樣性，減少疾病風險。
              </p>
            </div>
            <h4 class="py-1 px-2 pageSubtitle">好壞菌叢指數</h4>
            <div class="d-flex justify-content-between mt-4">
              ${goodbad}
              <div class="bg-p15-1-container">
                <img src="./assets/images/15_2_1.png" alt="" class="indexImg" />
              </div>
            </div>
            <div class="indexComment-container d-flex justify-content-between p-2">
              <div class="indexComment-title-container p-1">
                <span class="indexComment-title">說明</span>
              </div>
              <p class="text-indent mt-4">
                好壞菌叢指標針對腸道內68個好菌及140個壞菌的數量變化進行綜合評分。好菌如益生菌 (乳酸桿菌,
                Lactobacillus)等 ; 壞菌如病原菌 (大腸埃希氏菌, Escherichia coli
                )等。此指數代表腸道好菌與壞菌之間的平衡，如壞菌過多，腸道可能有失衡現象。
              </p>
            </div>
          </div>

          <div class="bg-container bg-p15-container">
            <div class="bg-ori bg-p15"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;

  return htmlTemplate;
};

const index2 = (data, dynamicText, newPages) => {
  const glucose = getBtnTemplate(data.indices, 'GlucoseIndex');
  const oil = getBtnTemplate(data.indices, 'OilIndex');

  // TODO 需要置換圖檔
  const htmlTemplate = `<!-- p16 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">指數說明</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <h4 class="py-1 px-2 pageSubtitle">減糖健康指數</h4>
            <div class="d-flex justify-content-between mt-4">
              ${glucose}
              <div class="bg-p15-1-container">
                <img src="./assets/images/16_1_1.png" alt="" class="indexImg" />
              </div>
            </div>
            <div class="indexComment-container d-flex justify-content-between mb-4 p-2">
              <div class="indexComment-title-container p-1">
                <span class="indexComment-title">說明</span>
              </div>
              <p class="text-indent mt-4">
                減糖健康指數是根據參與醣類代謝的關鍵腸道菌群進行分析。好菌如:艾克曼菌(Akkermansia
                muciniphila)，壞菌如:沃氏嗜膽菌 (Bilophila
                wadsworthia)等。此關鍵菌群決定醣類吸收代謝及熱量燃燒等生理功能。
              </p>
            </div>
            <h4 class="py-1 px-2 pageSubtitle">油切健康指數</h4>
            <div class="d-flex justify-content-between mt-4">
              ${oil}
              <div class="bg-p15-1-container">
                <img src="./assets/images/16_2_1.png" alt="" class="indexImg" />
              </div>
            </div>
            <div class="indexComment-container d-flex justify-content-between p-2">
              <div class="indexComment-title-container p-1">
                <span class="indexComment-title">說明</span>
              </div>
              <p class="text-indent mt-4">
                油切健康指數是根據參與脂肪代謝的關鍵腸道菌群進行分析。好菌如:腸道羅斯拜瑞氏菌 (Roseburia
                intestinalis)等，壞菌如:陰溝腸桿菌 (Enterobacter
                cloacae)等。此關鍵菌群決定脂肪吸收、油脂堆積及脂肪燃燒等生理功能。
              </p>
            </div>
          </div>
          <div class="bg-container bg-p15-container">
            <div class="bg-ori bg-p15"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;

  return htmlTemplate;
};

const index3 = (data, dynamicText, newPages) => {
  const immuneindex = getBtnTemplate(data.indices, 'ImmuneIndex');
  const gifunction = getBtnTemplate(data.indices, 'GutFunctionIndex');
  // TODO 需要置換圖檔
  const htmlTemplate = `<!-- p17 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">指數說明</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <h4 class="py-1 px-2 pageSubtitle">免疫平衡指數</h4>
            <div class="d-flex justify-content-between mt-4">
              ${immuneindex}
              <div class="bg-p15-1-container">
                <img src="./assets/images/17_1_1.png" alt="" class="indexImg" />
              </div>
            </div>
            <div class="indexComment-container d-flex justify-content-between mb-4 p-2">
              <div class="indexComment-title-container p-1">
                <span class="indexComment-title">說明</span>
              </div>
              <p class="text-indent mt-4">
                免疫平衡指數是根據參與免疫調節的關鍵菌群進行分析。好菌如:普氏棲糞桿菌(Faecalibacterium
                prausnitzii)，壞菌如:活潑瘤胃球菌 (Ruminococcus
                gnavus)。此關鍵菌群決定免疫調節及抑制發炎反應等生理功能。
              </p>
            </div>
            <h4 class="py-1 px-2 pageSubtitle">腸道功能指數</h4>
            <div class="d-flex justify-content-between mt-4">
              ${gifunction}
              <div class="bg-p15-1-container">
                <img src="./assets/images/17_2_1.png" alt="" class="indexImg" />
              </div>
            </div>
            <div class="indexComment-container d-flex justify-content-between p-2">
              <div class="indexComment-title-container p-1">
                <span class="indexComment-title">說明</span>
              </div>
              <p class="text-indent mt-4">
                腸道功能指數是根據參與腸道屏障等關鍵腸道菌進行分析。好菌如:雙歧杆菌 (Bifidobacterium)等，壞菌如:艱難梭菌
                (Clostridium difficile)等。此關鍵菌群決定腸道屏障細胞再生及黏膜修復等生理功能。
              </p>
            </div>
          </div>
          <div class="bg-container bg-p15-container">
            <div class="bg-ori bg-p15"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;

  return htmlTemplate;
};

const getBtnTemplate = (data, indexName) => {
  if (parseInt(data[indexName]) < 31) {
    return `<div class="indexBtn-container mb-6 ml-4 p-1 border-red">
                <div class="indexBtn text-white text-center p-2 bg-red">
                  <span class="text-last-justify d-block">高度風險</span>
                  <span>${parseInt(data[indexName])} 分</span>
                </div>
              </div>`;
  } else if (parseInt(data[indexName]) > 31 && parseInt(data[indexName]) < 80) {
    return `<div class="indexBtn-container mb-6 ml-4 p-1 border-orange">
                <div class="indexBtn text-white text-center p-2">
                  <span class="text-last-justify d-block">中度風險</span>
                  <span>${parseInt(data[indexName])} 分</span>
                </div>
              </div>`;
  } else {
    return `<div class="indexBtn-container mb-6 ml-4 p-1 border-green">
                <div class="indexBtn text-white text-center p-2">
                  <span class="text-last-justify d-block">低度風險</span>
                  <span>${parseInt(data[indexName])} 分</span>
                </div>
              </div>`;
  }
};

module.exports = {
  pagination,
  summary,
  index1,
  index2,
  index3
};
