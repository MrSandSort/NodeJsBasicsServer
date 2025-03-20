const path= require("path")

console.log("Directory-Name", path.dirname(__filename)); // current Directory
console.log("File-Name", path.basename(__filename)) // current fileName
console.log("File-Extension", path.extname(__filename)) // fileExtension

const joinPath= path.join("/user","documents")
console.log(joinPath)