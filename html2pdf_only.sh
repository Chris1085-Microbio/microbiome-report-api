#sh /Users/chuanfang/Downloads/SixCorepIndicesPlots_new/plot.sh /Users/chuanfang/chuanfang/Website/microbiome-report-api/json/$1.json

echo "./json/$1.json"
node convertReportAll.js ./json/$1.json
#node html2pdf.js $1
