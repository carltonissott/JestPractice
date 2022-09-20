
function capitalize(string){
   let stringLower = (string.slice(1,string.length).toLowerCase())
   let firstLetter = (string.slice(0,1)).toUpperCase()
   return firstLetter.concat(stringLower)
}
module.exports = capitalize;