const fs = require('fs');

const read = () => {
  return JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf8'}));
}

const save = (data) => {
  fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
}

module.exports = {
  read,
  save,
}