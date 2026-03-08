const moment = require('moment');

const previewText = `      <!-- p2 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2">目錄</div>

  <div class="p2-content">
    <div class="p2-header">
      <span class="page-breadcrumb">個人化腸生態健康管理</span>
    </div>

    <div class="p2-body">
      <h2 class="p2-title mb-4">個人化腸生態健康管理</h2>
      <p class="mb-4 text-indent fw-bold">
        『腸生態健康評估＋腸生態精準調理』是中天生物科技所提供的腸道全方位健康管理方案。不僅利用最先進的次世代基因定序技術，更搭配中天生技獨有的腸道微生態大數據資料庫進行分析，精準地評估您體內的腸道生態健康。
      </p>
      <p class="mb-5 text-indent fw-bold">
        經由解碼您的腸道菌相基因，結合您的血液生化生理檢測數據，透過這些資料，中天生物科技將提供您『個人化腸生態健康管理』策略，整合腸道微生態領域的國際研究成果，搭配本公司所研發的『腸生態精準調理』優質保健產品，長期照護您的身體健康。中天生物科技誠摯地將此產品獻給尊榮的您。
      </p>

      <div class="p2-banner">
        <img src="./assets/images_v2/4.目錄插圖.png" alt="" />
      </div>

      <h5 class="p2-subtitle mb-3">中天生技獨家技術</h5>
      <p class="text-indent fw-bold">
        中天生物科技利用模擬人類腸道菌「厭氧共生發酵技術」及「腸道免疫重建平臺」，獨家研發出多種符合個人腸道生態健康所需的優質保健食品。中天生物科技深信，透過『腸生態精準調理』，一定能有效調理您的腸道微生態。
      </p>
    </div>
  </div>

  <footer>
    <div class="page-number">2</div>
  </footer>
</page>`;

