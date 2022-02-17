/**
 * 下载文件
 */
const path = require('path');
const fs = require('fs');
const download = require('download');

let url = process.argv[2];
console.log('url:', url);

let pathname = new URL(url).pathname.substring(1);
console.log('pathname:', pathname);

// console.log(url_);
let target_dir = path.parse(pathname).dir;
// console.log(path.parse(pathname).dir);

if (!fs.existsSync(target_dir)) {
  fs.mkdirSync(target_dir, { recursive: true });
}

download(url).pipe(fs.createWriteStream(pathname));
