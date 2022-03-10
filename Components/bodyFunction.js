const pagination = (newPages) => {
  const htmlTemplate = `<!-- p21 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="titleBoxUpper bg-black w-100"></div>
          <div class="titleBox bg-black w-100">
            <h3 class="title-page-text text-center fw-bold text-white w-100">身體功能評估</h3>
          </div>
          <div class="titleBoxBottom bg-black w-100"></div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const PDAD = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p22 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.1 腦功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸腦軸線是消化道與腦神經系統雙向溝通的路徑。腸道微菌叢會藉由代謝產物或透過免疫細胞分泌的激素與中樞神經對話。因此腸道微菌叢失衡會直接影響大腦功能及認知行為，誘發大腦神經退化。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病為:阿茲海默症、失智症、帕金森氏症等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">普氏棲糞桿菌 </span>
                    <span class="d-block font-italic">(Faecalibacterium prausnitzii) </span>
                    <span class="d-block">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">雙叉桿菌屬 </span>
                    <span class="d-block font-italic">(Bifidobacterium) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">牙齦卟啉菌 </span>
                    <span class="d-block font-italic">(Porphyromonas gingivalis) </span>
                    <span class="d-block">牙周病菌，產生毒性物質使神經病變，造成神經退化。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">克雷伯氏菌屬 </span>
                    <span class="d-block font-italic">(Klebsiella) </span>
                    <span class="d-block">產生內毒素，造成全身慢性發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">加德納菌屬 </span>
                    <span class="d-block font-italic">(Gardnerella) </span>
                    <span class="d-block">神經退化疾病關鍵菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const cvd = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p23 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.2 心血管功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸道菌叢會將紅肉中的肉鹼代謝成三甲胺，並經由肝臟酵素生成危險因子-氧化三甲胺。此化合物會促進發炎細胞堆積在血管壁;
                增加血小板凝集導致血管粥狀動脈硬化及血栓形成。同時腸道菌叢失衡會影響膽酸代謝，膽固醇合成增加，誘發心血管疾病。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病為:高血壓、高血脂、心肌梗塞等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸桿菌屬 </span>
                    <span class="d-block font-italic">(Intestinibacter) </span>
                    <span class="d-block">改善心血管疾病的關鍵細菌，與血脂及發炎呈現負相關。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">埃格特菌屬 </span>
                    <span class="d-block font-italic">(Eggerthella) </span>
                    <span class="d-block">製造三甲胺，使血管病變、血脂上升及血管阻塞。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">柯林斯菌屬 </span>
                    <span class="d-block font-italic">(Collinsella) </span>
                    <span class="d-block">製造三甲胺，使血管病變、血脂上升及血管阻塞。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">活潑瘤胃球菌 </span>
                    <span class="d-block font-italic">(Ruminococcus gnavus) </span>
                    <span class="d-block">腸道炎症關鍵菌，導致腸道損傷與發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>
`

  return htmlTemplate
}
const lung = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p24 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.3 肺功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸肺軸線是消化道與肺臟雙向溝通的路徑。腸道菌叢失衡，導致壞菌毒素、免疫細胞與刺激發炎的因子經由淋巴系統進入肺部，削弱肺部抵禦外來病原菌的能力，並破壞肺臟的免疫穩定狀態，誘發肺部相關疾病。
              </p>
              <p class="text-indent fw-bold text-dark">
                相關疾病為:病毒性肺炎(COVID-19) 、過敏、哮喘、慢性阻塞性肺疾病等。
              </p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">普氏棲糞桿菌 </span>
                    <span class="d-block font-italic">(Faecalibacterium prausnitzii) </span>
                    <span class="d-block">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">長雙叉桿菌 </span>
                    <span class="d-block font-italic">(Bifidobacterium longum) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">阿托波氏菌屬 </span>
                    <span class="d-block font-italic">(Atopobium) </span>
                    <span class="d-block">過敏性呼吸道疾病指標。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">肺炎鏈球菌 </span>
                    <span class="d-block font-italic">(Streptococcus pneumoniae) </span>
                    <span class="d-block"> 肺部感染病原菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">流感嗜血桿菌 </span>
                    <span class="d-block font-italic">(Haemophilus influenza) </span>
                    <span class="d-block">呼吸道感染病原菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const nafld = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p25 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.4 肝功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸肝軸線是消化道與肝臟雙向溝通的管道，匯集飲食、遺傳和環境因素的影響，將腸道菌叢的代謝產物透過肝門靜脈直接運輸至肝臟；肝臟也會透過膽汁影響腸道。因此腸道菌叢失衡會直接影響腸黏膜及屏障功能，增加微生物和毒素於肝臟堆積，增加肝臟的負擔。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病為:脂肪肝、肝炎、肝功能異常等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">霍氏真桿菌 </span>
                    <span class="d-block font-italic">(FEubacterium hallii) </span>
                    <span class="d-block">促進短鏈脂肪酸生成、增強腸粘膜屏障功能。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">克雷伯氏肺炎菌 </span>
                    <span class="d-block font-italic">(Klebsiella pneumoniae) </span>
                    <span class="d-block">造成脂肪肝、脂肪性肝炎與酒精性肝炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">閃爍梭菌 </span>
                    <span class="d-block font-italic">(Klebsiella pneumonia) </span>
                    <span class="d-block">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">污泥梭菌 </span>
                    <span class="d-block font-italic">(Clostridium sordellii) </span>
                    <span class="d-block">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const ckd = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p26 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.5 腎功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                飲食中蛋白質經特定腸道菌叢分解後，經由肝臟代謝產生尿毒素，包含硫酸吲哚酚及對甲酚硫。兩者皆與慢性腎臟病之病程發展有高度相關。因此當腸道菌叢失衡所衍生之毒素經由腸壁上皮細胞吸收進入血液循環，亦可能增加腎臟負擔。
              </p>
              <p class="text-indent fw-bold text-dark">
                相關疾病為: 急性腎損傷、高血壓、腎結石、腎功能不佳、腎小球發炎。
              </p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">雙叉桿菌屬 </span>
                    <span class="d-block font-italic">(Bifidobacterium) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">真桿菌屬 </span>
                    <span class="d-block font-italic">(Eubacterium) </span>
                    <span class="d-block">增強腸粘膜屏障功能。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">扭鏈瘤胃球菌 </span>
                    <span class="d-block font-italic">(Ruminococcus torques) </span>
                    <span class="d-block">腸道失衡關鍵菌，使腸黏膜屏障功能降低。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">活潑瘤胃球菌 </span>
                    <span class="d-block font-italic">(Ruminococcus gnavus) </span>
                    <span class="d-block">腸道炎症關鍵菌，導致腸道損傷與發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">產甲酸草酸桿菌 </span>
                    <span class="d-block font-italic">(Oxalobacter formigenes) </span>
                    <span class="d-block">導致腎結石之關鍵壞菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const gastitis = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p27 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.6 胃功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸道與胃的主要功能是消化及營養吸收。腸道菌叢失衡時，壞菌藉由其代謝物影響胃部及腸道消化酶的功能，導致胃部粘膜受損及發炎，引起腸胃不適。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病為:胃炎、胃潰瘍、胃癌等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">雙叉桿菌屬 </span>
                    <span class="d-block font-italic">(Bifidobacterium) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">顫桿菌克屬 </span>
                    <span class="d-block font-italic">(Oscillibacter) </span>
                    <span class="d-block">增強腸粘膜屏障功能。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">毛螺菌科 </span>
                    <span class="d-block font-italic">(Lachnoclostridium) </span>
                    <span class="d-block">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">幽門螺桿菌 </span>
                    <span class="d-block font-italic">(Helicobacter pylori) </span>
                    <span class="d-block">胃潰瘍、胃癌致病菌，使胃壁發炎、潰瘍與癌化。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">胃消化鏈球菌 </span>
                    <span class="d-block font-italic">(Peptostreptococcus stomatis) </span>
                    <span class="d-block">導致粘膜發炎關鍵壞菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">混濁戴阿利斯特菌 </span>
                    <span class="d-block font-italic">(Dialister pneumosintes) </span>
                    <span class="d-block">胃炎與胃癌上升指標菌，造成黏膜發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const colitis = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p28 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.7 腸功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸道是人體最重要的免疫器官。健康的腸道，透過好菌附著腸黏膜生長，形成生物膜，避免壞菌生長並加速壞菌排除，為保護我們不受外來飲食或病原菌侵害的屏障系統。當壞菌過多引起菌相失衡，產生之毒素會造成腸黏膜受損，腸通透增加致使壞菌入侵，導致慢性發炎。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病為：腸息肉、潰瘍性大腸炎、腫瘤等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">真桿菌屬 </span>
                    <span class="d-block font-italic">(Eubacterium) </span>
                    <span class="d-block">增強腸粘膜屏障功能。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">具核梭桿菌 </span>
                    <span class="d-block font-italic">(Fusobacterium nucleatum) </span>
                    <span class="d-block">產生毒素使腸道細胞發炎，造成腸炎與腹瀉。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">胃消化鏈球菌 </span>
                    <span class="d-block font-italic">(Peptostreptococcus stomatis) </span>
                    <span class="d-block">導致粘膜發炎關鍵壞菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">扭鏈瘤胃球菌 </span>
                    <span class="d-block font-italic">(Ruminococcus torques) </span>
                    <span class="d-block">腸道失衡關鍵菌，使腸黏膜屏障功能降低。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const immune = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p29 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.8 免疫功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                腸道有廣大的神經網絡，被稱為「第二大腦」。全身70%的免疫細胞存在於腸道，與腸道菌叢交互作用，構築健全的腸道免疫。腸道菌叢所分泌的代謝物及調控的免疫細胞會藉由神經系統、淋巴系統及內分泌系統影響全身的免疫。因此腸道菌叢失衡時，細菌會藉由發炎因子或有害的代謝物引發免疫失調。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病：氣喘、過敏、類風濕性關節炎等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">雙叉桿菌屬 </span>
                    <span class="d-block font-italic">(Bifidobacterium) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">柔嫩梭菌 </span>
                    <span class="d-block font-italic">(Clostridium leptum) </span>
                    <span class="d-block">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">金黃色葡萄球菌 </span>
                    <span class="d-block font-italic">(Staphylococcus aureus) </span>
                    <span class="d-block">伺機性感染菌，易造成軟組織發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">埃格特菌屬 </span>
                    <span class="d-block font-italic">(Eggerthella) </span>
                    <span class="d-block">製造三甲胺，使血管病變、血脂上升及血管阻塞。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">柯林斯菌屬 </span>
                    <span class="d-block font-italic">(Collinsella) </span>
                    <span class="d-block">製造三甲胺，使血管病變、血脂上升及血管阻塞。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const obesity = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p30 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.9 肥胖健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                蔬菜、水果、全穀物富含膳食纖維，腸道菌叢可代謝膳食纖維成短鏈脂肪酸。短鏈脂肪酸除了提供腸道細胞養分外，能增加棕色脂肪細胞，加速能量代謝，並促進腸道激素(腸泌素)釋放，穩定血糖。高脂高糖飲食影響腸道菌叢生態，導致血液及脂肪組織發炎物質升高，促使肥胖相關細菌繁衍，影響體重。
              </p>
              <p class="text-indent fw-bold text-dark">相關疾病：高血壓、第二型糖尿病、脂肪肝、動脈硬化等。</p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">長雙叉桿菌 </span>
                    <span class="d-block font-italic">(Bifidobacterium longum) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">普通擬桿菌 </span>
                    <span class="d-block font-italic">(Bacteroides vulgatus) </span>
                    <span class="d-block">肝臟纖維化上升指標菌，膽汁酸代謝異常及造成發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">閃爍梭菌 </span>
                    <span class="d-block font-italic">(Clostridium scindens) </span>
                    <span class="d-block">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">污泥梭菌 </span>
                    <span class="d-block font-italic">(Clostridium sordellii) </span>
                    <span class="d-block">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}
