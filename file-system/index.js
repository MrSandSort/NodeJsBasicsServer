const fs= require("fs")
const path= require("path")

/*

First we are in current directory, we will create an another directory inside of current directory
using fileServer and path. Then, we will create a file inside of the directory created where we will
write, read and append contents in the file.

*/
const folderPath= path.join(__dirname,"data")

if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath)
    console.log("Data folder created ")
}

const filePath= path.join(folderPath,'example.txt')

fs.writeFileSync(filePath,'Hello from sandesh')

const readContentFromFile= fs.readFileSync(filePath,'utf8');
console.log("File Content:", readContentFromFile)



