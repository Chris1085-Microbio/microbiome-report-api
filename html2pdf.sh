# 匯入Sample CSV，製作腸生態報告
# Usage: sh html2pdf.sh 1230_sampleInfo 

DIR=${PWD}/data
SIX_DIR=/Users/chuanfang/chuanfang/Website/microbiome-report-api/SixCorepIndicesPlots_new
SAMPLE_INFO_FILE=$1
DATE=$(date '+%Y')

mkdir -p ./csv ./data ./json
mkdir -p reports/${DATE}/pdf/

node ./scripts/csv2json.js csv/${SAMPLE_INFO_FILE}.csv ${SAMPLE_INFO_FILE}

for FILE in "$DIR"/*
do
  echo "$FILE"
	FILENAME=$(basename "$FILE")
	JSON_NAME="${FILENAME%.*}"

	echo "Six plot $JSON_NAME"
	sh $SIX_DIR/plot.sh $FILE
	sleep 1

	echo "Covert report  $JSON_NAME"
	node ./scripts/convertReportAll.js $FILE $SAMPLE_INFO_FILE
	sleep 3

	echo "Html2pdf $JSON_NAME"
	node ./scripts/html2pdf.js $JSON_NAME	
	sleep 1

done

rm Rplots.pdf
