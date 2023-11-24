const fs = require('fs');

function readBase64File(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      callback(err, null);
    } else {
      //console.log('File contents:', data);
      callback(null, data);
    }
  });
}

function decodeBase64AndWriteToFile(base64File,filePath) {
  const decodedBuffer = Buffer.from(base64File, 'base64');
  fs.writeFile(filePath, decodedBuffer, (err) => {
    if (err) {
      console.error('Error saving the file:', err);
    } else {
      console.log(`File saved at ${filePath}`);
    }
  });
}

/*
decodeBase64AndWriteToFile(base64Mp3,"tests/audio.mp3");
decodeBase64AndWriteToFile(base64Mp4,"tests/video.mp4");
*/

// Example usage:
readBase64File('testsDecode/inputBase64Files/image.txt', (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    decodeBase64AndWriteToFile(data,"testsDecode/outputBase64Files/image.png");
  }
});

readBase64File('testsDecode/inputBase64Files/file.txt', (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    decodeBase64AndWriteToFile(data,"testsDecode/outputBase64Files/file.pdf");
  }
});

readBase64File('testsDecode/inputBase64Files/audio.txt', (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    decodeBase64AndWriteToFile(data,"testsDecode/outputBase64Files/audio.mp3");
  }
});

readBase64File('testsDecode/inputBase64Files/video.txt', (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    decodeBase64AndWriteToFile(data,"testsDecode/outputBase64Files/video.mp4");
  }
});

