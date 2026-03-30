filePath=$1
echo $filePath
SIXCORE_PATH="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "${SIXCORE_PATH}")"

shannon=`cat $filePath | jq .indices.GutBiomeIndex  | tr -d '"'`
goodbad=`cat $filePath | jq .indices.GoodBadIndex  | tr -d '"'`
glucose=`cat $filePath | jq .indices.GlucoseIndex  | tr -d '"'`
oil=`cat $filePath | jq .indices.OilIndex  | tr -d '"'`
immuneindex=`cat $filePath | jq .indices.ImmuneIndex  | tr -d '"'`
gifunction=`cat $filePath | jq .indices.GutFunctionIndex  | tr -d '"'`

brain=`cat $filePath | jq .PDAD.score  | tr -d '"'`
heart=`cat $filePath | jq .HeartVessel.score  | tr -d '"'`
lung=`cat $filePath | jq .Lung.score  | tr -d '"'`
liver=`cat $filePath | jq .Liver.score  | tr -d '"'`
kidney=`cat $filePath | jq .Kidney.score  | tr -d '"'`
stomach=`cat $filePath | jq .Stomach.score  | tr -d '"'`
intestine=`cat $filePath | jq .Intestine.score  | tr -d '"'`
immune=`cat $filePath | jq .Immune.score  | tr -d '"'`
obese=`cat $filePath | jq .Obesity.score  | tr -d '"'`
metabolism=`cat $filePath | jq .Metabolism.score  | tr -d '"'`

echo $shannon $goodbad $glucose $oil $immuneindex $gifunction
Rscript ${SIXCORE_PATH}/plot6indices.R $glucose $shannon $goodbad $oil $gifunction $immuneindex

echo "Producing 08 png"
Rscript ${SIXCORE_PATH}/distributionPlot.r $filePath
echo "Producing 12 png"
Rscript ${SIXCORE_PATH}/mergeAll.r $filePath
echo "Producing GoodBadMeters png"
Rscript ${SIXCORE_PATH}/PlotGoodBadMeters.R $shannon $goodbad $glucose $oil $immuneindex $gifunction
echo "Producing RiskMeters png"
Rscript ${SIXCORE_PATH}/PlotRiskMeters.R $brain $heart $lung $liver $kidney $stomach $intestine $immune $obese $metabolism
cp ${SIXCORE_PATH}/8_test.png ${PROJECT_ROOT}/assets/images_v2/
cp ${SIXCORE_PATH}/12_test.png ${PROJECT_ROOT}/assets/images_v2/
cp ${SIXCORE_PATH}/SixCoreIndex.png ${PROJECT_ROOT}/assets/images_v2/
cp -r ${SIXCORE_PATH}/GoodBadMetersResult/ ${PROJECT_ROOT}/assets/images_v2/GoodBadMetersResult/
cp -r ${SIXCORE_PATH}/RiskMetersResult/ ${PROJECT_ROOT}/assets/images_v2/RiskMetersResult/