const metabolism = (data, newPages) => {
  riskContainerTemplate = riskStatus(data)
  const htmlTemplate = `<!-- p31 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">4.10 代謝功能健康指數</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <div class="risk-container d-flex justify-content-around">
              ${riskContainerTemplate}
            </div>
            <div class="w-100 d-flex justify-content-end mt-2">
              <img src="./assets/images/22.png" alt="" class="functionFigure" />
            </div>
            <h4 class="py-1 px-2 pageSubtitle"><i class="far fa-hand-point-right mr-1"></i>風險說明</h4>
            <div class="riskExplain-container">
              <p class="text-indent mt-4">
                代謝症候群與第二型糖尿病息息相關。健康人的腸道菌叢透過短鏈脂肪酸（丁酸），維持腸道屏障，減少胰島素阻抗。當腸道菌叢失衡，丁酸減少，丙酸咪唑增加，導致腸道屏障受損，使微生物內毒素進入全身循環導致慢性炎症及胰島素阻抗，引發高血糖。
              </p>
              <p class="text-indent fw-bold text-dark">
                相關疾病：代謝症候群
                (腹部肥胖、高血壓、高血糖、高密度脂蛋白膽固醇、高三酸甘油脂)、第二型糖尿病、脂肪肝等。
              </p>
            </div>

            <div class="bacteria-container mt-4 d-flex flex-column">
              <div class="bacteriaTitle-container d-flex justify-content-center">
                <h4 class="py-1 pr-2 pl-6 goodBacteriaTitle text-center">關鍵好菌</h4>
                <h4 class="py-1 pr-2 pl-6 badBacteriaTitle text-center">關鍵壞菌</h4>
              </div>

              <div class="bacteriaList-container d-flex justify-content-between">
                <ul class="goodBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-end">
                    <span class="d-block">艾克曼嗜黏蛋白菌 </span>
                    <span class="d-block font-italic">(Akkermansia muciniphila) </span>
                    <span class="d-block">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。 </span>

                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">直腸真桿菌 </span>
                    <span class="d-block font-italic">(Eubacterium rectale) </span>
                    <span class="d-block">增強腸粘膜屏障功能。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-end">
                    <span class="d-block">腸道羅斯拜瑞氏菌 </span>
                    <span class="d-block font-italic">(Roseburia intestinalis) </span>
                    <span class="d-block">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.good[2].status}</span>
                    </div>
                  </li>
                </ul>
                <ul class="badBacteriaList col-6 p-2 mt-3">
                  <li class="list-item text-start">
                    <span class="d-block">活潑瘤胃球菌 </span>
                    <span class="d-block font-italic">(Ruminococcus gnavus) </span>
                    <span class="d-block">腸道炎症生物指標菌，導致腸道損傷與發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[0].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">緩慢愛格氏菌 </span>
                    <span class="d-block font-italic">(Eggerthella lenta) </span>
                    <span class="d-block">產生丙酸咪唑，造成胰島素阻抗，導致醣類代謝異常。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[1].status}</span>
                    </div>
                  </li>
                  <li class="list-item text-start">
                    <span class="d-block">沃氏嗜膽菌 </span>
                    <span class="d-block font-italic">(Bilophila wadsworthia) </span>
                    <span class="d-block">造成脂肪代謝異常、全身性發炎。 </span>
                    <div class="bacteriaScore-container text-center">
                      <span class="bacteriaScore">${data.bad[2].status}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${newPages}</div>
        </footer>
      </page>`

  return htmlTemplate
}

