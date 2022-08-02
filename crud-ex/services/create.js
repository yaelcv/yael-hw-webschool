const fs = require ("fs");

const path = require("path");
const ddir = path.join(__dirname + "/../data/");

function createStudent(newStudent){
    const currentList = fs.readFileSync(ddir + "student.json", "utf-8");
    list = JSON.parse(currentList);
    list.push(newStudent)
    fs.writeFileSync(ddir + "student.json", JSON.stringify(list));
}


module.exports = createStudent;


