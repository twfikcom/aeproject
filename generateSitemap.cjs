const fs = require('fs');
const path = require('path');

const domain = 'https://mobilemechanic.ae';
const sitemapFile = 'sitemap.xml';

function getHtmlFiles(dir, fileList = []) {
  const skipDirs = ['node_modules', '.git', 'dist'];
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (skipDirs.includes(file) || file.startsWith('.')) continue;
    
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles('.');

let urls = '';
const date = new Date().toISOString().split('T')[0];

htmlFiles.forEach(file => {
  // Normalize path
  let relativePath = file.replace(/\\/g, '/');
  if (relativePath.startsWith('./')) {
    relativePath = relativePath.substring(2);
  }
  
  // Transform 'index.html' to root '/'
  let urlPath = relativePath === 'index.html' ? '' : relativePath;
  // Calculate priority
  let priority = urlPath === '' ? '1.0' : urlPath === 'ar.html' ? '1.0' : '0.8';
  
  urls += `
  <url>
    <loc>${domain}/${urlPath}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(sitemapFile, sitemap.trim());
console.log('Sitemap generated with ' + htmlFiles.length + ' URLs.');
