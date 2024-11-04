const path = require('path');
const fileProcessor = require('./FileTransformer.js');

describe('File Processor', () => {
    it('should return the basename of the filename as a module export', () => {
        const filename = '/path/to/my/file.txt';

        const result = fileProcessor.process(null, filename);

        const expectedBasename = JSON.stringify(path.basename(filename));
        expect(result).toBe(`module.exports = ${expectedBasename};`);
    });

    it('should return the correct basename for a different filename', () => {
        const filename = '/another/path/to/test/image.png';

        const result = fileProcessor.process(null, filename);

        const expectedBasename = JSON.stringify(path.basename(filename));
        expect(result).toBe(`module.exports = ${expectedBasename};`);
    });
});
