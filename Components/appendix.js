const pagination = (pageNum) => {
  return `      <!-- p31 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/3分隔頁.jpg" alt="" />
  </div>

  <div class="divider-title-v2">附　錄</div>
</page>`;
};

const gutBiome = (pageNum) => {
  return `<!-- p32 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-spacing">附錄</div>

  <div class="p32-content">
    <div class="p32-header">
      <span class="page-breadcrumb">5.1 腸道微生態</span>
    </div>

    <div class="p32-body mt-5">
      <div class="p32-text-col">
        <p class="p32-text text-indent">
          人體腸道中共生著大量細菌族群，約占全身微生物總量的99%。腸道內蘊含超過兩千種不同細菌，攜帶約三百萬種基因，數量甚至超過百兆，甚至是人體自身細胞總數的十倍。這些種類豐富、型態各異的細菌群體，共同構成了複雜而精密的「腸道微生態系統」。
        </p>

        <p class="p32-text text-indent">
          同時腸道彙集了人體約70%的免疫細胞，是體內最大的免疫器官。腸道微生態中的菌群，除了對身體有益的好菌之外，也包含可能致病的壞菌。腸道免疫系統透過與這些菌叢之間的「互動與訓練」，來維持腸道平衡、促進整體健康。目前文獻也進一步指出，腸道不同菌叢之間不斷的「互動與訓練」，來維持腸道內的健康平衡。
        </p>

        <p class="p32-text text-indent">
          此外，腸道內佈滿密集的神經網絡，能將訊息傳遞至中樞神經系統。近年研究發現，腸道微生態與大腦功能之間存在密切關聯，許多研究亦顯示與憂鬱症、焦慮症、自閉症及慢性疲勞症候群等疾病有高度相關。
        </p>

        <p class="p32-text text-indent">
          國際研究亦指出，腸道微生態嚴重失衡時，可能引發多種疾病，包括代謝功能異常、免疫調節障礙及慢性炎症等。因此，維護腸道微生態的平衡健康，對整體身體健康至關重要，建議定期進行腸道菌相檢測，掌握並改善您的個人腸道健康情形，享受輕鬆、自在且健康的生活。
        </p>
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;
};

const howToGutBiome = (pageNum) => {
  return `<!-- p33 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-spacing">附錄</div>

  <div class="p33-content">
    <div class="p33-header">
      <span class="page-breadcrumb">5.2 如何檢測您的腸生態</span>
    </div>

    <div class="p33-body mt-5">
      <div class="p33-main">
        <div class="p33-text-col">
          <p class="p33-text text-indent">
            只要採集您所提供的少量糞便檢體，我們就能夠以最高端的分子生物技術，從糞便中純化出微量腸道微生物的DNA。這些DNA上即帶有寶貴、且獨一無二，專屬您的腸道生態資訊。中天生技進一步將以最先進的基因檢測技術『次世代定序』，如同掃描條碼般，系統、快速且精準地掃描並分析您腸道中微生物的DNA，以獲得微生態菌群種類及數量等重要資訊。
          </p>

          <p class="p33-text text-indent">
            而中天生技在獲得專屬您的菌群資訊後，透過您的血液生化檢驗結果，以及飲食、生活習慣、個人健康資訊一同進行大數據分析，就能針對您的腸生態健康情形，提供最適合您的「腸生態健康調理」方案。
          </p>
        </div>
      </div>
      <div class="p33-diagram mt-3">
        <img src="./assets/images_v2/5.附錄.png" alt="個人化腸道健康調理方案" />
      </div>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;
};

const bloodTestMeaning = (pageNum) => {
  return `      <!-- p34 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-spacing">附錄</div>

  <div class="p34-content">
    <div class="p34-header">
      <span class="page-breadcrumb">5.3 血液生化檢驗臨床意義</span>
    </div>

    <div class="p34-body mt-5">
      <ol class="p34-list">
        <li>
          <span class="p34-label">免疫相關：</span>血液常規檢測可說明小細胞性貧血、巨幼細胞貧血、惡性貧血、溶血性貧血、白血病、粒細胞減少、血小板減少、淋巴細胞減少，感染等。
        </li>
        <li>
          CRP指數可說明組織損傷、感染、腫瘤、心肌梗塞及一系列急慢性炎症性疾病，如風濕性關節炎、全身性血管炎、多肌痛風濕病。
        </li>
        <li>
          <span class="p34-label">血脂：</span>三甘油脂和LDL升高是導致高血壓、冠心病、心肌梗塞、動脈粥樣硬化的高度危險因素。HDL對血管有保護作用，含量低則易患血管硬化。
        </li>
        <li><span class="p34-label">血糖：</span>說明是否有低血糖、糖尿病。</li>
        <li>
          <span class="p34-label">肝：</span>肝細胞受損最敏感的指標，升高可提示肝膽系統疾病：如急性傳染性肝炎、中毒性肝炎、藥物中毒性肝炎等。
        </li>
        <li><span class="p34-label">腎：</span>可說明有無腎功能損害。</li>
      </ol>
    </div>
  </div>

  <footer>
    <div class="page-number">${pageNum}</div>
  </footer>
</page>`;
};

