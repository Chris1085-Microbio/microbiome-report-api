const process = require('process');
const args = process.argv;
const fileInputName = args[2];
const fileOutputName = './json/' + args[3] + '.json';

const csv2json = (fileInputName, fileOutputName) => {
  const csvToJson = require('convert-csv-to-json');
  const json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(fileInputName);

  csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
};

csv2json(fileInputName, fileOutputName);
