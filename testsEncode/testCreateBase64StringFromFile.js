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
  
  readFile("testsEncode/inputFiles/image.png", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      console.log(base64String);
    }
  });

  readFile("testsEncode/inputFiles/file.pdf", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      console.log(base64String);
    }
  });

  readFile("testsEncode/inputFiles/audio.mp3", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      console.log(base64String);
    }
  });

  readFile("testsEncode/inputFiles/video.mp4", (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      // Convert the binary data to a Base64 string
      const base64String = data.toString('base64');
      console.log(base64String);
    }
  });