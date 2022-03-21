const pagination = (pageNum) => {
  return `      <!-- p32 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="titleBoxUpper bg-gold w-100"></div>
          <div class="titleBox bg-gold w-100">
            <h3 class="title-page-text text-center fw-bold w-100">附錄</h3>
          </div>
          <div class="titleBoxBottom bg-gold w-100"></div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`;
};

const gutBiome = (pageNum) => {
  return `<!-- p33 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">5.1 腸道微生態</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <p class="text-indent">
              人體內的腸道存在大量與身體共生的細菌群體，幾乎占了身體微生物總量的99%。而腸道蘊含了兩千多種不同細菌、帶有三百萬不同基因，總數超過百兆，為人體內細胞總數十倍以上。這些種類豐富，型態各異的細菌群體，共同組成了腸道微生態。
            </p>
            <br />
            <br />

            <p class="text-indent">
              同時腸道聚集人體內大約70%的免疫細胞，為人體內最大的免疫器官。腸道微生態這些細菌中，除了對身體有益的好菌、中性菌之外，也含有會致病的壞菌、病原菌。而腸道的免疫系統就是透過和腸道微生態之間彼此互相”訓練”，維持了身體內健康的平衡。
            </p>
            <br />
            <br />

            <p class="text-indent">
              此外，腸道還佈滿了密密麻麻的神經，將匯集的訊息傳送到中樞神經。近期的研究發現腸道微生態與我們的大腦功能有著密切的關聯，憂鬱症、焦慮症、自閉症、慢性疲勞等盛行率極高的身心疾病，都可能與腸道微生態息息相關。
            </p>
            <br />
            <br />

            <p class="text-indent">
              近年來國際研究發現，如果腸道微生態嚴重失衡，可能導致多種嚴重疾病，包括代謝疾病、過敏疾病、以及身體機能出現衰退等各種亞健康的情況。所以腸道可說是百病之源，因此我們更應該好好照顧腸道健康，維護腸道微生態，享受輕鬆、自在，健康的生活。
            </p>
          </div>

          <div class="bg-container">
            <div class="bg-ori bg-p33"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`;
};

const howToGutBiome = (pageNum) => {
  return `<!-- p34 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">5.2 如何檢測您的腸生態</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <p class="text-indent">
              只要採集您所提供的少量糞便檢體，我們就能夠以最高端的分子生物技術，從糞便中純化出微量腸道微生物的DNA。這些DNA上即帶有寶貴、且獨一無二，專屬您的腸道生態資訊。中天生技進一步將以最先進的基因檢測技術『次世代定序』，如同掃描條碼般，系統、快速且精準地掃描並分析您腸道中微生物的DNA，以獲得微生態菌群種類及數量等重要資訊。
            </p>
            <br />
            <br />
            <p class="text-indent">
              而中天生技在獲得專屬您的菌群資訊後，透過您的血液生化檢驗結果，以及飲食、生活習慣、個人健康資訊一同進行大數據分析，就能針對您的腸生態健康情形，提供最適合您的『腸生態健康調理』方案。
            </p>

            <div class="image-container d-flex justify-content-center w-100 mt-4">
              <img src="./assets/images/34.png" alt="" class="bg-p34" />
            </div>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`;
};

const bloodTestMeaning = (pageNum) => {
  return `      <!-- p35 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">5.3 血液生化檢驗臨床意義</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <ol class="meaning-list pl-5">
              <li class="list-item">
                免疫相關:
                血液常規檢測可說明小細胞性貧血、巨幼細胞貧血、惡性貧血、溶血性貧血、白血病、粒細胞減少、血小板減少、淋巴細胞減少，感染等。
              </li>
              <li class="list-item">
                CRP指數可說明組織損傷、感染、腫瘤、心肌梗塞及一系列急慢性炎症性疾病，如風濕性關節炎、全身性血管炎、多肌痛風濕病。
              </li>
              <li class="list-item">
                血脂:
                三甘油脂和LDL升高是導致高血壓、冠心病、心肌梗塞、動脈粥樣硬化的高度危險因素。HDL對血管有保護作用，含量低則易患血管硬化。
              </li>
              <li class="list-item">血糖: 說明是否有低血糖、糖尿病。</li>
              <li class="list-item">
                肝: 肝細胞受損最敏感的指標，升高可提示肝膽系統疾病: 如急性傳染性肝炎、中毒性肝炎、藥物中毒性肝炎等。
              </li>
              <li class="list-item">腎: 可說明有無腎功能損害。</li>
            </ol>
          </div>

          <div class="bg-container">
            <div class="bg-ori bg-p35"></div>
            <div class="bg-mask"></div>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`;
};

