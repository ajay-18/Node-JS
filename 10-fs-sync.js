//FS - File System  

const { readFileSync, writeFileSync } = require('fs')  //Destructuring readfilesync and writefilesync from fs module
console.log('start')
//Reading files first and second 
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//Writing contents to the file provided in the first argument..if file is not there in the path mentioned new file with the name will be created
//If file is present node by default will overwrite the values
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } // will append the values to the file..If this flag is not provided then file will be overwritten
)
console.log('done with this task')
console.log('starting the next one')
