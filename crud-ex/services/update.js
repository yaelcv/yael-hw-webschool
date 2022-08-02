const fs = require ("fs");

const path = require("path");
const ddir = path.join(__dirname + "/../data/");




function updateStudent(studentToUpdate){ 
    let studentFound = false;   
    const currentList = fs.readFileSync(ddir + "student.json","utf-8");
    jsonlist = JSON.parse(currentList);

    for (let index = 0; index < jsonlist.length; index++) {
        const currStudent = jsonlist[index];

        if (currStudent.id == studentToUpdate.id) {
            studentFound = true;
            const updatedStudent = {...currStudent, ...studentToUpdate};
            jsonlist.splice(index, 1, updatedStudent);
            fs.writeFileSync(ddir + "student.json", JSON.stringify(jsonlist));
        }                
    }    

    return studentFound;
}


module.exports = updateStudent;