const reference = (pageNum) => {
  return `      <!-- p36 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="mt-8 w-100">
            <div class="col-12 page-title-container mb-5">
              <h3 class="page-title">5.4 引用文獻</h3>
              <div class="parallelogram mr-2"></div>
              <div class="parallelogram mr-5"></div>
            </div>
          </div>

          <div class="page-container">
            <ol class="ref-list pl-5">
              <li class="list-item">
                B. J. Callahan et al., DADA2: High-resolution sample inference from Illumina amplicon data. Nat Methods
                13, 581-583 (2016).
              </li>
              <li class="list-item">
                Y. Janssens et al., Disbiome database: linking the microbiome to disease. BMC Microbiol 18, 50 (2018).
              </li>
              <li class="list-item">
                L. Cheng, C. Qi, H. Zhuang, T. Fu, X. Zhang, gutMDisorder: a comprehensive database for dysbiosis of the
                gut microbiota in disorders and interventions. Nucleic Acids Res 48, 7603 (2020).
              </li>
              <li class="list-item">
                E. Bolyen et al., Reproducible, interactive, scalable and extensible microbiome data science using QIIME
                2. Nat Biotechnol 37, 852-857 (2019).
              </li>
              <li class="list-item">
                Y. He et al., Regional variation limits applications of healthy gut microbiome reference ranges and
                disease models. Nat Med 24, 1532-1535 (2018).
              </li>
              <li class="list-item">
                C. Quast et al., The SILVA ribosomal RNA gene database project: improved data processing and web-based
                tools. Nucleic Acids Res 41, D590-596 (2013).
              </li>
              <li class="list-item">
                R. L. Knoll et al., Gut microbiota differs between children with Inflammatory Bowel Disease and healthy
                siblings in taxonomic and functional composition: a metagenomic analysis. Am J Physiol Gastrointest
                Liver Physiol 312, G327-g339 (2017).
              </li>
              <li class="list-item">
                R. L. Knoll et al., Gut microbiota differs between children with Inflammatory Bowel Disease and healthy
                siblings in taxonomic and functional composition: a metagenomic analysis. Am J Physiol Gastrointest
                Liver Physiol 312, G327-g339 (2017).
              </li>
              <li class="list-item">
                M. A. Jackson et al., Gut microbiota associations with common diseases and prescription medications in a
                population-based cohort. Nat Commun 9, 2655 (2018).
              </li>
              <li class="list-item">
                C. L. Schoch et al., NCBI Taxonomy: a comprehensive update on curation, resources and tools. Database
                (Oxford) 2020 (2020).
              </li>
            </ol>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`;
};

const freeDuty = (pageNum) => {
  return `      <!-- p37 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="d-flex flex-column align-items-center">
          <div class="page-container mt-8 duty-container">
            <h2 class="mb-5 text-center">免責聲明暨評估說明</h2>
            <ol class="duty-list pl-5">
              <li class="list-item">
                本評估是透過採集1g以內的糞便，萃取糞便中腸道內細菌的DNA，利用次世代定序法進行高通量基因定序，再使用生物資訊法計算細菌數量，針對細菌菌種、含量、比例、多樣性及身體功能進行健康評估。
              </li>
              <li class="list-item">本評估為非侵入性的採檢方式，可避免侵入性採檢所產生的風險。</li>
              <li class="list-item">並非所有的細菌菌種、含量與身體內所有功能均可透過本健康評估偵測。</li>
              <li class="list-item">
                本健康評估之受測者已知悉並瞭解若受評估人有腹瀉、糞便太稀、糞便呈現水狀或其他不可預料因素等，將會影響健康評估結果。
              </li>
              <li class="list-item">
                本健康評估之受測者已知悉並瞭解若因腹瀉、服用抗生素或檢體品質不符合要求，可能需要重新進行糞便取樣，以期個案評估結果能趨近於統計數據。
              </li>
              <li class="list-item">
                本健康評估之受測者已知悉進行本健康評估，並向販售單位提出問題和疑慮，且獲得說明（包括但不限於瞭解進行本健康評估的必要性、步驟、風險、成功率之相關資訊及選擇其他檢測之風險）。受測者已充分了解上述說明、聲明與切結，並同意自費進行本檢測。受測者並同意進行本健康評估結果需視乎不同身體狀況、年齡及生活習慣等因素或有所不同。
              </li>
              <li class="list-item">
                本健康評估之受測者同意並切結本健康評估只供參考，不得採用此健康評估做為自身診斷、治療或預防任何疾病之用。如受測者逕行採用此健康評估做為自身診斷、治療或預防任何疾病之用，不得將任何醫學結果歸責於負責操作檢測之單位，及對負責操作檢測之單位進行求償。
              </li>
            </ol>
          </div>
        </div>

        <footer>
          <div class="page-number">${pageNum}</div>
        </footer>
      </page>`;
};

module.exports = { pagination, gutBiome, howToGutBiome, bloodTestMeaning, reference, freeDuty };