const riskStatus = (data) => {
  // 計算分數成十位數四捨五入，分數0時指數為1
  const score = data.score === 0 ? 1 : Math.ceil(data.score / 10)
  let riskColor = 'medium'
  let riskClass = ''
  let risk = '中度風險'

  // 判斷要填入的資料低、中、高狀況
  if (score > 7) {
    risk = '低度風險'
    riskColor = 'low'
  } else if (score > 3 && score < 8) {
    risk = '中度風險'
    riskColor = 'medium'
  } else {
    risk = '高度風險'
    riskClass = 'text-red'
    riskColor = 'high'
  }

  // 分數及文字區域
  let htmlTemplate = `<div class="indexBtn-container p-1">
                <div class="indexBtn text-center p-2 bg-white fw-bold ${riskClass}">
                  <span>${score} 分</span>
                  <span class="d-block">${risk}</span>
                </div>
              </div>`

  // 人形圖區域第一行
  htmlTemplate += `<div class="riskImg-container d-flex align-items-center">`

  // 人形圖區域（重複）
  for (let index = 1; index <= 10; index++) {
    if (index <= score) {
      htmlTemplate += `<img src="./assets/images/${riskColor}.png" alt="" class="riskImg mx-1" />`
    } else {
      htmlTemplate += `<img src="./assets/images/normal.png" alt="" class="riskImg mx-1" />`
    }
  }

  // 人形圖結尾區域
  htmlTemplate += `</div>`

  return htmlTemplate
}

module.exports = { pagination, PDAD, cvd, lung, nafld, ckd, gastitis, colitis, immune, obesity, metabolism }
