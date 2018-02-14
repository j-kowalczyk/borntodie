let fs = require('fs'),
    filePath = 'borntodie.js';

fs.unlink(filePath, (error) => {
    if (error) {
        throw error;
    }
    console.log('I was born to die...');
});