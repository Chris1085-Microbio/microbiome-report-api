DIR=/Users/chuanfang/Downloads/medical_HP_report_js
SIX_DIR=/Users/chuanfang/chuanfang/Website/microbiome-report-api/SixCorepIndicesPlots_new

for FILE in "$DIR"/*
do
  echo "$FILE"
	fileName=$(basename "$FILE")
	JSON_NAME="${fileName%.*}"

	echo "Six plot $JSON_NAME"
	sh $SIX_DIR/plot.sh $FILE
	sleep 1

#	cp $FILE ./json/
	echo "Covert report  $JSON_NAME"
	node convertReportAll.js $FILE
	sleep 1

	echo "Html2pdf $JSON_NAME"
	node html2pdf.js $JSON_NAME	
	sleep 1

done


#sh /Users/chuanfang/Downloads/SixCorepIndicesPlots_new/plot.sh /Users/chuanfang/chuanfang/Website/microbiome-report-api/json/$1.json

#node convertReportAll.js $1
#node html2pdf.js $1
