const fs = require ("fs");

const path = require("path");
const ddir = path.join(__dirname + "/../data");


function read (){
    const students = fs.readFileSync(ddir + "/student.json", "utf-8");
    list = JSON.parse(students);
    return list;
}


module.exports = read;