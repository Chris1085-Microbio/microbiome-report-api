filePath=$1
echo $filePath

shannon=`cat $filePath | jq .indices.GutBiomeIndex  | tr -d '"'`
goodbad=`cat $filePath | jq .indices.GoodBadIndex  | tr -d '"'`
glucose=`cat $filePath | jq .indices.GlucoseIndex  | tr -d '"'`
oil=`cat $filePath | jq .indices.OilIndex  | tr -d '"'`
immuneindex=`cat $filePath | jq .indices.ImmuneIndex  | tr -d '"'`
gifunction=`cat $filePath | jq .indices.GutFunctionIndex  | tr -d '"'`
    
echo $shannon $goodbad $glucose $oil $immuneindex $gifunction
#cd /home/MacGyver/Yu_plotTest
Rscript /Users/chuanfang/Downloads/SixCorepIndicesPlots_new/plot6indices.R $glucose $shannon $goodbad $oil $gifunction $immuneindex 
cp /Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SixCoreIndex.png ~/Desktop
#cp /home/MacGyver/Yu_plotTest/SixCoreIndex.png /opt/lampp/htdocs/microbiome-report-api/assets/images/14.png

Rscript /Users/chuanfang/Library/CloudStorage/OneDrive-個人/microbio/srcipts/distributionPlot.r $filePath
Rscript /Users/chuanfang/Library/CloudStorage/OneDrive-個人/microbio/srcipts/mergeAll.r $filePath
cp /Users/chuanfang/Desktop/8_test.png /Users/chuanfang/chuanfang/Website/microbiome-report-api/assets/images/
cp /Users/chuanfang/Desktop/12_test.png /Users/chuanfang/chuanfang/Website/microbiome-report-api/assets/images/
cp /Users/chuanfang/Desktop/SixCoreIndex.png /Users/chuanfang/chuanfang/Website/microbiome-report-api/assets/images/
