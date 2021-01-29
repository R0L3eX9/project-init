const fs = require('fs');
const filesContent = require('./filesContent.js');

const jsFileContent = filesContent.jsFileContent;
const htmlFileContent = filesContent.htmlFileContent;
const cssFileContent = filesContent.cssFileContent;

const createFiles = () => {
  fs.writeFile('main.js', jsFileContent, (err) => {
    if (err) throw err;
  });
  fs.writeFile('index.html', htmlFileContent, (err) => {
    if (err) throw err;
  });
  fs.writeFile('styles.css', cssFileContent, (err) => {
    if (err) throw err;
  });
  return console.log(`Files created.`);
};

exports.createFiles = createFiles;