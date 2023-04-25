// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//To use the shared variables and methods we use require and pass the file path
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.newJohn)
sayHi(names.newPeter)


// Every File in node is a module