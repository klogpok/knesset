const Part = require('../models/Part');
class Chapter {

    static async getChapter(partId, chapterId) {
        const part = await Part.getPartById(partId);
        console.log(part.chapters);

        const chapter = {
            ...part.chapters.find(c => c.id === +chapterId),
            partId
        };
        return chapter;
    }
}

module.exports = Chapter