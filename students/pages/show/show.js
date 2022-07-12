
const fs = require ("fs");
//const { json } = require("stream/consumers");

function deleteStudent(){
    fetch('http://localhost:1702/btn-delete')
    .then((res) => res.text())
    const currentList = fs.readFileSync("../../data/student.json","utf-8");
    jsonlist = JSON.parse(currentList);
    jsonlist.shift();
}