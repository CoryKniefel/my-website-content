const axios = require('axios');
const fs = require('fs');

const apiUrl = 'http://127.0.0.1:1337/api';

async function fetchData(contentType) {
  try {
    const url = `${apiUrl}/${contentType}`;
    console.log(`url: ${url}`)
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${contentType}: ${error.message}`);
    return [];
  }
}

async function exportAllContent() {
  const contentTypes = ['skills', 'home-page', 'highlights']; // Add your content types here

  const allContent = {};

  for (const contentType of contentTypes) {
    const data = await fetchData(contentType);
    allContent[contentType] = data;
    fs.writeFileSync(`assets/${contentType}.exported.json`, JSON.stringify(data, null, 2));
  }

  // fs.writeFileSync('exported-content.json', JSON.stringify(allContent, null, 2));
}

exportAllContent();
