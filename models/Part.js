const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs');

class Part {  
    

    static getAllParts() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'knesset.json'), 'utf-8', (err, content) => {
                if (err) reject(err);
                else {
                    resolve(JSON.parse(content));
                    // console.log(content);                    
                }
            });
        });
    }

    static async getPartById(id) {
        const parts = await this.getAllParts();
        const part = parts.find(part => part.id === +id);
        part.chapters.forEach(c => {
            c.partId = id;
        })
        return part;
    }
}

module.exports = Part;
