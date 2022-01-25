const previewText = `      <!-- p2 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">個人化腸生態健康管理</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>
          <div class="mb-5 page-container">
            <!-- <h2 class="guide-title pt-8 mb-5">個人化腸生態健康管理</h2> -->
            <h5 class="content-title mb-3">個人化腸生態健康管理</h5>
            <p class="mb-3 fw-bold text-indent">
              『腸生態健康評估＋腸生態精準調理』是中天生物科技所提供的腸道全方位健康管理方案。不僅利用最先進的次世代基因定序技術，更搭配中天生技獨有的腸道微生態大數據資料庫進行分析，精準地評估您體內的腸道生態健康。
              <br />
            </p>
            <p class="mb-5 text-indent fw-bold">
              經由解碼您的腸道菌相基因，結合您的血液生化生理檢測數據，透過這些資料，中天生物科技將提供您『個人化腸生態健康管理』策略，整合腸道微生態領域的國際研究成果，搭配本公司所研發的『腸生態精準調理』優質保健產品，長期照護您的身體健康。中天生物科技誠摯地將此產品獻給尊榮的您。
            </p>
            <h5 class="content-title mb-3">中天生技獨家技術</h5>
            <p class="mb-5 fw-bold opacity-1 text-indent">
              中天生物科技利用模擬人類腸道菌「厭氧共生發酵技術」及「腸道免疫重建平臺」，獨家研發出多種符合個人腸道生態健康所需的優質保健食品。中天生物科技深信，透過『腸生態精準調理』，一定能有效調理您的腸道微生態。
            </p>
          </div>

          <div class="bg-container">
            <div class="bg-ori bg-p2"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">2</div>
        </footer>
      </page>`

const customerInfo = (data) => {
  // TODO customerInfo 需要更多資訊放在API上實作
  const name = 'TEST'
  const age = 29
  const gender = '男'
  const id = 'F012345678'
  const sampleId = 'GI22-99999-B1'
  const sampleDate = '2022-01-01'
  const reciveDate = '2022-01-02'
  const reportDate = '2022-02-01'
  const sendPlace = 'NTUH'
  const analysisItem = 'FMC'

  let htmlTemplate = `<!-- p3 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center h-100">
          <div class="mt-8 w-100 customer-title">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">客戶訊息</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>
          <div class="d-flex w-100 justify-content-between profile-page">
            <div class="profile-container d-flex justify-content-between">
              <div class="user_profile col-5 pr-2">
                <h3 class="mb-4"><i class="far fa-id-card mr-1"></i>個人資料</h3>
                <ul class="profile-list" id="profile-list">
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-6 text-last-justify">姓名</span>
                    <span class="field col-6 text-center">${name}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-6 text-last-justify">年齡</span>
                    <span class="field col-6 text-center">${age}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-6 text-last-justify">性別</span>
                    <span class="field col-6 text-center">${gender}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-6 text-last-justify">身分證字號</span>
                    <span class="field col-6 text-center">${id}</span>
                  </li>
                </ul>
              </div>

              <div class="sample_profile col-7 pl-2 mb-4">
                <h3 class="mb-4"><i class="fas fa-info-circle mr-1"></i>檢測資料</h3>
                <ul class="profile-list">
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-4 text-last-justify">檢體編號</span>
                    <span class="field col-8 text-center">${sampleId}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-4 text-last-justify">採檢日期</span>
                    <span class="field col-8 text-center">${sampleDate}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-4 text-last-justify">收檢日期</span>
                    <span class="field col-8 text-center">${reciveDate}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-4 text-last-justify">報告日期</span>
                    <span class="field col-8 text-center">${reportDate}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-4 text-last-justify">送檢單位</span>
                    <span class="field col-8 text-center">${sendPlace}</span>
                  </li>
                  <li class="list-item d-flex justify-content-between">
                    <span class="col-4 text-last-justify">檢測項目</span>
                    <span class="field col-8 text-center">${analysisItem}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-container profile-text-container">
            <h3 class="mb-4 text-gold text-start">致顧客的話</h3>
            <p class="fw-bold text-indent customer-text">
              一直以來，中天生物科技深信腸道主宰了人的健康與生命，。所以我們不斷秉持著治療疾病須先從腸道著手，並透過調整、優化改善腸道微生態，帶給人們更健康的身體。也因所處環境、飲食及生活習慣的不同，每個人的腸道有著截然不同的差異，因此利用『個人化腸生態健康管理』策略，希望幫助每個人找出一個最適合自己的營養管理方針。透過閱讀「腸生態健康評估」，您可以清楚了解現階段身體的狀況，讓我們幫您找出最適合的產品；而每日早晚服用「腸生態精準調理」，可以幫助您改善及穩定您的腸道環境，讓身體維持在最佳的狀態。
            </p>
            <p class="fw-bold text-indent customer-text">
              中天生物科技提醒您，如果有感到任何不適的狀況，請諮詢專科醫師做進一步詳細的檢測。腸道微生態環境是動態變化，本評估僅能呈現您檢測當下，腸道微生態及相關功能風險，無法判斷您是否確實罹患疾病，若有疑慮仍需諮詢專科醫師進行詳細檢查。
            </p>
          </div>

          <div class="bg-container">
            <div class="bg-ori bg-p3"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">3</div>
        </footer>
      </page>`

  return htmlTemplate
}

