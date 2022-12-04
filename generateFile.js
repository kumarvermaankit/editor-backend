
const path = require('path');
const fs = require('fs');
const {v4:uuid} = require('uuid');


var dircode = path.join(__dirname,"codes");

if(!fs.existsSync(dircode)){
    fs.mkdirSync(dircode, { recursive: true });
}



async function generateFile(format,code) {

    const ID = uuid();
    const filename = `${ID}.${format}`;
    const filepath = path.join(dircode,filename);
    await fs.writeFileSync(filepath,code);
    return filepath;

}

module.exports = {
    generateFile
}

