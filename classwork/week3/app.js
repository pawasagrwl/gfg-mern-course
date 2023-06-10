//Task 1

const calc = require("./calc.js");
const result = calc.add (67, 76);
console.log(result)

// Task 2

const fs = require('fs');
fs.readFile('calc.js', 'utf8', function (err, data){
    console.log(data)
})

