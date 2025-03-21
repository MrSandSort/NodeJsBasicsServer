const fs= require("fs")

fs.readFile('file-system/data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);  // Runs when file reading is complete
});

console.log('After file read');  // Runs immediately without waiting
