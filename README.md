# Gut Microbiome Report Generation Tool

<p align="center">
  <img src="https://raw.githubusercontent.com/chris1085/microbiome-report-api/main/cover.png"/>
</p>

 ## Outline-目錄
- [Environment](#Environment)
- [Packages-相關套件](#Packages-相關套件)
- [Installation-專案安裝流程](#Installation-專案安裝流程)
- [How To Use-操作手冊](#How-To-Use-操作手冊)
- [後續操作流程](#後續操作流程)
- [注意事項](#注意事項)

## Environment

* CentOS 8
* conda qiime2-2021.11

## Packages-相關套件
* convert-csv-to-json - v1.3.3
* express - v4.17.2
* jquery - v3.6.0
* moment - v2.29.3
* node-sass - v7.0.3
* puppeteer - v13.0.1

## Installation-專案安裝流程

### 專案下載
```
git clone https://github.com/Chris1085-Microbio/microbiome-report-api.git
```
### 移動資料夾路徑並安裝相關套件
```
cd microbiome-report-api
npm install  #(請參考 package.json)
```

## How To Use-操作手冊
### 資料夾內容
* assets: 靜態網頁模版(如未改版不需要動，由`microbiome-report`專案透過`Gulp`生成)
* Components: 動態網頁模版(動態匯入檢體資訊及結果)
* data: 待產生報告的檢體結果(通常為該次上機所有結果)
* csv: 待產生報告的檢體資訊
* json: 待產生報告的檢體資訊JSON(透過csv2json產生之結果)
* reports: 各檢體轉檔完成之PDF(按照年份)
* scripts: 自動化執行時所需要的程式檔
  * bactDiff.js: 計算超出Abnormal、Normal的菌及數量。
  * convertReportAll.js: 執行靜態網頁轉動態網頁的主要js檔。
  * csv2json.js: 簡單轉csv2json的小程式。
  * html2pdf.js: 連接外網及http或者preview live時，將html轉至pdf。
* SixCorepIndicesPlots_new: 製作報告圖檔時所需要的R程式。
* compared: bactDiff計算出來的結果。
* html2pdf.sh: 批次自動化產生程式。 

### 網頁內容
* index.html: 靜態模板
* report.html: 該次報告html

### Server HTTP/PORT/防火牆權限設定

### 專案邏輯
1. 轉換sampleInfo.csv：轉換內容為報告客戶欄位所對應之內容
2. 轉換生化指數內容：檢查轉檔的報告中是否有需要修改的生化指數內容，若無，提供空資料
3. R功能出相關統計圖表
4. 動態變更報告模板內容
5. 轉換報告靜態網頁至PDF

### 操作步驟
1. 將各檢體菌相json檔放至data資料夾
2. 將sample Info(各檢體資訊)放至csv資料夾
3. 將bloodTest(生化數值修改清單，若無保留第一行，其餘刪除)放至csv資料夾
4. 執行html2pdf.sh

```
cd /opt/lampp/htdocs/microbiome-report-api
# 匯入Sample CSV，製作腸生態報告
sh html2pdf.sh <SampleInfo CSV Filename> <Edit CSV Filename> 
# Usage: sh html2pdf.sh sampleInfo bloodTest
# NOTICE: SampleInfo, Edit file為生化指數相關檔案名稱，皆需放進csv資料夾
```

## 後續操作流程
### 排程寄送報告
1. 打開寄送``範例.xlsm``
2. 修正對應欄位內容

|  寄送姓名  |  Email  |  附件1檔案路徑  |  附件2檔案路徑  |  附件3檔案路徑(以此類推)  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| 王小明  | smallming@gmail.com | /file1/path.pdf | /file2/path.pdf | /file3/path.pdf
| 王大明  | bigming@gmail.com | /file1/path.pdf | /file2/path.pdf | /file3/path.pdf
3. 確認outlook正常執行
4. ``範例.xlsm``中執行巨集等待報告寄出

## 注意事項
1. bloodTest.csv 中文須為utf-8，不然會造成亂碼。
2. ``html2pdf.sh``中可以修改報告日期時間，"N"為不修改，其餘時間或文字格式會直接帶入
3. 轉PDF過程需要連網
4. Check firewall關閉、httpd執行中