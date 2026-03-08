const bacteriaList = require('../json/bacteriaList.json');

const pagination = (newPages) => {
  const htmlTemplate = `<!-- p20 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/3分隔頁.jpg" alt="" />
  </div>

  <div class="divider-title-v2">身體功能評估</div>
</page>`;

  return htmlTemplate;
};

const PDAD = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'PDAD');

  const htmlTemplate = `<!-- p21 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">腦功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸腦軸線是消化道與腦神經系統雙向溝通的路徑。腸道微菌叢會藉由代謝產物或透過免疫細胞分泌的激素與中樞神經對話。因此腸道微菌叢失衡會直接影響大腦功能及認知行為，誘發大腦神經退化。
            </p>
            <p class="text-indent mt-4">相關疾病為：阿茲海默症、失智症、帕金森氏症等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">艾克曼嗜黏蛋白菌</span>
          <span class="bf-item-sci">(Akkermansia muciniphila)</span>
          <span class="bf-item-desc">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">普氏棲糞桿菌</span>
          <span class="bf-item-sci">(Faecalibacterium prausnitzii)</span>
          <span class="bf-item-desc">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">雙叉桿菌屬</span>
          <span class="bf-item-sci">(Bifidobacterium)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">牙齦卟啉菌</span>
          <span class="bf-item-sci">(Porphyromonas gingivalis)</span>
          <span class="bf-item-desc">牙周病菌，產生毒性物質使神經病變，造成神經退化。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">孿生球菌屬</span>
          <span class="bf-item-sci">(Gemella)</span>
          <span class="bf-item-desc">神經退化疾病關鍵菌。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">加德納菌屬</span>
          <span class="bf-item-sci">(Gardnerella)</span>
          <span class="bf-item-desc">神經退化疾病關鍵菌。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const cvd = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'HeartVessel');

  const htmlTemplate = `<!-- p22 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">心血管功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸道菌叢會將紅肉中的肉鹼代謝成三甲胺，並經由肝臟酵素生成危險因子-氧化三甲胺。此化合物會促進發炎細胞堆積在血管壁，增加血小板凝集導致血管粥狀動脈硬化及血栓形成。同時腸道菌叢失衡會影響膽酸代謝，膽固醇合成增加，誘發心血管疾病。
            </p>
            <p class="text-indent mt-4">相關疾病為：高血壓、高血脂、心肌梗塞等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">艾克曼嗜黏蛋白菌</span>
          <span class="bf-item-sci">(Akkermansia muciniphila)</span>
          <span class="bf-item-desc">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">腸桿菌屬</span>
          <span class="bf-item-sci">(Intestinibacter)</span>
          <span class="bf-item-desc">改善心血管疾病的關鍵細菌，與血脂及發炎呈現負相關。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">埃格特菌屬</span>
          <span class="bf-item-sci">(Eggerthella)</span>
          <span class="bf-item-desc">製造三甲胺，使血管病變、血脂上升及血管阻塞。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">柯林斯菌屬</span>
          <span class="bf-item-sci">(Collinsella)</span>
          <span class="bf-item-desc">製造三甲胺，使血管病變、血脂上升及血管阻塞。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">活潑瘤胃球菌</span>
          <span class="bf-item-sci">(Ruminococcus gnavus)</span>
          <span class="bf-item-desc">腸道炎症關鍵菌，導致腸道損傷與發炎。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const lung = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Lung');

  const htmlTemplate = `<!-- p23 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">肺功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸肺軸線是消化道與肺臟雙向溝通的路徑。腸道菌叢失衡，導致壞菌毒素、免疫細胞與刺激發炎的因子經由淋巴系統進入肺部，削弱肺部抵禦外來病原菌的能力，並破壞肺臟的免疫穩定狀態，誘發肺部相關疾病。
            </p>
            <p class="text-indent mt-4">相關疾病為：病毒性肺炎(COVID-19)、過敏、哮喘、慢性阻塞性肺疾病等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">普氏棲糞桿菌</span>
          <span class="bf-item-sci">(Faecalibacterium prausnitzii)</span>
          <span class="bf-item-desc">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">長雙叉桿菌</span>
          <span class="bf-item-sci">(Bifidobacterium longum)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">阿托波氏菌屬</span>
          <span class="bf-item-sci">(Atopobium)</span>
          <span class="bf-item-desc">過敏性呼吸道疾病指標。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">肺炎鏈球菌</span>
          <span class="bf-item-sci">(Streptococcus pneumoniae)</span>
          <span class="bf-item-desc">肺部感染病原菌。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">流感嗜血桿菌</span>
          <span class="bf-item-sci">(Haemophilus influenza)</span>
          <span class="bf-item-desc">呼吸道感染病原菌。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const nafld = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Liver');

  const htmlTemplate = `<!-- p24 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">肝功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸肝軸線是消化道與肝臟雙向溝通的管道，匯集飲食、遺傳和環境因素的影響，將腸道菌叢的代謝產物透過肝門靜脈直接運輸至肝臟；肝臟也會透過膽汁影響腸道。因此腸道菌叢失衡會直接影響腸黏膜及屏障功能，增加微生物和毒素於肝臟堆積，增加肝臟的負擔。
            </p>
            <p class="text-indent mt-4">相關疾病為：脂肪肝、肝炎、肝功能異常等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">人羅斯氏菌</span>
          <span class="bf-item-sci">(Roseburia hominis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">霍氏真桿菌</span>
          <span class="bf-item-sci">(Eubacterium hallii)</span>
          <span class="bf-item-desc">促進短鏈脂肪酸生成、增強腸粘膜屏障功能。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">克雷伯氏肺炎菌</span>
          <span class="bf-item-sci">(Klebsiella pneumoniae)</span>
          <span class="bf-item-desc">造成脂肪肝、脂肪性肝炎與酒精性肝炎。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">閃爍梭菌</span>
          <span class="bf-item-sci">(Clostridium scindens)</span>
          <span class="bf-item-desc">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">污泥梭菌</span>
          <span class="bf-item-sci">(Clostridium sordellii)</span>
          <span class="bf-item-desc">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const ckd = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Kidney');

  const htmlTemplate = `<!-- p25 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">腎功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              飲食中蛋白質經特定腸道菌叢分解後，經由肝臟代謝產生尿毒素，包含硫酸吲哚酚及對甲酚硫。兩者皆與慢性腎臟病之病程發展有高度相關。因此當腸道菌叢失衡所衍生之毒素經由腸壁上皮細胞吸收進入血液循環，亦可能增加腎臟負擔。
            </p>
            <p class="text-indent mt-4">相關疾病為：急性腎損傷、高血壓、腎結石、腎功能不佳、腎小球發炎。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">艾克曼嗜黏蛋白菌</span>
          <span class="bf-item-sci">(Akkermansia muciniphila)</span>
          <span class="bf-item-desc">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">雙叉桿菌屬</span>
          <span class="bf-item-sci">(Bifidobacterium)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">真桿菌屬</span>
          <span class="bf-item-sci">(Eubacterium)</span>
          <span class="bf-item-desc">增強腸粘膜屏障功能。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">扭鏈瘤胃球菌</span>
          <span class="bf-item-sci">(Ruminococcus torques)</span>
          <span class="bf-item-desc">腸道失衡關鍵菌，使腸黏膜屏障功能降低。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">活潑瘤胃球菌</span>
          <span class="bf-item-sci">(Ruminococcus gnavus)</span>
          <span class="bf-item-desc">腸道炎症關鍵菌，導致腸道損傷與發炎。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">產甲酸草酸桿菌</span>
          <span class="bf-item-sci">(Oxalobacter formigenes)</span>
          <span class="bf-item-desc">導致腎結石之關鍵壞菌。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const gastitis = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Stomach');

  const htmlTemplate = `<!-- p26 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">胃功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸道與胃的主要功能是消化及營養吸收。腸道菌叢失衡時，壞菌藉由其代謝物影響胃部及腸道消化酶的功能，導致胃部粘膜受損及發炎，引起腸胃不適。
            </p>
            <p class="text-indent mt-4">相關疾病為：胃炎、胃潰瘍、胃癌等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">雙叉桿菌屬</span>
          <span class="bf-item-sci">(Bifidobacterium)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">顫桿菌克屬</span>
          <span class="bf-item-sci">(Oscillibacter)</span>
          <span class="bf-item-desc">增強腸粘膜屏障功能。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">毛螺菌科</span>
          <span class="bf-item-sci">(Lachnoclostridium)</span>
          <span class="bf-item-desc">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">幽門螺桿菌</span>
          <span class="bf-item-sci">(Helicobacter pylori)</span>
          <span class="bf-item-desc">胃潰瘍、胃癌致病菌，使胃壁發炎、潰瘍與癌化。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">胃消化鏈球菌</span>
          <span class="bf-item-sci">(Peptostreptococcus stomatis)</span>
          <span class="bf-item-desc">導致粘膜發炎關鍵壞菌。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">混濁戴阿利斯特菌</span>
          <span class="bf-item-sci">(Dialister pneumosintes)</span>
          <span class="bf-item-desc">胃炎與胃癌上升指標菌，造成黏膜發炎。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const colitis = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Intestine');

  const htmlTemplate = `<!-- p27 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">腸功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸道是人體最重要的免疫器官。健康的腸道，透過好菌附著腸黏膜生長，形成生物膜，避免壞菌生長並加速壞菌排除，為保護我們不受外來飲食或病原菌侵害的屏障系統。當壞菌過多引起菌相失衡，產生之毒素會造成腸黏膜受損，腸通透增加致使壞菌入侵，導致慢性發炎。
            </p>
            <p class="text-indent mt-4">相關疾病為：腸息肉、潰瘍性大腸炎、腫瘤等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">艾克曼嗜黏蛋白菌</span>
          <span class="bf-item-sci">(Akkermansia muciniphila)</span>
          <span class="bf-item-desc">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">真桿菌屬</span>
          <span class="bf-item-sci">(Eubacterium)</span>
          <span class="bf-item-desc">增強腸粘膜屏障功能。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">具核梭桿菌</span>
          <span class="bf-item-sci">(Fusobacterium nucleatum)</span>
          <span class="bf-item-desc">產生毒素使腸道細胞發炎，造成腸炎與腹瀉。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">微小微單胞菌</span>
          <span class="bf-item-sci">(Parvimonas micra)</span>
          <span class="bf-item-desc">產生毒素使腸道細胞發炎，造成腸炎與腹瀉。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">扭鏈瘤胃球菌</span>
          <span class="bf-item-sci">(Ruminococcus torques)</span>
          <span class="bf-item-desc">腸道失衡關鍵菌，使腸黏膜屏障功能降低。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const immune = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Immune');

  const htmlTemplate = `<!-- p28 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">免疫功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              腸道有廣大的神經網絡，被稱為「第二大腦」。全身70%的免疫細胞存在於腸道，與腸道菌叢交互作用，構築健全的腸道免疫。腸道菌叢所分泌的代謝物及調控的免疫細胞會藉由神經系統、淋巴系統及內分泌系統影響全身的免疫。因此腸道菌叢失衡時，細菌會藉由發炎因子或有害的代謝物引發免疫失調。
            </p>
            <p class="text-indent mt-4">相關疾病：氣喘、過敏、類風濕性關節炎等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">雙叉桿菌屬</span>
          <span class="bf-item-sci">(Bifidobacterium)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">柔嫩梭菌</span>
          <span class="bf-item-sci">(Clostridium leptum)</span>
          <span class="bf-item-desc">促進短鏈脂肪酸生成、提供腸道細胞能量，抑制壞菌。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">金黃色葡萄球菌</span>
          <span class="bf-item-sci">(Staphylococcus aureus)</span>
          <span class="bf-item-desc">伺機性感染菌，易造成軟組織發炎。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">遲緩埃格特菌</span>
          <span class="bf-item-sci">(Eggerthella lenta)</span>
          <span class="bf-item-desc">製造三甲胺，使血管病變、血脂上升及血管阻塞。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">產氣柯林斯菌</span>
          <span class="bf-item-sci">(Collinsella aerofaciens)</span>
          <span class="bf-item-desc">製造三甲胺，使血管病變、血脂上升及血管阻塞。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const obesity = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Obesity');

  const htmlTemplate = `<!-- p29 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">肥胖風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              蔬菜、水果、全穀物富含膳食纖維，腸道菌叢可代謝膳食纖維成短鏈脂肪酸。短鏈脂肪酸除了提供腸道細胞養分外，能增加棕色脂肪細胞，加速能量代謝，並促進腸道激素（腸泌素）釋放，穩定血糖。高脂高糖飲食影響腸道菌叢生態，導致血液及脂肪組織發炎物質升高，促使肥胖相關細菌繁衍，影響體重。
            </p>
            <p class="text-indent mt-4">相關疾病：高血壓、第二型糖尿病、脂肪肝、動脈硬化等。</p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">艾克曼嗜黏蛋白菌</span>
          <span class="bf-item-sci">(Akkermansia muciniphila)</span>
          <span class="bf-item-desc">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">長雙叉桿菌</span>
          <span class="bf-item-sci">(Bifidobacterium longum)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">普通擬桿菌</span>
          <span class="bf-item-sci">(Bacteroides vulgatus)</span>
          <span class="bf-item-desc">肝臟纖維化上升指標菌，膽汁酸代謝異常及造成發炎。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">閃爍梭菌</span>
          <span class="bf-item-sci">(Clostridium scindens)</span>
          <span class="bf-item-desc">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">污泥梭菌</span>
          <span class="bf-item-sci">(Clostridium sordellii)</span>
          <span class="bf-item-desc">高脂飲食導致此菌增生，造成肝臟發炎與纖維化。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const metabolism = (data, newPages) => {
  const { goodBacteriaStatus, badBacteriaStatus } = checkBacteriaStatus(data, 'Metabolism');

  const htmlTemplate = `<!-- p30 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-top28">身體功能評估</div>

  <div class="bf-content">
    <div class="bf-header">
      <span class="page-breadcrumb">指數說明</span>
    </div>

    <div class="bf-body mt-5">
      <div class="bf-top-row mt-5">
        <div class="bf-top-left">
          <h2 class="bf-title">代謝功能風險說明</h2>
          <div class="bf-risk mt-3">
            <p class="text-indent">
              代謝症候群與第二型糖尿病息息相關。健康人的腸道菌叢透過短鏈脂肪酸（丁酸），維持腸道屏障，減少胰島素阻抗。當腸道菌叢失衡，丁酸減少，丙酸咪唑增加，導致腸道屏障受損，使微生物內毒素進入全身循環導致慢性炎症及胰島素阻抗，引發高血糖。
            </p>
            <p class="text-indent mt-4">
              相關疾病：代謝症候群
              (腹部肥胖、高血壓、高血糖、高密度脂蛋白膽固醇、高三酸甘油脂)、第二型糖尿病、脂肪肝等。
            </p>
          </div>
        </div>
        <div class="bf-thermometer">
          <img src="./assets/images_v2/數值圖3.png" alt="風險指數" />
        </div>
      </div>

      <div class="bf-bacteria-overlay">
        <img src="./assets/images_v2/數值圖4.png" alt="關鍵好壞菌" />

        <div class="bf-bact-slot bf-bact-good-1">
          <span class="bf-item-name">艾克曼嗜黏蛋白菌</span>
          <span class="bf-item-sci">(Akkermansia muciniphila)</span>
          <span class="bf-item-desc">促進腸道粘膜免疫力與障蔽功能、調節代謝與菌叢平衡。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-2">
          <span class="bf-item-name"> 直腸真桿菌</span>
          <span class="bf-item-sci">(Eubacterium rectale)</span>
          <span class="bf-item-desc">增強腸粘膜屏障功能。</span>
        </div>
        <div class="bf-bact-slot bf-bact-good-3">
          <span class="bf-item-name">腸道羅斯拜瑞氏菌</span>
          <span class="bf-item-sci">(Roseburia intestinalis)</span>
          <span class="bf-item-desc">促進調節性T細胞功能、腸道免疫平衡與減少脂肪堆積。</span>
        </div>

        <div class="bf-bact-slot bf-bact-bad-1 bad">
          <span class="bf-item-name">活潑瘤胃球菌</span>
          <span class="bf-item-sci">(Ruminococcus gnavus)</span>
          <span class="bf-item-desc">腸道炎症生物指標菌，導致腸道損傷與發炎。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-2 bad">
          <span class="bf-item-name">緩慢愛格氏菌</span>
          <span class="bf-item-sci">(Eggerthella lenta)</span>
          <span class="bf-item-desc">產生丙酸咪唑，造成胰島素阻抗，導致醣類代謝異常。</span>
        </div>
        <div class="bf-bact-slot bf-bact-bad-3 bad">
          <span class="bf-item-name">沃氏嗜膽菌</span>
          <span class="bf-item-sci">(Bilophila wadsworthia)</span>
          <span class="bf-item-desc">造成脂肪代謝異常、全身性發炎。</span>
        </div>

        <div class="bf-score-dot good bf-score-g1">${goodBacteriaStatus[0]}</div>
        <div class="bf-score-dot good bf-score-g2">${goodBacteriaStatus[1]}</div>
        <div class="bf-score-dot good bf-score-g3">${goodBacteriaStatus[2]}</div>
        <div class="bf-score-dot bad bf-score-b1">${badBacteriaStatus[0]}</div>
        <div class="bf-score-dot bad bf-score-b2">${badBacteriaStatus[1]}</div>
        <div class="bf-score-dot bad bf-score-b3">${badBacteriaStatus[2]}</div>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${newPages}</div>
  </footer>
</page>`;

  return htmlTemplate;
};

const checkBacteriaStatus = (data, bodyName) => {
  let goodBacteriaStatus = [];
  let badBacteriaStatus = [];

  for (let i = 0; i < 3; i++) {
    const goodBacteria = data.good.find((bacteria) => {
      return bacteria.name === bacteriaList[bodyName].good[i].name;
    }) || { status: '偏低' };

    const badBacteria = data.bad.find((bacteria) => {
      return bacteria.name === bacteriaList[bodyName].bad[i].name;
    }) || { status: '偏低' };

    goodBacteriaStatus.push(goodBacteria.status);
    badBacteriaStatus.push(badBacteria.status);
  }
  return { goodBacteriaStatus, badBacteriaStatus };
};

module.exports = { pagination, PDAD, cvd, lung, nafld, ckd, gastitis, colitis, immune, obesity, metabolism };
