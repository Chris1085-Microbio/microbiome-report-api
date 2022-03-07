sh /Users/chuanfang/Downloads/SixCorepIndicesPlots_new/plot.sh /Users/chuanfang/chuanfang/Website/microbiome-report-api/json/$1.json

node convertReportAll.js $1
node html2pdf.js $1