const customerInfo = (data, jsonFile, sampleInfoFile, editDate) => {
  // TODO customerInfo 需要更多資訊放在API上實作
  const sampleData = require(`../json/${sampleInfoFile}.json`);
  const filename = jsonFile.split('/').pop().replace(/.json/, '');

  // console.log(filename, sampleData[0].FileName);
  const {
    Name: name,
    Age: birth,
    Gender: gender,
    ID: id,
    Sample: sampleId,
    SamplingDateTime: sampleDate,
    ReceiveDate: reciveDate,
    ReceiveFrom: sendPlace,
    TestMethod: analysisItem
  } = sampleData.find((item) => {
    return item.FileName === filename;
  });

  const receiveAge =
    birth != ''
      ? moment(birth, 'YYYY/MM/DD')
          .month(0)
          .from(moment(reciveDate, 'YYYY/MM/DD').month(0))
          .replace(/ years ago/, '')
      : '';

  const reportDate = editDate === 'N' ? moment().format('YYYY/M/D') : editDate;
  // const reportDate = moment().format('YYYY/M/D');
  // const reportDate = '2023/1/3';

  // const name = '';
  // const receiveAge = '';
  // const gender = '';
  // const id = '';
  // const sampleId = data.customer.id;
  // const sampleDate = '';
  // const reciveDate = '';
  // const reportDate = '';
  // const sendPlace = '';
  // const analysisItem = '';

  let htmlTemplate = `<!-- p3 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2">目錄</div>

  <div class="p3-content">
    <div class="p3-header">
      <span class="page-breadcrumb">客戶訊息</span>
    </div>

    <div class="p3-body">
      <div class="p3-card">
        <h3 class="p3-card-title">檢測資料</h3>
        <div class="p3-profile-grid">
          <div class="p3-profile-col">
            <ul class="p3-profile-list">
              <li class="p3-list-item">
                <span class="p3-label">姓名</span>
                <span class="p3-field">${name}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">年齡</span>
                <span class="p3-field">${receiveAge}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">性別</span>
                <span class="p3-field">${gender}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">身分證字號</span>
                <span class="p3-field">${id}</span>
              </li>
            </ul>
          </div>

          <div class="p3-profile-col">
            <ul class="p3-profile-list">
              <li class="p3-list-item">
                <span class="p3-label">檢體編號</span>
                <span class="p3-field">${sampleId}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">採檢日期</span>
                <span class="p3-field">${sampleDate}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">收檢日期</span>
                <span class="p3-field">${reciveDate}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">報告日期</span>
                <span class="p3-field">${reportDate}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">送檢日期</span>
                <span class="p3-field">${sendPlace}</span>
              </li>
              <li class="p3-list-item">
                <span class="p3-label">檢測項目</span>
                <span class="p3-field">${analysisItem}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="p3-customer-section">
        <h5 class="p3-customer-title mb-3">致顧客的話</h5>
        <p class="fw-bold text-indent mb-3">
          中天生物科技始終相信，腸道是人與生命的關鍵核心。因此，我們乘持「治療疾病，先從腸道著手」的理念，透過調整與優化腸道微生態，協助人們建立更健康的身體狀態。
        </p>
        <p class="fw-bold text-indent mb-3">
          由於每個人所處的環境、飲食與生活習慣不同，腸道菌相也存在顯著差異。我們因此提出「個人化腸生態健康管理」策略，協助每個人找到最適合自己的飲食營養管理方針；透過閱讀「腸生態健康引導」，一定能有效調理您的腸道微生態。
        </p>
        <p class="fw-bold text-indent">
          中天生物科技提醒您，如果有感到任何不適的狀況，請諮詢專科醫師做進一步詳細的檢測。腸道微生態環境是動態變化，本評估僅能呈現您檢測當下，腸道微生態及相關功能風險，無法判斷您是否確實罹患疾病，若有疑慮仍需諮詢專科醫師進行詳細檢查。
        </p>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">3</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const categoryText = `<!-- p4 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2">目錄</div>

  <div class="p4-content">
    <div class="p4-header">
      <span class="page-breadcrumb">目錄</span>
    </div>

    <div class="p4-body">
      <div class="p4-grid">
        <div class="p4-col">
          <div class="p4-block pb-4">
            <div class="p4-section-title">1. 腸道健康分析</div>
            <ul class="p4-list">
              <li>1.1 腸道分析總覽</li>
              <li>1.2 腸道健康指引</li>
              <li>1.3 菌相數量分布圖</li>
              <li>1.4 健康分析指標</li>
              <li>1.5 短鏈脂肪酸合成能力</li>
              <li>1.6 腸型分析</li>
              <li>1.7 腸道菌相總覽</li>
            </ul>
          </div>

          <div class="p4-block pb-4">
            <div class="p4-section-title">2. 六大核心指數</div>
            <ul class="p4-list">
              <li>2.1 微生態多樣性</li>
              <li>2.2 好壞菌叢指數</li>
              <li>2.3 減糖健康指數</li>
              <li>2.4 油切健康指數</li>
              <li>2.5 免疫平衡指數</li>
              <li>2.6 腸道功能指數</li>
            </ul>
          </div>

          <div class="p4-block">
            <div class="p4-section-title">3. 血液生化檢驗</div>
          </div>
        </div>

        <div class="p4-col">
          <div class="p4-block pb-4">
            <div class="p4-section-title">4. 身體功能評估</div>
            <ul class="p4-list">
              <li>4.1 腦功能風險指數</li>
              <li>4.2 心血管功能風險指數</li>
              <li>4.3 肺功能風險指數</li>
              <li>4.4 肝功能風險指數</li>
              <li>4.5 腎功能風險指數</li>
              <li>4.6 胃功能風險指數</li>
              <li>4.7 腸功能風險指數</li>
              <li>4.8 免疫功能風險指數</li>
              <li>4.9 肥胖風險指數</li>
              <li>4.10 代謝功能風險指數</li>
            </ul>
          </div>

          <div class="p4-block pb-5">
            <div class="p4-section-title mt-5 pb-3">5. 附錄</div>
            <ul class="p4-list pb-3">
              <li>5.1 腸道微生態</li>
              <li>5.2 如何檢測您的腸生態</li>
              <li>5.3 血液生化檢驗臨床意義</li>
              <li>5.4 引用文獻</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">4</div>
  </footer>
</page>`;

module.exports = { previewText, customerInfo, categoryText };
