const fs = require('fs');
/*
const imagePath = 'testsEncode/inputFiles/image.png';
const imageBuffer = fs.readFileSync(imagePath);
const base64String = imageBuffer.toString('base64');
console.log('Base64 encoded image:\n', base64String);
*/

function readFile(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }

  function encodeFileAndWriteToBase64File(data,filePath) {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error('Error saving the file:', err);
      } else {
        console.log(`File saved at ${filePath}`);
      }
    });
  }
  
  readFile("testsEncode/inputFiles/image.png", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      //console.log(base64String);
      encodeFileAndWriteToBase64File(base64String,"testsEncode/outputFiles/image.txt");
    }
  });

  readFile("testsEncode/inputFiles/file.pdf", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      //console.log(base64String);
      encodeFileAndWriteToBase64File(base64String,"testsEncode/outputFiles/file.txt");
    }
  });

  readFile("testsEncode/inputFiles/audio.mp3", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      //console.log(base64String);
      encodeFileAndWriteToBase64File(base64String,"testsEncode/outputFiles/audio.txt");
    }
  });

  readFile("testsEncode/inputFiles/video.mp4", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      //console.log(base64String);
      encodeFileAndWriteToBase64File(base64String,"testsEncode/outputFiles/video.txt");
    }
  });