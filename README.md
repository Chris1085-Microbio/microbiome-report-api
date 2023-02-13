# Gut Microbiome Report Generation Tool

<p align="center">
  <img src="https://raw.githubusercontent.com/chris1085/microbiome-report-api/main/cover.png"/>
</p>

 ## Outline-目錄
- [Packages-相關套件](#Packages-相關套件)
- [Installation-專案安裝流程](#Installation-專案安裝流程)
- [How To Use-操作手冊](#How-To-Use-操作手冊)

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
* SixCorepIndicesPlots_new: 製作報告圖檔時所需要的R程式

### 網頁內容
* index.html: 靜態模板
* report.html: 該次報告html

### Server HTTP/PORT/防火牆權限設定

### 執行
```
# 匯入Sample CSV，製作腸生態報告
sh html2pdf.sh <SampleInfo CSV Filename> <Edit CSV Filename> 
# Usage: sh html2pdf.sh sampleInfo bloodTest
# NOTICE: SampleInfo, Edit file為生化指數相關檔案名稱，皆需放進csv資料夾
```
