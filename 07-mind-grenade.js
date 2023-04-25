const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}
//This method will be executed when this module is imported(require(./mind-grenade.js)) even without declaring it to any variable and invoking it
addValues()
