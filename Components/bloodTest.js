const computed = require('../Components/computed');

const pagination = (newPages) => {
  const htmlTemplate = `<!-- p18 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="titleBoxUpper bg-gold w-100"></div>
          <div class="titleBox bg-gold w-100">
            <h3 class="title-page-text text-center fw-bold w-100">血液生化檢驗</h3>
          </div>
          <div class="titleBoxBottom bg-gold w-100"></div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;

  return htmlTemplate;
};

const table1 = (newPages, jsonFilename, bloodData) => {
  // TODO 可能需要帶入血檢數值
  let htmlTemplate = ``;

  const bloodDataFiltered = bloodData.filter((data) => {
    return data.id === jsonFilename;
  });

  if (bloodDataFiltered.length === 0) {
    htmlTemplate = `<!-- p19 -->
          <page size="A4">
          <header>
            <div class="logo-container"></div>
          </header>

          <div class="d-flex flex-column align-items-center">
            <div class="mt-8 w-100">
              <div class="col-12 page-title-container mb-5">
                <h2 class="page-title">3. 血液生化檢驗</h2>
                <div class="parallelogram mr-2"></div>
                <div class="parallelogram mr-5"></div>
              </div>
            </div>

            <div class="page-container">
              <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>菌相分析 V.S. 生化指數</h4>
              <table class="bloodTest table table-bordered border-dark mt-4">
                <thead class="table-dark">
                  <tr>
                    <th scope="col" class="text-center">相關風險項目</th>
                    <th scope="col" class="text-center">檢測項目</th>
                    <th scope="col" class="text-center">結果</th>
                    <th scope="col" class="text-center">參考值</th>
                    <th scope="col" class="text-center">單位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="4" class="text-center">心血管功能<br />代謝功能<br />肝功能</td>
                    <td>總膽固醇(TC)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">0-5.2</td>
                    <td class="text-center">mmol/L</td>
                  </tr>
                  <tr>
                    <td>甘油三脂(TG)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">0.51-2.3</td>
                    <td class="text-center">mmol/L</td>
                  </tr>
                  <tr>
                    <td>高密度脂蛋白(HDL)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">1.03-1.55</td>
                    <td class="text-center">mmol/L</td>
                  </tr>
                  <tr>
                    <td>低密度脂蛋白(LDL)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">0-4.14</td>
                    <td class="text-center">mmol/L</td>
                  </tr>
                  <tr>
                    <td rowspan="2" class="text-center">代謝功能</td>
                    <td>空腹血糖(GLU)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">4.11-6.05</td>
                    <td class="text-center">mmol/L</td>
                  </tr>
                  <tr>
                    <td>糖化血紅蛋白 (HbA1c)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">4-6.5</td>
                    <td class="text-center">%</td>
                  </tr>
                  <tr>
                    <td rowspan="3" class="text-center">肝功能</td>
                    <td>穀草轉氨酶 (AST)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">0-40</td>
                    <td class="text-center">U/L</td>
                  </tr>
                  <tr>
                    <td>穀丙轉氨酶 (ALT)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">0-41</td>
                    <td class="text-center">U/L</td>
                  </tr>
                  <tr>
                    <td>γ-穀氨醯轉肽酶 (GGT)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">8-50</td>
                    <td class="text-center">U/L</td>
                  </tr>
                  <tr>
                    <td rowspan="3" class="text-center">腎功能</td>
                    <td>尿素氮 (BUN)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">2.5-8.2</td>
                    <td class="text-center">mmol/L</td>
                  </tr>
                  <tr>
                    <td>肌酐 (CR)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">44-115</td>
                    <td class="text-center">μmol/L</td>
                  </tr>
                  <tr>
                    <td>尿酸 (UA)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">91-420</td>
                    <td class="text-center">μmol/L</td>
                  </tr>
                  <tr>
                    <td rowspan="11" class="text-center">免疫功能</td>
                    <td>C-反應蛋白 (CRP)</td>
                    <td class="text-center">-</td>
                    <td class="text-center">0-10</td>
                    <td class="text-center">mg/L</td>
                  </tr>
                  <tr>
                    <td>白細胞</td>
                    <td class="text-center">-</td>
                    <td class="text-center">3.50-9.50</td>
                    <td class="text-center">*10^9/L</td>
                  </tr>
                  <tr>
                    <td>紅細胞</td>
                    <td class="text-center">-</td>
                    <td class="text-center">3.8-5.1</td>
                    <td class="text-center">*10^12/L</td>
                  </tr>
                  <tr>
                    <td>血紅蛋白</td>
                    <td class="text-center">-</td>
                    <td class="text-center">115-150</td>
                    <td class="text-center">g/L</td>
                  </tr>
                  <tr>
                    <td>紅細胞壓積</td>
                    <td class="text-center">-</td>
                    <td class="text-center">35-45</td>
                    <td class="text-center">%</td>
                  </tr>
                  <tr>
                    <td>紅細胞平均體積</td>
                    <td class="text-center">-</td>
                    <td class="text-center">82-100</td>
                    <td class="text-center">fL</td>
                  </tr>
                  <tr>
                    <td>平均血紅蛋白量</td>
                    <td class="text-center">-</td>
                    <td class="text-center">27-34</td>
                    <td class="text-center">pg</td>
                  </tr>
                  <tr>
                    <td>血紅蛋白濃度</td>
                    <td class="text-center">-</td>
                    <td class="text-center">316-354</td>
                    <td class="text-center">g/L</td>
                  </tr>
                  <tr>
                    <td>血小板</td>
                    <td class="text-center">-</td>
                    <td class="text-center">125-350</td>
                    <td class="text-center">*10^9/L</td>
                  </tr>
                  <tr>
                    <td>中性粒細胞%</td>
                    <td class="text-center">-</td>
                    <td class="text-center">40-75</td>
                    <td class="text-center">%</td>
                  </tr>
                  <tr>
                    <td>單核細胞%</td>
                    <td class="text-center">-</td>
                    <td class="text-center">3.00-10.00</td>
                    <td class="text-center">%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <footer>
            <div class="page-number">${newPages}</div>
          </footer>
        </page>`;
  } else {
    htmlTemplate = `<!-- p19 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">3. 血液生化檢驗</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>菌相分析 V.S. 生化指數</h4>
            <table class="bloodTest table table-bordered border-dark mt-4">
              <thead class="table-dark">
                <tr>
                  <th scope="col" class="text-center">相關風險項目</th>
                  <th scope="col" class="text-center">檢測項目</th>
                  <th scope="col" class="text-center">結果</th>
                  <th scope="col" class="text-center">參考值</th>
                  <th scope="col" class="text-center">單位</th>
                </tr>
              </thead>
              <tbody>`;
    const { bloodTemplate } = computed.calcBloodTemplate(bloodDataFiltered);
    htmlTemplate += bloodTemplate;
    htmlTemplate += `
              </tbody>
            </table>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;
  }

  // <tr>
  //   <td rowspan="3" class="text-center">肝功能</td>
  //   <td>肝酵素(AST/SGOT)</td>
  //   <td class="text-center">23</td>
  //   <td class="text-center">10-42</td>
  //   <td class="text-center">U/L</td>
  // </tr>
  // <tr>
  //   <td>肝酵素(AST/SGPT)</td>
  //   <td class="text-center">31</td>
  //   <td class="text-center">10-40</td>
  //   <td class="text-center">U/L</td>
  // </tr>

  //  <tr>
  //     <td rowspan="3" class="text-center">肥胖和代謝功能</td>
  //     <td>飯前血糖(Glucose AC)</td>
  //     <td class="text-center text-danger">105</td>
  //     <td class="text-center">70-99</td>
  //     <td class="text-center">mg/dL</td>
  //   </tr>
  //   <tr>
  //     <td>醣化血色素(Hb A1c)</td>
  //     <td class="text-center">5.5</td>
  //     <td class="text-center">4.0-6.0</td>
  //     <td class="text-center">% of Hb</td>
  //   </tr>

  return htmlTemplate;
};