const categoryText = `<!-- p4 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center h-100 p4-container">
          <div class="mt-8 w-100 zi-1">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">目錄</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
            <div class="d-flex page-container">
              <div class="col-6 category-left">
                <h3 class="category-title py-1 px-2 pageSubtitle">1. 腸道健康分析</h3>
                <ul class="category-list mb-4">
                  <li class="list-item">1.1 腸道分析總覽</li>
                  <li class="list-item">1.2 腸道健康指引</li>
                  <li class="list-item">1.3 菌相數量分布圖</li>
                  <li class="list-item">1.4 健康分析指標</li>
                  <li class="list-item">1.5 短鏈脂肪酸合成能力</li>
                  <li class="list-item">1.6 腸型分析</li>
                  <li class="list-item">1.7 腸道菌相總覽</li>
                </ul>
                <h3 class="category-title py-1 px-2 pageSubtitle">2. 六大核心指數</h3>
                <ul class="category-list mb-4">
                  <li class="list-item">2.1 微生態多樣性</li>
                  <li class="list-item">2.2 好壞菌叢指數</li>
                  <li class="list-item">2.3 減糖健康指數</li>
                  <li class="list-item">2.4 油切健康指數</li>
                  <li class="list-item">2.5 免疫平衡指數</li>
                  <li class="list-item">2.6 腸道功能指數</li>
                </ul>
                <h3 class="category-title py-1 px-2 pageSubtitle">3. 血液生化檢驗</h3>
              </div>
              <div class="col-6 category-right">
                <h3 class="category-title py-1 px-2 pageSubtitle">4. 身體功能評估</h3>
                <ul class="category-list mb-4">
                  <li class="list-item">4.1 腦功能健康指數</li>
                  <li class="list-item">4.2 心血管功能健康指數</li>
                  <li class="list-item">4.3 肺功能健康指數</li>
                  <li class="list-item">4.4 肝功能健康指數</li>
                  <li class="list-item">4.5 腎功能健康指數</li>
                  <li class="list-item">4.6 胃功能健康指數</li>
                  <li class="list-item">4.7 腸功能健康指數</li>
                  <li class="list-item">4.8 免疫功能健康指數</li>
                  <li class="list-item">4.9 肥胖健康指數</li>
                  <li class="list-item">4.10 代謝功能健康指數</li>
                </ul>

                <h3 class="category-title py-1 px-2 pageSubtitle">5. 附錄</h3>
                <ul class="category-list mb-4">
                  <li class="list-item">5.1 腸道微生態</li>
                  <li class="list-item">5.2 如何檢測您的腸生態</li>
                  <li class="list-item">5.3 血液生化檢驗臨床意義</li>
                  <li class="list-item">5.4 引用文獻</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-container bg-p4-container">
            <div class="bg-ori bg-p4"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">4</div>
        </footer>
      </page>`

module.exports = { previewText, customerInfo, categoryText }
