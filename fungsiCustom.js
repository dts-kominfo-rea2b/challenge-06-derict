// TODO: import module bila dibutuhkan di sini
const loadFile = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

const { error } = require('console');
// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallback) => {
  const files = [file1, file2, file3];
  files.map((fileName) => {
    loadFile.readFile(fileName, 'utf8', (err, readData) => {
        if(err){
          return err;
        }else{
          const dataSet = JSON.stringify(readData).split(":").pop().split('"');
          fnCallback(dataSet[1].split(" ").pop().replace(/\\/, ''));
        }
      });
    });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
