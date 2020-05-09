const fs = require('fs');
const path = require('path');

const folderName = './files';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err)
}

console.log(fs.readdirSync(folderName).map(fileName => {
  return path.join(folderName, fileName)
}));

const content = 'Some content!'

fs.writeFile('./files/text.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
});

try {
  fs.writeFileSync('./files/textSync.txt', content);
} catch (err) {
  console.error(err);
}

fs.writeFile('./files/text.txt', content, { flag: 'a+' }, err => {})
fs.appendFile('./files/text.txt', content, { flag: 'a+' }, err => {})

