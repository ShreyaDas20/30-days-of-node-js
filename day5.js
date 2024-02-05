const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    const actualExtension = path.extname(filePath);

    if (actualExtension === expectedExtension) {
        console.log("File has the expected extension: ",expectedExtension);
    } else {
        console.log("File does not have the expected extension. Expected: "+expectedExtension+" , Actual: "+actualExtension);
    }
}

checkFileExtension('day5/file1.txt', '.txt');
checkFileExtension('day5\passsport_size.jpg', '.png');
