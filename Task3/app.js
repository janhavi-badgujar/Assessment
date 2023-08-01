const fs = require('fs');

const filePath = 'data.txt';

async function countWords() {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const wordCount = data.trim().split(/\s+/).filter(word => word !== '').length;
    console.log('Total word count:', wordCount);
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

countWords();