const table2 = (newPages, jsonFilename, bloodData) => {
  // TODO 可能需要帶入血檢數值
  let htmlTemplate = ``;

  const bloodDataFiltered = bloodData.filter((data) => {
    return data.id === jsonFilename;
  });

  if (bloodDataFiltered.length === 0) {
    htmlTemplate = `<!-- p20 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h2 class="page-title">3. 血液生化檢驗</h2>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <h4 class="py-1 px-2 pageSubtitle"><i class="fas fa-table mr-1"></i>菌相分析 V.S. 生化指數</h4>
            <table class="bloodTest-2 table table-bordered border-dark mt-4">
              <thead class="table-dark">
                <tr>
                  <th scope="col" class="text-center">相關風險項目</th>
                  <th scope="col" class="text-center">檢測項目</th>
                  <th scope="col" class="text-center">結果</th>
                  <th scope="col" class="text-center">參考值</th>
                  <th scope="col" class="text-center">單位</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="14" class="text-center">免疫功能</td>
                  <td>淋巴細胞%</td>
                  <td class="text-center">-</td>
                  <td class="text-center">20-50</td>
                  <td class="text-center">%</td>
                </tr>
                <tr>
                  <td>嗜酸粒細胞%</td>
                  <td class="text-center">-</td>
                  <td class="text-center">0.40-8.00</td>
                  <td class="text-center">%</td>
                </tr>
                <tr>
                  <td>嗜堿粒細胞%</td>
                  <td class="text-center">-</td>
                  <td class="text-center">0.00-1.00</td>
                  <td class="text-center">%</td>
                </tr>
                <tr>
                  <td>中性粒細胞%</td>
                  <td class="text-center">-</td>
                  <td class="text-center">1.80-6.30</td>
                  <td class="text-center">%</td>
                </tr>
                <tr>
                  <td>單核細胞#</td>
                  <td class="text-center">-</td>
                  <td class="text-center">0.10-0.60</td>
                  <td class="text-center">*10^9/L</td>
                </tr>
                <tr>
                  <td>淋巴細胞#</td>
                  <td class="text-center">-</td>
                  <td class="text-center">1.10-3.20</td>
                  <td class="text-center">*10^9/L</td>
                </tr>
                <tr>
                  <td>嗜酸粒細胞#</td>
                  <td class="text-center">-</td>
                  <td class="text-center">0.02-0.52</td>
                  <td class="text-center">*10^9/L</td>
                </tr>
                <tr>
                  <td>嗜堿粒細胞#</td>
                  <td class="text-center">-</td>
                  <td class="text-center">0.00-0.06</td>
                  <td class="text-center">*10^9/L</td>
                </tr>
                <tr>
                  <td>RDW-SD</td>
                  <td class="text-center">-</td>
                  <td class="text-center">33-58</td>
                  <td class="text-center">fL</td>
                </tr>
                <tr>
                  <td>RDW-CV</td>
                  <td class="text-center">-</td>
                  <td class="text-center">9.0-18.0</td>
                  <td class="text-center">%</td>
                </tr>
                <tr>
                  <td>血小板分佈寬度</td>
                  <td class="text-center">-</td>
                  <td class="text-center">9-17</td>
                  <td class="text-center">fL</td>
                </tr>
                <tr>
                  <td>血小板壓積</td>
                  <td class="text-center">-</td>
                  <td class="text-center">0.15-0.3</td>
                  <td class="text-center">%</td>
                </tr>
                <tr>
                  <td>血小板平均壓積</td>
                  <td class="text-center">-</td>
                  <td class="text-center">9-13</td>
                  <td class="text-center">fL</td>
                </tr>
                <tr>
                  <td>大型血小板比率</td>
                  <td class="text-center">-</td>
                  <td class="text-center">13-43</td>
                  <td class="text-center">%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`;
  } else {
    htmlTemplate = ``;
  }
  return htmlTemplate;
};

module.exports = { pagination, table1, table2 };
