//for async , the values are readFile and writeFile
const { readFile, writeFile } = require('fs')

console.log('start')
//Three parameters Filepath for reading file, format to be read and the call back function which will contain err and result. Result will contain the content of the file and err will contain if there are any errors 
readFile('./content/first.txt', 'utf8', (err, result) => {
  //Returning in case of any errors
  if (err) {
    console.log(err)
    return
  }
  const first = result
  //Reading second file and assigning it to a variable
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    //Writing content to a file .It contains three parameters File path, file content and the callback function
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
