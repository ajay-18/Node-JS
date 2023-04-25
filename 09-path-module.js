const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

//will give only the last path(test.txt)
const base = path.basename(filePath)
console.log(base)

//will give the absolute path
// __dirname - provide location where the current file is located
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

//will have many methods
