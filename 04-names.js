// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

//This can be accessed in other files
//Object with two properties
//Here access is provided only for the two variables and we cannot use secret in other modules 
module.exports = { newJohn : john, newPeter : peter }
// module.exports = { john, peter } - can use this way as well and internally it will be like this { john : john, peter : peter }
