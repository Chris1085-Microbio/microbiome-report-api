const pagination = (newPages) => {
  const htmlTemplate = `<!-- p13 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/3分隔頁.jpg" alt="" />
  </div>

  <div class="divider-title-v2">六大核心指數</div>
</page>`;

  return htmlTemplate;
};

const INDEX_KEY_MAP = {
  shannon: 'GutBiomeIndex',
  GoodBad: 'GoodBadIndex',
  GutFunction: 'GutFunctionIndex'
};

const summary = (data, dynamicText, newPages) => {
  let tempText = '';
  Object.keys(data.indices).forEach((index) => {
    const normalizedKey = INDEX_KEY_MAP[index] || index;
    if (parseInt(data.indices[index]) < 31) {
      tempText += dynamicText.indicesDescription[normalizedKey] || '';
    }
  });

  tempText = tempText == '' ? dynamicText.indicesDescription.stable : tempText;

  const htmlTemplate = `<!-- p14 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">六大核心指數</div>

  <div class="p14-content">
    <div class="p14-header">
      <span class="page-breadcrumb">2. 六大核心指數</span>
    </div>

    <div class="p14-body">
      <div class="p14-chart">
        <img src="./assets/images_v2/SixCoreIndex.png" alt="六大核心指數" />
        <img src="./assets/images_v2/SixCoreIndexLegend.png" alt="六大核心指數Legend" />
      </div>

      <h2 class="p14-title mt-2">結果說明</h2>

      <p class="p14-text text-indent">
        中天生物科技利用腸道菌相變化建立六大核心指數。根據您的檢測結果，<span class="text-gold">${tempText}</span>
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

  const htmlTemplate = `<!-- p15 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">六大核心指數</div>

  <div class="p15-content">
    <div class="p15-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="p15-body mt-5">
      <!-- 微生態多樣性 -->
      <div class="p15-section">
        <div class="p15-meter">
          <img src="./assets/images_v2/數值圖2.png" alt="微生態多樣性" title="${parseInt(
            data.indices.GutBiomeIndex
          )}" />
          <h2 class="p15-title">微生態多樣性</h2>
        </div>
        <div class="p15-comment">
          <p class="text-indent">
            微生態多樣性包括微生物豐富度及均勻度。豐富度代表腸道菌的種類數目，均勻度則代表各個菌種的數量差異。微生態多樣性是代表腸道健康的關鍵指標。透過運動、增加纖維食物攝取，可提高腸道菌群的多樣性，減少疾病風險。
          </p>
        </div>
      </div>

      <!-- 好壞菌叢指數 -->
      <div class="p15-section mt-4">
        <div class="p15-meter">
          <img src="./assets/images_v2/數值圖2.png" alt="好壞菌叢指數" title="${parseInt(data.indices.GoodBadIndex)}" />
          <h2 class="p15-title">好壞菌叢指數</h2>
        </div>
        <div class="p15-comment">
          <p class="text-indent">
            好壞菌叢指標針對腸道內68個好菌及140個壞菌的數量變化進行綜合評分。好菌如益生菌（乳酸桿菌,
            Lactobacillus）等；壞菌如病原菌（大腸埃希氏菌, Escherichia
            coli）等。此指數代表腸道好菌與壞菌之間的平衡，如壞菌過多，腸道可能有失衡現象。
          </p>
        </div>
      </div>
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
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">六大核心指數</div>

  <div class="p16-content">
    <div class="p16-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="p16-body mt-5">
      <!-- 減糖健康指數 -->
      <div class="p16-section">
        <div class="p16-meter">
          <img src="./assets/images_v2/數值圖2.png" alt="減糖健康指數" title="${parseInt(data.indices.GlucoseIndex)}" />
          <h2 class="p16-title">減糖健康指數</h2>
        </div>
        <div class="p16-comment">
          <p class="text-indent">
            減糖健康指數是根據參與醣類代謝的關鍵腸道菌群進行分析。好菌如：艾克曼菌（Akkermansia
            muciniphila），壞菌如：沃氏嗜膽菌（Bilophila
            wadsworthia）等。此關鍵菌群決定醣類吸收代謝及熱量燃燒等生理功能。
          </p>
        </div>
      </div>

      <!-- 油切健康指數 -->
      <div class="p16-section mt-4">
        <div class="p16-meter">
          <img src="./assets/images_v2/數值圖2.png" alt="油切健康指數" title="${parseInt(data.indices.OilIndex)}" />
          <h2 class="p16-title">油切健康指數</h2>
        </div>
        <div class="p16-comment">
          <p class="text-indent">
            油切健康指數是根據參與脂肪代謝的關鍵腸道菌群進行分析。好菌如：腸道羅斯拜瑞氏菌（Roseburia
            intestinalis）等，壞菌如：陰溝腸桿菌（Enterobacter
            cloacae）等。此關鍵菌群決定脂肪吸收、油脂堆積及脂肪燃燒等生理功能。
          </p>
        </div>
      </div>
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
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">六大核心指數</div>

  <div class="p17-content">
    <div class="p17-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="p17-body mt-5">
      <!-- 免疫平衡指數 -->
      <div class="p17-section">
        <div class="p17-meter">
          <img src="./assets/images_v2/數值圖2.png" alt="免疫平衡指數" title="${parseInt(data.indices.ImmuneIndex)}" />
          <h2 class="p17-title">免疫平衡指數</h2>
        </div>
        <div class="p17-comment">
          <p class="text-indent">
            免疫平衡指數是根據參與免疫調節的關鍵菌群進行分析。好菌如：普氏棲糞桿菌（Faecalibacterium
            prausnitzii），壞菌如：活潑瘤胃球菌（Ruminococcus gnavus）。此關鍵菌群決定免疫調節及抑制發炎反應等生理功能。
          </p>
        </div>
      </div>

      <!-- 腸道功能指數 -->
      <div class="p17-section mt-4">
        <div class="p17-meter">
          <img src="./assets/images_v2/數值圖2.png" alt="腸道功能指數" title="${parseInt(
            data.indices.GutFunctionIndex
          )}" />
          <h2 class="p17-title">腸道功能指數</h2>
        </div>
        <div class="p17-comment">
          <p class="text-indent">
            腸道功能指數是根據參與腸道屏障等關鍵腸道菌進行分析。好菌如：雙歧桿菌（Bifidobacterium）等，壞菌如：艱難梭菌（Clostridium
            difficile）等。此關鍵菌群決定腸道屏障細胞再生及黏膜修復等生理功能。
          </p>
        </div>
      </div>
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
