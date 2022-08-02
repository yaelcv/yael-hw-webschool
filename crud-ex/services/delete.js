const fs = require ("fs");

const path = require("path");
const ddir = path.join(__dirname + "/../data/");

function deleteStudent(studentId){
    let studentDelete = false;   
    const currentList = fs.readFileSync(ddir + "student.json","utf-8");
    jsonlist = JSON.parse(currentList);

    for (let index = 0; index < jsonlist.length; index++) {
        const currStudent = jsonlist[index];

        console.log("CURR STUDENT ID = " + currStudent.id);

        if (currStudent.id == studentId) {
            jsonlist.splice(index, 1);
            studentDelete = true;   
        }        
    }

    fs.writeFileSync(ddir + "student.json", JSON.stringify(jsonlist));
    return studentDelete;
}


module.exports = deleteStudent;