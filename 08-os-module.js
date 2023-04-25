//Built In Modules 
// * os
// * path
// * FS
// * http
// not required to provide ./ for importing these modules since they are built in 



let{userInfo} = require('os');
console.log(userInfo());

// info about current user
//We can assign the module to variable and use the methods within them or destructure the particular value we needed and use that(Above method)
const os = require('os')
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