const reference = (pageNum) => {
  return `      <!-- p35 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-spacing">附錄</div>

  <div class="p35-content">
    <div class="p35-header">
      <span class="page-breadcrumb">5.4 引用文獻</span>
    </div>

    <div class="p35-body mt-5">
      <ol class="p35-list">
        <li>
          B. J. Callahan et al., DADA2: High-resolution sample inference from Illumina amplicon data. Nat Methods 13,
          581-583 (2016).
        </li>
        <li>Y. Janssens et al., Disbiome database: linking the microbiome to disease. BMC Microbiol 18, 50 (2018).</li>
        <li>
          L. Cheng, C. Qi, H. Zhuang, T. Fu, X. Zhang, gutMDisorder: a comprehensive database for dysbiosis of the gut
          microbiota in disorders and interventions. Nucleic Acids Res 48, 7603 (2020).
        </li>
        <li>
          E. Bolyen et al., Reproducible, interactive, scalable and extensible microbiome data science using QIIME 2.
          Nat Biotechnol 37, 852-857 (2019).
        </li>
        <li>
          Y. He et al., Regional variation limits applications of healthy gut microbiome reference ranges and disease
          models. Nat Med 24, 1532-1535 (2018).
        </li>
        <li>
          C. Quast et al., The SILVA ribosomal RNA gene database project: improved data processing and web-based tools.
          Nucleic Acids Res 41, D590-596 (2013).
        </li>
        <li>
          R. L. Knoll et al., Gut microbiota differs between children with Inflammatory Bowel Disease and healthy
          siblings in taxonomic and functional composition: a metagenomic analysis. Am J Physiol Gastrointest Liver
          Physiol 312, G327-g339 (2017).
        </li>
        <li>
          R. L. Knoll et al., Gut microbiota differs between children with Inflammatory Bowel Disease and healthy
          siblings in taxonomic and functional composition: a metagenomic analysis. Am J Physiol Gastrointest Liver
          Physiol 312, G327-g339 (2017).
        </li>
        <li>
          M. A. Jackson et al., Gut microbiota associations with common diseases and prescription medications in a
          population-based cohort. Nat Commun 9, 2655 (2018).
        </li>
        <li>
          C. L. Schoch et al., NCBI Taxonomy: a comprehensive update on curation, resources and tools. Database (Oxford)
          2020 (2020).
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
  return `      <!-- p36 -->
      <page size="A4">
  <div class="page-bg-v2">
    <img src="./assets/images_v2/2內頁.jpg" alt="" />
  </div>

  <div class="page-tab-v2 page-tab-v2-spacing">附錄</div>

  <div class="p36-content">
    <div class="p36-header">
      <!-- <span class="page-breadcrumb">免責聲明暨評估說明</span> -->
    </div>

    <div class="p36-body mt-5">
      <h2 class="p36-title">免責聲明暨評估說明</h2>
      <ol class="p36-list">
        <li>
          本評估是透過採集1g以內的糞便，萃取腸道內細菌的DNA，利用次世代定序法進行高通量基因定序，再使用生物統計法計算細菌菌種、菌量、比值等，針對相關指引及醫療相關文獻之數值，進行評估。
        </li>
        <li>本評估為非侵入性的招募方式，可能受招募入組不能避免的風險。</li>
        <li>並非所有的細菌種類、含量與身體內所有功能均可透過此健康評估預測。</li>
        <li>
          本健康評估之受測者已知悉並瞭解若受評估人有腹瀉、糞便太稀、糞便狀況不理想可能不符合要求，可能需要重新進行採便後，以期相關評估結果能趨近於統計數據。
        </li>
        <li>
          本健康評估之受測者已知悉並瞭解若受評估人有重複的藥物因素，可能影響菌群結果，採樣前一周建議不使用可能影響菌群的藥物，包括停止服用益生菌。
        </li>
        <li>
          本健康評估之受測者已知悉並瞭解若在感染疾病期間進行本健康評估，建議先完成治療後再進行評估，以免影響結果準確性，受測者已完全了解。
        </li>
        <li>
          本健康評估之受測者已知悉並瞭解健康評估結果僅供個人參考，不作為診斷、治療疾病之依據，如有健康疑慮，請諮詢醫療專業人員，並於具備資質之單位進行檢測，以利後續採樣作業流程進行。
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
