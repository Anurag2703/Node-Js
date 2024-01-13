const fs = require('fs');

// fs.readFile('index.js', 'utf8', (err, data) => {
//     console.log(err, data);
// })


const b = fs.readFileSync('index.js');      //This function intentionally blocks the execution of the program until the file is read and its contents are available 
console.log(b.toString());

fs.writeFile("file2.txt", "This is some random data!", () => {
    console.log("Written to the file.")
})

console.log("\nFIle reading is complete!");