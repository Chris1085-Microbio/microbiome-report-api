filePath=$1
echo $filePath
SIXCORE_PATH="/opt/lampp/htdocs/microbiome-report-apiV2_260323/SixCorepIndicesPlots_new_V2"

shannon=`cat $filePath | jq .indices.GutBiomeIndex  | tr -d '"'`
goodbad=`cat $filePath | jq .indices.GoodBadIndex  | tr -d '"'`
glucose=`cat $filePath | jq .indices.GlucoseIndex  | tr -d '"'`
oil=`cat $filePath | jq .indices.OilIndex  | tr -d '"'`
immuneindex=`cat $filePath | jq .indices.ImmuneIndex  | tr -d '"'`
gifunction=`cat $filePath | jq .indices.GutFunctionIndex  | tr -d '"'`
    
echo $shannon $goodbad $glucose $oil $immuneindex $gifunction
#cd /home/MacGyver/Yu_plotTest
Rscript ${SIXCORE_PATH}/plot6indices.R $glucose $shannon $goodbad $oil $gifunction $immuneindex 
# cp ${SIXCORE_PATH}/SixCoreIndex.png ~/Desktop
#cp /home/MacGyver/Yu_plotTest/SixCoreIndex.png /opt/lampp/htdocs/microbiome-report-api/assets/images/14.png

echo "Producing 08 png"
Rscript ${SIXCORE_PATH}/distributionPlot.r $filePath
echo "Producing 12 png"
Rscript ${SIXCORE_PATH}/mergeAll.r $filePath
cp ${SIXCORE_PATH}/8_test.png /opt/lampp/htdocs/microbiome-report-apiV2_260323/assets/images_v2/
cp ${SIXCORE_PATH}/12_test.png /opt/lampp/htdocs/microbiome-report-apiV2_260323/assets/images_v2/
cp ${SIXCORE_PATH}/SixCoreIndex.png /opt/lampp/htdocs/microbiome-report-apiV2_260323/assets/images_v2/
